import { useState } from "react";
import {ChatMessages} from './components/ChatMessages';
import {ChatInput} from './components/ChatInput';
import "./App.css";

function App() {
  // messages
  const [chatMessages, setChatMessages] = useState([
    //   {
    //     message: "Hello Chatbot",
    //     sender: "user",
    //     id: "id1",
    //   },
    //   {
    //     message: "Hello! How can i help you ?",
    //     sender: "robot",
    //     id: "id2",
    //   },
    //   {
    //     message: "can you get me todays date?",
    //     sender: "user",
    //     id: "id3",
    //   },
    //   {
    //     message: "Today is June 13",
    //     sender: "robot",
    //     id: "id4",
    //   },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  // previous array values
  // const chatMessages = array[0];
  // updater function
  // const setChatMessages = array[1];

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} isLoading={isLoading} />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
