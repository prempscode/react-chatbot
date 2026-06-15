
import {useState} from 'react';
import {Chatbot} from 'supersimpledev';
import './ChatInput.css';
export function ChatInput({ chatMessages, setChatMessages, setIsLoading, isLoading }) {
  const [inputText, setInputText] = useState("");

  function saveInputText() {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (isLoading || inputText.trim() === "") {
      return;
    }
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);

    setInputText("");

    setIsLoading(true);
    // robot response
    const response = await Chatbot.getResponseAsync(inputText);

    setIsLoading(false);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
  }
  // solution of 3i and 3j (onKeyDown={})
  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }

          if (e.key === "Escape") {
            setInputText("");
          }
        }}
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
      />
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}
