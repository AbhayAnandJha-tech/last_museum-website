import React, { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Typography,
  CircularProgress,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MinimizeIcon from "@material-ui/icons/Remove";
import ScienceIcon from "@material-ui/icons/EmojiObjects";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  chatbotContainer: {
    position: "fixed",
    bottom: 20,
    right: 20,
    width: 350,
    padding: 20,
    borderRadius: 15,
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
    background: "linear-gradient(135deg, #f0f4ff, #ffffff)",
    color: "#333",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      bottom: 10,
      right: 10,
    },
    zIndex: 1000,
  },
  minimizedChatbot: {
    position: "fixed",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#0d6efd",
    color: "#fff",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
    },
    [theme.breakpoints.down("xs")]: {
      bottom: 10,
      right: 10,
    },
  },
  chatHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "linear-gradient(45deg, #0d6efd, #6610f2)",
    padding: "10px 15px",
    borderRadius: "10px",
    color: "#ffffff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Merriweather', serif",
    fontWeight: 700,
  },
  headerText: {
    display: "flex",
    alignItems: "center",
    fontWeight: 600,
    fontSize: "1.1rem",
    fontFamily: "'Roboto', sans-serif",
  },
  chatArea: {
    height: 300,
    overflowY: "auto",
    marginBottom: 20,
    padding: "10px 0",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#e0f7fa",
    color: "#007bff",
    padding: 10,
    borderRadius: 12,
    margin: 5,
    maxWidth: "80%",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Roboto', sans-serif",
  },
  botMessage: {
    backgroundColor: "#f1f1f1",
    color: "#333",
    padding: 10,
    borderRadius: 12,
    margin: 5,
    maxWidth: "80%",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Roboto', sans-serif",
  },
  inputArea: {
    display: "flex",
    alignItems: "center",
  },
  inputField: {
    flexGrow: 1,
    marginRight: theme.spacing(1),
    backgroundColor: "#e9ecef",
    borderRadius: 8,
    border: "none",
    outline: "none",
    padding: 10,
    "&:focus": {
      border: "1px solid #0d6efd",
      backgroundColor: "#fff",
    },
  },
  sendButton: {
    backgroundColor: "#0d6efd",
    color: "#fff",
    borderRadius: 8,
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "#155fa0",
    },
  },
  typingIndicator: {
    display: "flex",
    alignItems: "center",
    fontStyle: "italic",
    color: "#6c757d",
    padding: 10,
  },
}));

function Chatbot() {
  const classes = useStyles();

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Function to handle sending a message
  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: true }]);
      setInput("");
      setIsBotTyping(true);

      // Simulate bot response
      setTimeout(() => {
        setIsBotTyping(false);
        const botResponses = [
          "Thank you for your message. How can I assist you with our museum today?",
          "Our museum features a variety of exhibitions, including interactive displays and special science events.",
          "We are open from 10 AM to 6 PM from Monday to Saturday. On Sundays, we open from 11 AM to 5 PM.",
          "To book tickets, please visit our ticket booking section or ask here for guidance.",
          "Become a member to enjoy exclusive benefits, discounts, and special event invitations.",
        ];
        const randomResponse =
          botResponses[Math.floor(Math.random() * botResponses.length)];
        setMessages((msgs) => [
          ...msgs,
          {
            text: randomResponse,
            user: false,
          },
        ]);
      }, 1000);
    }
  };

  // Toggle the minimized state of the chatbot
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return isMinimized ? (
    <div className={classes.minimizedChatbot} onClick={toggleMinimize}>
      <ScienceIcon style={{ fontSize: 40 }} />
    </div>
  ) : (
    <Paper className={classes.chatbotContainer}>
      <div className={classes.chatHeader}>
        <Typography className={classes.headerText}>
          <PersonIcon style={{ marginRight: 8 }} /> Chat with us
        </Typography>
        <IconButton onClick={toggleMinimize} size="small">
          <MinimizeIcon />
        </IconButton>
      </div>
      <div className={classes.chatArea}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={classes.messageContainer}
            style={{ alignItems: message.user ? "flex-end" : "flex-start" }}
          >
            <Paper
              className={
                message.user ? classes.userMessage : classes.botMessage
              }
            >
              {message.text}
            </Paper>
          </div>
        ))}
        {isBotTyping && (
          <div className={classes.typingIndicator}>
            <CircularProgress size={16} style={{ marginRight: 8 }} />
            Bot is typing...
          </div>
        )}
      </div>
      <div className={classes.inputArea}>
        <TextField
          className={classes.inputField}
          variant="outlined"
          size="small"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <Button
          onClick={handleSend}
          variant="contained"
          className={classes.sendButton}
        >
          Send
        </Button>
      </div>
    </Paper>
  );
}

export default Chatbot;
