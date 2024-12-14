import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { useSelector } from "react-redux";
import show_Toast from "../../../../helpers/toast.helper";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { renderToString } from "react-dom/server";

import {
  Avatar,
  Box,
  Button,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { API_BASE_URL } from "../../../../constant/apiEndPoints";
import { StyledNavItemIcon } from "../../../../component/nav-section/styles";
import SvgColor from "../../../../component/svg-color";
import Logo from "../../../../component/logo";
import Lottie from "lottie-react";
import loaderAnimation from "./loaderAnimation.json";

export const API_BASE_URLS = process.env.REACT_APP_API_BASE_URL_CHAT_BOT;

const Message = ({
  answerArray,
  lastMessageRef,
  eventSourceRef,
  // message,
  lastAnswer,
  isLoading,
  index,
  setQuestionArray,
  setAnswerArray,
  setIsLoading,
  setEditingIndex,
  editingIndex,
  isTyping,
  setIsTyping,
  setEditQuestion,
  setVoice,
  setVoiceAnswer,
  typewriterRef,
}) => {
  const { user = {} } = useSelector((state) => state.login);
  const [editedMessage, setEditedMessage] = useState();

  const icon = (name) => (
    <SvgColor
      src={`/assets/icons/${name}.svg`}
      sx={{ width: "1rem", height: "1rem" }}
    />
  );

  const handleEdit = (content, currentIndex) => {
    const isEditing = editingIndex === currentIndex;
    setVoice(false);
    if (speechSynthesis && speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
    setEditQuestion(true);
    setEditingIndex(isEditing ? null : currentIndex);
    setEditedMessage(content);
  };

  const handleCancelEdit = () => {
    setEditQuestion(false);
    setEditingIndex(null);
    setEditedMessage();
  };

  const handleSave = async (index) => {
    const thread_Id = localStorage.getItem("current_thread_id");

    const events = new EventSource(`${API_BASE_URLS}/api/streamUserRequest`);

    // Close the old EventSource connection if it exists
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
    }

    setEditQuestion(false);
    if (!editedMessage) {
      show_Toast({
        status: false,
        message: "Message is required",
      });
      return;
    }
    setEditingIndex(null);
    setVoiceAnswer(null); // Update voiceAnswer here
    setIsLoading(true);
    // setAnswerArray([
    //   { role: "user", content: editedMessage },
    // ]);

    // Remove all messages after the provided index
    const newAnswerArray = answerArray.slice(0, index);

    // Add the edited message
    newAnswerArray.push({ role: "user", content: editedMessage });

    // Update the answerArray state
    setAnswerArray(newAnswerArray);

    try {
      const { data } = await axios.post(
        `${API_BASE_URLS}/api/openai/chatbot`,
        {
          query: editedMessage,
          thread_id: thread_Id,
          history: answerArray,
        }
        // {
        //   text: updatedQuestion,
        // }
      );

      localStorage.setItem("current_thread_id", data.threadId);

      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);
        if (parsedData.textEvent == "textCreated") {
          setAnswerArray((oldHistory) => [...oldHistory, parsedData]);
          // setVoiceAnswer((oldHistory) => [...oldHistory, parsedData]);
        }
        if (parsedData.textEvent == "textDelta") {
          setAnswerArray((oldHistory) => {
            const updatedHistory = [...oldHistory];

            updatedHistory[updatedHistory.length - 1] = {
              // Access and update the last element
              ...updatedHistory[updatedHistory.length - 1], // Spread existing properties
              // Update specific properties within the last element object
              content: parsedData.content,
            };
            // console.log(`newHistory ${updatedHistory}`);
            return updatedHistory;
          });
          setVoiceAnswer(parsedData?.content);
        }
      };
      events.onopen = () => console.log("SSE connection opened successfully.");
      events.onerror = (error) => {
        console.error("SSE connection encountered an error:", error);
        setIsLoading(false);
        events.close(); // Clean up event source on component unmount
      };

      // Store the new EventSource object in the useRef
      eventSourceRef.current = events;
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      show_Toast({
        status: false,
        message: err?.response?.data?.message || "Something went wrong",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const gethtml = <ReactMarkdown>{lastAnswer}</ReactMarkdown>;
  const answerHtml = renderToString(gethtml);

  return (
    <>
      {answerArray?.map((message, index) => {
        const isLastMessage = index === answerArray.length - 1;
        const isEditing = editingIndex === index; // Define isEditing here
        switch (message.role) {
          case "user":
            return (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  mb: 2,
                }}
                key={index}
                ref={isLastMessage ? lastMessageRef : null}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    src={`${API_BASE_URL}/${user?.imageUrl}`}
                    alt="photoURL"
                    sx={{ bgcolor: "#3C4256" }}
                  />

                  <Paper
                    variant="outlined"
                    sx={{
                      p: 1,
                      ml: 1,
                      mr: 0,
                      backgroundColor: "#F5F5F5",
                      color: "#3C4256",
                      borderRadius: "20px 20px 20px 5px",
                    }}
                  >
                    {isEditing ? (
                      <>
                        <OutlinedInput
                          fullWidth
                          multiline
                          placeholder="Type a message"
                          sx={{
                            minWidth: "58rem !important",
                            "& fieldset": {
                              display: "none",
                            },
                          }}
                          value={editedMessage}
                          onChange={(e) => setEditedMessage(e.target.value)}
                        />

                        <Stack
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Button
                            size="small"
                            type="submit"
                            variant="contained"
                            sx={{
                              backgroundColor: "#3C4256 !important",
                              marginRight: "5px",
                              color: "white !important",
                              "&:hover": {
                                backgroundColor: "white !important",
                                color: "black !important",
                                outline: "1px solid #3C4256",
                                outlineOffset: "-1px",
                              },
                            }}
                            onClick={() => handleSave(index)}
                          >
                            EditQuestion
                          </Button>
                          <Button
                            size="small"
                            type="submit"
                            variant="outlined"
                            sx={{
                              color: "#3C4256 !important",
                              border: "1px solid #3C4256 !important",
                              backgroundColor: "transparent",
                            }}
                            onClick={handleCancelEdit}
                          >
                            Cancel
                          </Button>
                        </Stack>
                      </>
                    ) : (
                      <Box sx={{ display: "flex", alignItems: "start" }}>
                        <Typography
                          variant="body2"
                          sx={{
                            paddingRight: isTyping || isLoading ? "12px" : "0",
                          }}
                        >
                          {message.content}
                        </Typography>
                        {!isTyping && !isLoading && (
                          <Stack
                            direction="row"
                            justifyContent="end"
                            alignItems="center"
                          >
                            <StyledNavItemIcon
                              onClick={() => handleEdit(message.content, index)}
                            >
                              {icon("editicon")}
                            </StyledNavItemIcon>
                          </Stack>
                        )}
                      </Box>
                    )}
                  </Paper>
                </Box>
              </Box>
            );
          case "assistant":
            return (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mb: 2,
                }}
                ref={isLastMessage ? lastMessageRef : null}
                key={index}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                  }}
                >
                  <Avatar sx={{ bgcolor: "#3C4256" }}>
                    <Logo />
                  </Avatar>
                  <Paper
                    variant="outlined"
                    sx={{
                      ml: 0,
                      mr: 1,
                      backgroundColor: "#3C4256",
                      color: "#f3f2fa",
                      borderRadius: "20px 20px 5px 20px",
                      width: "40rem",
                      flex: 1,
                      overflowWrap: "break-word",
                      padding: "16px 16px 0 16px",
                      boxShadow: "0 10px 40px 0 rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    <Typography variant="body2" component="div">
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </Typography>
                  </Paper>
                </Box>
              </Box>
            );
        }
      })}
      {isLoading && (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mb: 2,
            }}
            ref={lastMessageRef}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ bgcolor: "#3C4256" }}>
                <Logo />
              </Avatar>
              <Box
                sx={{
                  width: "9rem",
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: "-2rem",
                }}
              >
                <Lottie animationData={loaderAnimation} loop autoplay />
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Message;
