import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  Text,
  Spinner,
  IconButton,
} from "@chakra-ui/react";
import { FaMinus, FaLightbulb, FaUser } from "react-icons/fa";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Function for smooth scrolling
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: true }]);
      setInput("");
      setIsBotTyping(true);

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

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return isMinimized ? (
    <Box
      position="fixed"
      bottom="20px"
      right="20px"
      width="60px"
      height="60px"
      borderRadius="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
      backgroundColor="#1976d2"
      color="#fff"
      cursor="pointer"
      onClick={toggleMinimize}
    >
      <FaLightbulb size={24} />
    </Box>
  ) : (
    <Box
      position="fixed"
      bottom="20px"
      right="20px"
      width="350px"
      padding="20px"
      borderRadius="15px"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
      backgroundColor="#ffffff"
      display="flex"
      flexDirection="column"
      height="auto"
      maxHeight="400px"
      overflow="hidden"
      transition="width 0.3s ease-in-out"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        borderRadius: "15px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box
        textAlign="center"
        mb="15px"
        color="#1976d2"
        fontWeight="bold"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bgGradient="linear(to-r, #1976d2, #42a5f5)"
        p="5px 10px"
        borderRadius="10px"
        boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      >
        <Text
          display="flex"
          alignItems="center"
          fontWeight="600"
          fontSize="1.1rem"
        >
          <FaUser style={{ marginRight: 8 }} />
          Chat with us
        </Text>
        <IconButton onClick={toggleMinimize} size="sm" aria-label="Minimize chat">
          <FaMinus />
        </IconButton>
      </Box>
      <Box
        flex="1"
        overflowY="auto"
        mb="20px"
        p="10px 0"
        borderTop="1px solid #e0e0e0"
        borderBottom="1px solid #e0e0e0"
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            alignItems={message.user ? "flex-end" : "flex-start"}
          >
            <Box
              bg={message.user ? "#e3f2fd" : "#f5f5f5"}
              color="#333"
              p="10px"
              borderRadius="10px"
              mb="5px"
              maxWidth="80%"
              boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
            >
              {message.text}
            </Box>
          </Box>
        ))}
        {isBotTyping && (
          <Box display="flex" alignItems="center" fontStyle="italic" color="#888" p="10px">
            <Spinner size="sm" mr="2" />
            Bot is typing...
          </Box>
        )}
      </Box>
      <Box display="flex" alignItems="center">
        <Input
          variant="outline"
          size="sm"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          mr="2"
        />
        <Button
          onClick={handleSend}
          colorScheme="blue"
          variant="solid"
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}

export default Chatbot;
