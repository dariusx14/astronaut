import React from "react";
import dynamic from "next/dynamic";

const AstronautAI = dynamic(() => import("../../../../components/AstronautAI"), { ssr: false });
const Chat = dynamic(() => import("../../../../components/Chat"), { ssr: false });

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold">🚀 Astronaut AI Assistant</h1>
      <div className="w-full h-[500px]">
        <AstronautAI />
      </div>
      <Chat />
    </div>
  );
}
