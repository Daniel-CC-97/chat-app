"use client";
import { useState } from "react";
import ChatForm from "@/components/ChatForm";
import ChatMessage from "@/components/ChatMessage";

export default function Home() {
  const [messages, setMessages] = useState<
    { sender: string; message: string }[]
  >([]);
  const [room, setRoom] = useState("");
  const [joined, setJoined] = useState(false);
  const [userName, setUserName] = useState("");

  const handleSendMessage = (message: string) => {
    console.log("Message: ", message);
  };

  const handleJoinRoom = () => {
    setJoined(true);
  };

  return (
    <div className="flex justify-center w-full mt-24">
      {!joined ? (
        <div className="flex w-full max-w-3xl mx-auto flex-col items-center ">
          <h1 className="mb-4 text-2xl font-bold">Join a Room</h1>
          <input
            type="text"
            placeholder="Enter your username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-64 px-4 py-2 mb-4 border-2 rounded-lg"
          ></input>
          <input
            type="text"
            placeholder="Enter room name"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="w-64 px-4 py-2 mb-4 border-2 rounded-lg"
          ></input>
          <button
            onClick={handleJoinRoom}
            className="px-4 py-2 rounded-lg bg-primary hover:bg-secondary transition-all duration-150"
          >
            Join Room
          </button>
        </div>
      ) : (
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="mb-4 font-bold text-2xl">Room: 1</h1>
          <div className="bg-white h-[500px] overflow-y-auto p-4 mb-4 border-2 rounded-lg">
            {/* TODO: add chat rooms */}
            {messages?.map((msg, index) => (
              <ChatMessage
                key={index}
                message={msg.message}
                sender={msg.sender}
                isOwnMessage={msg.sender === userName}
              ></ChatMessage>
            ))}
          </div>
          <ChatForm onSendMessage={handleSendMessage}></ChatForm>
        </div>
      )}
    </div>
  );
}
