import React, { useState } from "react";

const Chat_Input_Box = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  // const [messages, setMessages] = useState([]);

  return (
    <div className="w-auto flex">
      <input
        className=" w-[80%] border-b-2 border-l-2 border-t-2 border-blue-800 bg-gray-200 text-gray-800 py-3 outline-0 text-xl px-2"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />

      <button
        className="w-[20%] text-xl text-white bg-blue-600 py-3 cursor-pointer hover:bg-blue-800 transition-colors duration-400"
        // onClick={sendMessage}
        disabled={loading}
      >
        Send
      </button>
    </div>
  );
};

export default Chat_Input_Box;
