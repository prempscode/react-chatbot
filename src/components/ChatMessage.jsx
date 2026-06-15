import RobotProfilepic from "../assets/robot.png";
import UserProfilepic from "../assets/user.png";
import "./ChatMessage.css";
export function ChatMessage({ message, sender }) {
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={RobotProfilepic} className="class-message-profile" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src={UserProfilepic} className="class-message-profile" />
      )}
    </div>
  );
}
