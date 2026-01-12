import { useState } from "react";
// import Chat_Bubble from "../Chat_Bubble/Chat_Bubble";
// import Chat_Input_Box from "../Chat_Input_Box/Chat_Input_Box";

interface Message {
  role: "assistant" | "user";
  content: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "It's Setu Agent AI. Are you thinking about studying abroad?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleKeyDown = (e: { key: string }) => {
  //   if (!input.trim()) return;

  //   if (e.key == "Enter") {
  //     setMessages((prev) => [...prev, { role: "user", content: input }]);

  //     setInput("");

  //     setLoading(true);

  //     // Fake Reply
  //     const reply = "Echo: " + input;

  //     setMessages((prev) => [...prev, { role: "assistant", content: reply }]);

  //     setLoading(false);
  //   }
  // };

  const sendMessage = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setInput("");

    setMessages((prev) => [...prev, { role: "user", content: input }]);

    const res = await fetch("http://localhost:3001/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });

    // AI Reply
    const data = await res.json();

    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: data.reply },
    ]);
    setLoading(false);
  };
  return (
    <>
      <div className="px-2 py-4">
        {messages?.map((message, i) => (
          <div key={i}>
            {/* <Chat_Bubble message={message} //> */}

            <div>
              <b>{message.role}</b>: {message.content}
            </div>
          </div>
        ))}
        {loading ? <span>Loading...</span> : ""}
      </div>
      <div className="absolute bottom-0 w-full">
        {/* <Chat_Input_Box /> */}
        <div className="w-auto flex">
          <input
            className=" w-[80%] border-b-2 border-l-2 border-t-2 border-blue-800 bg-gray-200 text-gray-800 py-3 outline-0 text-xl px-2"
            // onKeyDown={handleKeyDown}
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />

          <button
            className="w-[20%] text-xl text-white bg-blue-600 py-3 cursor-pointer hover:bg-blue-800 transition-colors duration-400"
            onClick={sendMessage}
            disabled={loading}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;
