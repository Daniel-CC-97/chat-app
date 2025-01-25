"use client";
import React, { useState } from "react";

const ChatForm = ({
  onSendMessage,
}: {
  onSendMessage: (message: string) => void;
}) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted");

    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Placeholder"
        className="flex-1 px-4 border-2 py-2 bg-inputBackground border-inputBorder text-inputText rounded-lg focus:outline-none"
      ></input>
      <button
        type="submit"
        className="bg-primary px-4 py-2 rounded-lg hover:bg-secondary transition-all duration-150"
      >
        Send
      </button>
    </form>
  );
};

export default ChatForm;
