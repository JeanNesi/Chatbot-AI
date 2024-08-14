"use client";

import { EmptyMessages, Header, Message, Textarea } from "@/components";
import { useChat } from "ai/react";

export default function Home() {
  const { input, handleSubmit, messages, setInput } = useChat();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="px-6 pt-2 flex flex-col gap-4 overflow-auto w-full h-[calc(100vh_-_188px)] prose prose-slate prose-sm max-w-none">
        {!messages.length && <EmptyMessages />}

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
          placeholder="Mensagem Chatbot"
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
