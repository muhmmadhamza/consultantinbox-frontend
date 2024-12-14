import * as React from "react";
import { useState } from "react";

import { Box, TextField, Grid, Button, Backdrop, Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import StopIcon from "@mui/icons-material/Stop";
import LoopIcon from "@mui/icons-material/Loop";
import axios from "axios";
import "./bubble.css";
import show_Toast from "../../../../helpers/toast.helper";
import Ask from "./Ask";
import Message from "./Message";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

import "./microphone.css";
import { Helmet } from "react-helmet-async";
// import Microphone from "./Microphone";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";
export const API_BASE_URLS = process.env.REACT_APP_API_BASE_URL_CHAT_BOT;

const ChatUI = () => {
  const buttonData = [
    { text: "what is natural gas used for" },
    { text: "what is natural gas made of" },
    { text: "where is natural gas found" },
    { text: "Advantages of natural gas" },
  ];
  const [text, setText] = useState("");
  const [questionArray, setQuestionArray] = useState([]);
  const [answerArray, setAnswerArray] = useState([]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");
  const [speechSynthesis, setSpeechSynthesis] = useState(null);
  const [files, setFiles] = useState([]);
  const [bucketUris, setBucketUris] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [showButtonData, setShowButtonData] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [editQuestion, setEditQuestion] = useState(false);
  const [voice, setVoice] = useState(false);
  const [voiceAnswer, setVoiceAnswer] = useState(null);
  const typewriterRef = React.useRef(null);
  const eventSourceRef = React.useRef(null);
  const lastMessageRef = React.useRef(null);

  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const submitFile = async (file) => {
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("Audio", file);
    setLoading(true);

    try {
      const response = await axios.post(
        `${API_BASE_URLS}/api/openai/AudioQuestion`,
        formData,
        config
      );
      const bucketUri = response.data.Location;
      setBucketUris([...bucketUris, bucketUri]);
      setQuestionArray((prevItems) => [...prevItems, response.data.question]);
      setAnswerArray((prevItems) => [...prevItems, response.data.reply]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  const pushFile = (file) => {
    const _file = new File([file.blob], new Date().valueOf(), {
      type: file.blob.type,
    });
    submitFile(_file);
    setFiles([...files, file]);
  };

  let recognition;
  React.useEffect(() => {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.continuous = true;

      recognition.onresult = (event) => {
        const transcript =
          event.results[event.results.length - 1][0].transcript;
        setRecognizedText(transcript);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error: ", event.error);
        setIsListening(false);
      };
    } else {
      console.warn("Speech recognition is not supported in this browser.");
    }
  }, []);

  React.useEffect(() => {
    if ("speechSynthesis" in window) {
      const synth = window.speechSynthesis;
      setSpeechSynthesis(synth);
    }
  }, []);

  const speakText = (text) => {
    if (speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(text);

      utterance.onend = () => {
        setVoice(false);
      };

      speechSynthesis.speak(utterance);
    }
  };

  React.useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        handleSend();
      };
    }

    mic.onstart = () => {};

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      setText(transcript);
      mic.onerror = (event) => {};
    };
  };

  const handleSend = () => {
    if (text.trim() !== "") {
      responseHandler();
      setShowButtonData(false);
    }
  };

  const responseHandler = async (defaultQuestion) => {
    const thread_Id = localStorage.getItem("current_thread_id");

    const events = new EventSource(`${API_BASE_URLS}/api/streamUserRequest`);

    // Close the old EventSource connection if it exists
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
    }

    if (speechSynthesis && speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
    setVoice(false);
    defaultQuestion
      ? (async function () {
          setQuestionArray((prevItems) => [...prevItems, defaultQuestion]);
          setShowButtonData(false);
          setIsLoading(true);
          setIsTyping(true);
          setEditingIndex(null);
          setAnswerArray((oldHistory) => [
            ...oldHistory,
            { role: "user", content: defaultQuestion },
          ]);
          try {
            const { data } = await axios.post(
              `${API_BASE_URLS}/api/openai/chatbot`,
              {
                query: defaultQuestion,
                thread_id: thread_Id,
                history: answerArray,
              }
              // {
              //   text: defaultQuestion,
              // }
            );

            localStorage.setItem("current_thread_id", data.threadId);

            events.onmessage = (event) => {
              const parsedData = JSON.parse(event.data);
              if (parsedData.textEvent == "textCreated") {
                setAnswerArray((oldHistory) => [...oldHistory, parsedData]);
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
            events.onopen = () =>
              console.log("SSE connection opened successfully.");
            events.onerror = (error) => {
              console.error("SSE connection encountered an error:", error);
              setIsLoading(false);
              events.close(); // Clean up event source on component unmount
            };

            // Store the new EventSource object in the useRef
            eventSourceRef.current = events;

            // setAnswerArray((prevItems) => [...prevItems, data?.content]);

            setIsLoading(false);
            setIsTyping(false);
            // setVoiceAnswer(data?.content);
            setText("");
          } catch (err) {
            setIsLoading(false);
            setIsTyping(false);
            show_Toast({
              status: false,
              message: err?.response?.data?.message || "Something went wrong",
            });
          }
        })()
      : (async () => {
          setQuestionArray((prevItems) => [...prevItems, text]);
          setIsLoading(true);
          setIsTyping(true);
          setEditingIndex(null);
          setAnswerArray((oldHistory) => [
            ...oldHistory,
            { role: "user", content: text },
          ]);
          try {
            const { data } = await axios.post(
              `${API_BASE_URLS}/api/openai/chatbot`,
              {
                query: text,
                thread_id: thread_Id,
                history: answerArray,
              }
              // {
              //   text,
              // }
            );

            localStorage.setItem("current_thread_id", data.threadId);

            events.onmessage = (event) => {
              const parsedData = JSON.parse(event.data);
              if (parsedData.textEvent == "textCreated") {
                setAnswerArray((oldHistory) => [...oldHistory, parsedData]);
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
            events.onopen = () =>
              console.log("SSE connection opened successfully.");
            events.onerror = (error) => {
              console.error("SSE connection encountered an error:", error);
              setIsLoading(false);
              events.close(); // Clean up event source on component unmount
            };

            // Store the new EventSource object in the useRef
            eventSourceRef.current = events;

            // setAnswerArray((prevItems) => [...prevItems, data?.content]);
            setIsLoading(false);
            setIsTyping(false);
            // setVoiceAnswer(data?.content);
            setText("");
          } catch (err) {
            setIsLoading(false);
            setIsTyping(false);
            show_Toast({
              status: false,
              message: err?.response?.data?.message || "Something went wrong",
            });
          }
        })();
  };

  const handleRegenerate = async () => {
    const thread_Id = localStorage.getItem("current_thread_id");

    const events = new EventSource(`${API_BASE_URLS}/api/streamUserRequest`);

    // Close the old EventSource connection if it exists
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
    }

    setVoice(false);
    setIsTyping(true);
    if (speechSynthesis && speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
    const lastUserMessageIndex = answerArray
      .slice()
      .reverse()
      .findIndex((item) => item.role === "user");
    const lastUserMessageContent =
      lastUserMessageIndex !== -1
        ? answerArray[answerArray.length - lastUserMessageIndex - 1].content
        : null;

    // Find the index of the last message with role === "assistant"
    const lastAssistantIndex = answerArray
      .slice()
      .reverse()
      .findIndex((item) => item.role === "assistant");

    // Create a new array without the last message with role === "assistant"
    const filteredAnswerArray =
      lastAssistantIndex !== -1
        ? answerArray.filter(
            (item, index) =>
              index !== answerArray.length - lastAssistantIndex - 1
          )
        : answerArray;

    // Update the answerArray state
    setAnswerArray(filteredAnswerArray);

    setIsLoading(true);
    setEditingIndex(null);
    try {
      const { data } = await axios.post(`${API_BASE_URLS}/api/openai/chatbot`, {
        query: lastUserMessageContent,
        thread_id: thread_Id,
        history: answerArray,
      });
      // setAnswerArray((prevItems) => {
      //   const updatedAnswers = [...prevItems];
      //   if (prevItems.length > 0) {
      //     updatedAnswers[prevItems.length - 1] = data?.content;
      //   }
      //   return updatedAnswers;
      // });

      localStorage.setItem("current_thread_id", data.threadId);

      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);
        if (parsedData.textEvent == "textCreated") {
          setAnswerArray((oldHistory) => [...oldHistory, parsedData]);
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

      eventSourceRef.current = events;

      setIsLoading(false);
      setIsTyping(false);
      // setVoiceAnswer(data?.content);
      setText("");
    } catch (err) {
      setIsLoading(false);
      setIsTyping(false);
      show_Toast({
        status: false,
        message: err?.response?.data?.message || "Something went wrong",
      });
    }
  };

  const handleStopGenerating = () => {
    setVoice(false);
    setIsTyping(false);
    if (typewriterRef.current) {
      const partialGeneratedText =
        typewriterRef.current.state.visibleNodes[0].node.wholeText;
      setVoiceAnswer(partialGeneratedText);
      typewriterRef.current.stop();
    }

    if (speechSynthesis && speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
  };

  const toggleVoiceMode = (mode) => {
    setVoice(mode);
    if (mode === true) {
      speakText(voiceAnswer);
      setEditQuestion(false);
      setEditingIndex(null);
    } else {
      if (speechSynthesis && speechSynthesis.speaking) {
        speechSynthesis.cancel();
      }
    }
  };

  return (
    <>
      <Helmet>
        <title> Dashboard | Chatbot </title>
      </Helmet>
      <Box
        sx={{
          filter: isBlurred ? "blur(4px)" : "none",
        }}
      >
        <Box
          sx={{
            height: questionArray.length === 0 ? "60vh" : "auto",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            bottom: "12px",
            right: "28px",
            boxShadow: "10px 10px 55px -22px rgba(0,0,0,0.75)",
            backgroundColor: "white",
            padding: "22px",
            // boxShadow: "10px 10px 31px -10px rgba(0,0,0,0.75)",
            // boxShadow:'0 0 8px gray'
          }}
        >
          <Box
            className="custom-scrollbar"
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              scrollbarWidth: "thin !important",
            }}
          >
            <Message
              answerArray={answerArray}
              lastMessageRef={lastMessageRef}
              eventSourceRef={eventSourceRef}
              // key={index}
              // index={index}
              // message={EachQ}
              // lastAnswer={
              //   questionArray.length - 1 === index && answerArray[index]
              // }
              // answerArray={
              //   questionArray.length - 1 !== index &&
              //   !!answerArray[index] &&
              //   answerArray[index]
              // }
              isLoading={isLoading}
              isTyping={isTyping}
              setIsTyping={setIsTyping}
              typewriterRef={typewriterRef}
              setQuestionArray={setQuestionArray}
              setAnswerArray={setAnswerArray}
              setIsLoading={setIsLoading}
              setEditingIndex={setEditingIndex}
              editingIndex={editingIndex}
              setEditQuestion={setEditQuestion}
              setVoice={setVoice}
              setVoiceAnswer={setVoiceAnswer}
            />
          </Box>
          <Box
            sx={{
              p: 1,
            }}
          >
            {!!questionArray.length && (
              <Stack
                direction="row"
                justifyContent="end"
                alignItems="center"
                sx={{ marginBottom: "20px", marginRight: "5rem" }}
              >
                {isLoading || isTyping ? (
                  <Button
                    size="small"
                    type="submit"
                    variant="contained"
                    sx={{
                      display: isLoading ? "none" : "block",
                      backgroundColor: "#3C4256 !important",
                      color: "white !important",
                      "&:hover": {
                        backgroundColor: "white !important",
                        color: "black !important",
                        outline: "1px solid #3C4256",
                        outlineOffset: "-1px",
                      },
                    }}
                    onClick={handleStopGenerating}
                  >
                    <StopIcon
                      sx={{
                        height: "1rem",
                        width: "1rem",
                        marginBottom: "3px",
                        marginRight: "4px",
                      }}
                    />
                    Stop generating
                  </Button>
                ) : (
                  <Button
                    size="small"
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#3C4256 !important",
                      color: "white !important",
                      "&:hover": {
                        backgroundColor: "white !important",
                        color: "black !important",
                        outline: "1px solid #3C4256",
                        outlineOffset: "-1px",
                      },
                    }}
                    onClick={() => {
                      handleRegenerate();
                    }}
                  >
                    <LoopIcon
                      sx={{
                        height: "1rem",
                        width: "1rem",
                        marginBottom: "3px",
                        marginRight: "4px",
                      }}
                    />
                    Regenerate
                  </Button>
                )}
                {!isLoading &&
                  (voice ? (
                    <Button
                      size="small"
                      type="submit"
                      variant="outlined"
                      sx={{
                        marginLeft: "4px",
                        color: "#3C4256 !important",
                        border: "1px solid #3C4256 !important",
                        backgroundColor: "transparent",
                      }}
                      onClick={() => {
                        toggleVoiceMode(false);
                      }}
                    >
                      {/* Stop Listening */}
                      <VolumeUpIcon
                        sx={{
                          margin: "1.5px 0px",
                          fontSize: "large",
                        }}
                      />
                    </Button>
                  ) : (
                    <Button
                      size="small"
                      type="submit"
                      variant="outlined"
                      sx={{
                        marginLeft: "4px",
                        color: "#3C4256 !important",
                        border: "1px solid #3C4256 !important",
                        backgroundColor: "transparent",
                      }}
                      onClick={() => {
                        toggleVoiceMode(true);
                      }}
                    >
                      {/* Start Listening */}
                      <VolumeOffIcon
                        sx={{
                          margin: "1.5px 0px",
                          fontSize: "large",
                        }}
                      />
                    </Button>
                  ))}
              </Stack>
            )}

            {/*showButtonData mean default questions for chatbot */}
            {showButtonData && (
              <Ask data={buttonData} responseHandler={responseHandler} />
            )}

            <Grid container>
              <Grid item xs={11}>
                <TextField
                  InputProps={{
                    sx: {
                      borderRadius: "42px",
                      backgroundColor: "#F5F5F5",
                      height: "2.5rem",
                      "& .MuiInputAdornment-root": {
                        position: "absolute",
                        right: 0,
                        height: "1vh",
                      },
                    },
                    // Mic Icon within the textfield
                    // endAdornment: <Microphone pushFile={pushFile} />,
                  }}
                  fullWidth
                  placeholder="Type a message"
                  variant="outlined"
                  required
                  disabled={isLoading || isTyping || editQuestion}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && text.trim() !== "") {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                ></TextField>
              </Grid>
              <Grid
                item
                xs={1}
                sx={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor:
                      isLoading || isTyping || editQuestion
                        ? "#6B7280"
                        : "#3C4256",
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/assets/Vector.png"
                    alt="Send"
                    onClick={isLoading ? null : handleSend} // Conditionally set onClick handler
                    style={{
                      cursor: isLoading ? "not-allowed" : "pointer", // Change cursor style based on isLoading
                      width: "22px",
                      height: "22px",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {Loading && (
          <Backdrop
            sx={{ color: "red", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={Loading}
          >
            <CircularProgress color="primary" />
          </Backdrop>
        )}
      </Box>
    </>
  );
};

export default ChatUI;
