import React, { useState } from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const AskButton = ({ text, onClick }) => {
  const [showIcon, setShowIcon] = useState(false);

  const handleIconClick = () => {
    if (onClick) {
      onClick(text);
    }
  };

  return (
    <Button
      fullWidth
      variant="outlined"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        color: "black !important",
        border: "1px solid #3C4256",
        "&:hover": {
          color: "black !important",
          border: "1px solid #3C4256",
        },
        borderRadius: "15px",
        height: "50px",
        fontSize:'0.8rem'
      }}
      onMouseEnter={() => setShowIcon(true)}
      onMouseLeave={() => setShowIcon(false)}
      onClick={handleIconClick}
    >
      {text}
      <SendIcon
        className="send-icon"
        style={{ display: showIcon ? "block" : "none" }}
      />
    </Button>
  );
};

export default AskButton;
