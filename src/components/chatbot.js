import React, { useState } from "react";
import { Paper, TextField, Button, Typography } from "@material-ui/core";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: true }]);
      setInput("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((msgs) => [
          ...msgs,
          {
            text: "Thank you for your message. How can I assist you with our museum today?",
            user: false,
          },
        ]);
      }, 1000);
    }
  };

  return (
    <Paper
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        width: 300,
        padding: 20,
      }}
    >
      <Typography variant="h6">Chat with us</Typography>
      <div style={{ height: 300, overflowY: "auto", marginBottom: 20 }}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{ textAlign: message.user ? "right" : "left" }}
          >
            <Paper
              style={{
                display: "inline-block",
                padding: 10,
                margin: 5,
                backgroundColor: message.user ? "#e3f2fd" : "#f5f5f5",
              }}
            >
              {message.text}
            </Paper>
          </div>
        ))}
      </div>
      <TextField
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSend()}
      />
      <Button
        onClick={handleSend}
        color="primary"
        variant="contained"
        style={{ marginTop: 10 }}
      >
        Send
      </Button>
    </Paper>
  );
}

export default Chatbot;
