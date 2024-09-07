import React, { createContext, useState } from "react";

export const ChatbotContext = createContext();

export const ChatbotProvider = ({ children }) => {
  const [isMinimized, setIsMinimized] = useState(true);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <ChatbotContext.Provider value={{ isMinimized, toggleMinimize }}>
      {children}
    </ChatbotContext.Provider>
  );
};
