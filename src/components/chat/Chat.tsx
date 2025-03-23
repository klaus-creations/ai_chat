import React from "react";
import ChatConversation from "./ChatConversation";
import ChatInput from "./ChatInput";

export default function Chat() {
  return (
    <div className="w-[95%] md:w-[74%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] h-full mx-auto px-2 py-3 my-1 flex flex-col justify-between">
      <ChatConversation />
      <section className="w-full h-[25%] flex items-center">
        <ChatInput />
      </section>
    </div>
  );
}
