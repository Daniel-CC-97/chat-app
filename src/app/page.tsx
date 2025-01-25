"use client";
import { useState } from "react";
import ChatForm from "@/components/ChatForm";

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

  return (
    <div className="flex justify-center w-full mt-24">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="mb-4 font-bold text-2xl">Room: 1</h1>
        <div>{/* TODO: add chat rooms */}</div>
        <ChatForm onSendMessage={handleSendMessage}></ChatForm>
      </div>
    </div>
  );
}
