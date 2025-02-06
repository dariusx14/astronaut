// src/hooks/useChat.ts
import { useState } from "react";

// Define the message type
interface Message {
  text: string;
  type: 'user' | 'assistant';
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);  // Add isLoading state

  const sendMessage = (message: string) => {
    setIsLoading(true);  // Set loading state to true when sending message
    const newMessage: Message = { text: message, type: 'user' };

    // Simulate sending a message (e.g., API call)
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setIsLoading(false);  // Set loading state to false after message is sent
    }, 1000);  // Simulating a delay (e.g., network request)
  };

  return { messages, isLoading, sendMessage };  // Return isLoading
}
