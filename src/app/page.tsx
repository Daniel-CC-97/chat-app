"use client";
import { useState, useEffect } from "react";
import ChatForm from "@/components/ChatForm";
import ChatMessage from "@/components/ChatMessage";
import { socket } from "@/lib/socketClient";

export default function Home() {
  const [messages, setMessages] = useState<
    { sender: string; message: string }[]
  >([]);
  const [room, setRoom] = useState("");
  const [joined, setJoined] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on("user-joined", (data) => {
      setMessages((prev) => [...prev, { sender: "system", message: data }]);
    });

    return () => {
      socket.off("user_joined");
      socket.off("message");
    };
  }, []);

  const handleSendMessage = (message: string) => {
    const data = { room, message, sender: userName };
    setMessages((prev) => [...prev, { sender: userName, message }]);
    socket.emit("message", data);
  };

  const handleJoinRoom = () => {
    if (room && userName) {
      socket.emit("join-room", { room, username: userName });
      setJoined(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen p-4">
      {!joined ? (
        <div className="flex h-full w-full max-w-3xl mx-auto flex-col items-center justify-center ">
          <h1 className="mb-4 text-2xl font-bold">Join a Room</h1>
          <input
            type="text"
            placeholder="Enter your username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-64 px-4 py-2 mb-4 border-2 rounded-lg bg-inputBackground border-inputBorder text-inputText focus:outline-none"
          ></input>
          <input
            type="text"
            placeholder="Enter room name"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="w-64 px-4 py-2 mb-4 border-2 rounded-lg bg-inputBackground border-inputBorder text-inputText focus:outline-none"
          ></input>
          <button
            onClick={handleJoinRoom}
            className="px-4 py-2 rounded-lg bg-primary hover:bg-secondary transition-all duration-150"
          >
            Join Room
          </button>
        </div>
      ) : (
        // How can i make this div below take up the whole screen?
        <div className="flex flex-col h-screen w-full max-w-3xl mx-auto py-4">
          <h1 className="mb-4 font-bold text-2xl">Room: {room}</h1>
          {/* This div will dynamically take up available space */}
          <div className="flex-grow overflow-y-auto p-4 border-2 rounded-lg">
            {messages?.map((msg, index) => (
              <ChatMessage
                key={index}
                message={msg.message}
                sender={msg.sender}
                isOwnMessage={msg.sender === userName}
              ></ChatMessage>
            ))}
          </div>
          {/* ChatForm will stay at the bottom */}
          <ChatForm onSendMessage={handleSendMessage}></ChatForm>
        </div>
      )}
    </div>
  );
}
