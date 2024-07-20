import React, { useState } from "react";
import axios from "axios";
import "./Bot.css";

const Bot = ({ navigate }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { sender: "user", text: input };
      setMessages([...messages, userMessage]);

      const botResponse = await getBotResponse(input);
      setMessages((prevMessages) => [
        ...prevMessages,
        userMessage,
        botResponse,
      ]);
      setInput("");
    }
  };

  const getBotResponse = async (input) => {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo-1106",
        messages: [{ role: "user", content: input }],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const botMessage = response.data.choices[0].message.content;
    handleNavigation(botMessage);

    return { sender: "bot", text: botMessage };
  };

  const handleNavigation = (botMessage) => {
    if (botMessage.toLowerCase().includes("navigate to home")) {
      navigate("/");
    } else if (botMessage.toLowerCase().includes("navigate to portfolio")) {
      navigate("/portfolio");
    } else if (botMessage.toLowerCase().includes("navigate to contact")) {
      navigate("/contact");
    }
  };

  return (
    <div className="bot-container">
      <div className="bot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`bot-message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="bot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Bot;
