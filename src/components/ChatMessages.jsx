import {useRef , useEffect} from 'react';
import {ChatMessage} from './ChatMessage';
import './ChatMessages.css'
export function ChatMessages({ chatMessages, isLoading }) {
  const chatMessageRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessageRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-message-container" ref={chatMessageRef}>
      {chatMessages.length === 0 && (
        <p
          style={{
            textAlign: "center",
            color: "gray",
            marginTop: "40px",
          }}
        >
          Welcome to the chatbot project! Send a message using the textbox
          below.
        </p>
      )}
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            key={chatMessage.id}
            message={chatMessage.message}
            sender={chatMessage.sender}
          />
        );
      })}

      {isLoading && (
        <ChatMessage
          key="Loading..."
          message={
            <img
              src="https://supersimple.dev/images/loading-spinner.gif"
              style={{ height: "30px", display: "block" }}
            />
          }
          sender="robot"
        />
      )}
    </div>
  );
}
