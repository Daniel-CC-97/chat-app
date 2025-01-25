import React from "react";

interface ChatMessageProps {
  sender: string;
  message: string;
  isOwnMessage: boolean;
}

const ChatMessage = ({ sender, message, isOwnMessage }: ChatMessageProps) => {
  const isSystemMessage = sender === "System";

  return (
    <div
      className={`flex mb-3 ${
        isSystemMessage
          ? "justify-center"
          : isOwnMessage
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`rounded-lg max-w-xs px-4 py-2 ${
          isSystemMessage
            ? "bg-messageBackground"
            : isOwnMessage
            ? "bg-receiverMessageBackground border"
            : "border bg-inputBackground"
        }`}
      >
        {!isSystemMessage && <p className="text-sm font-bold">{sender}</p>}
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
