"use client";
import React, { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  // Speech Recognition Hooks
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    setMessage(transcript); // Update message state when voice input changes
  }, [transcript]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setReply(data.reply);
    resetTranscript(); // Reset voice input after sending
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold">🚀 Astronaut AI Chat</h1>

      {/* Text Input / Voice Transcription */}
      <textarea
        className="border p-2 w-80"
        placeholder="Ask the Astronaut AI..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      {/* Buttons */}
      <div className="flex space-x-2">
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Send
        </button>
        <button
          onClick={listening ? SpeechRecognition.stopListening : SpeechRecognition.startListening}
          className="bg-green-500 text-white p-2 rounded"
        >
          {listening ? "Listening..." : "Start Voice"}
        </button>
      </div>

      {/* AI Reply */}
      {reply && (
        <div className="mt-4 text-lg border p-3 w-80 bg-gray-100 rounded">
          {reply}
        </div>
      )}
    </div>
  );
}
