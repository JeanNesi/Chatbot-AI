"use client";

import { Header, Message, Textarea } from "@/components";
import { useChat } from "ai/react";

export default function Home() {
  const { input, handleSubmit, messages, setInput } = useChat();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="px-6 pt-2 flex flex-col gap-4 overflow-auto h-[calc(100vh_-_165px)]">
        {messages.map((message) => (
          <Message
            key={message.id}
            userMessage={message.role === "user"}
            message={message.content}
          />
        ))}
      </main>

      <footer className="px-6 pb-6 mt-auto">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(key) => {
            if (key.key === "Enter") {
              handleSubmit();
            }
          }}
        />
      </footer>
    </div>
  );
}
