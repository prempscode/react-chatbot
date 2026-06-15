# 🤖 React Chatbot

A simple, interactive chatbot built with **React** as part of the *Learn with Development* course. This project was developed independently to practice core React concepts including component architecture, state management, and asynchronous interactions.

---

## ✨ Features

The chatbot can respond to three commands:

| Command | What it does |
|--------|--------------|
| 💬 **Get today's day** | Tells you the current day of the week |
| 🪙 **Flip a coin** | Randomly returns Heads or Tails |
| 🎲 **Roll a dice** | Rolls a six-sided die and returns the result |

---

## 🛠️ Tech Stack

- **React 19** — UI library
- **Vite** — Build tool and dev server
- **supersimpledev** — Chatbot response engine
- **CSS Modules** — Component-scoped styling

---

## 🧠 React Concepts Used

### `useState`
Used to manage dynamic data that changes over time — like the list of chat messages, the current input text, and the loading state. Every time `useState` updates, React re-renders the component to reflect the new value.

```jsx
const [chatMessages, setChatMessages] = useState([]);
const [inputText, setInputText] = useState("");
const [isLoading, setIsLoading] = useState(false);
```

### `useEffect`
Used to run side effects — things that happen *after* the component renders, like scrolling to the latest message, fetching data, or setting up event listeners. It keeps side-effect logic separate from render logic.

```jsx
useEffect(() => {
  // e.g., scroll to bottom when messages update
}, [chatMessages]);
```

### `useRef`
Used to directly reference a DOM element without triggering a re-render. Great for things like auto-scrolling a chat window or focusing an input field.

```jsx
const messagesEndRef = useRef(null);
messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/chatbot-project.git

# Navigate into the project
cd chatbot-project

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
chatbot/
├── public/
├── src/
│   ├── assets/
│   │   ├── robot.png
│   │   └── user.png
│   ├── components/
│   │   ├── ChatInput.jsx      # Text input + send button
│   │   ├── ChatInput.css
│   │   ├── ChatMessage.jsx    # Individual message bubble
│   │   ├── ChatMessage.css
│   │   ├── ChatMessages.jsx   # Messages list container
│   │   └── ChatMessages.css
│   ├── App.jsx                # Root component
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## 📚 About This Project

This chatbot was built as a hands-on project during the **Learn with Development** React course. The goal was to apply fundamental React concepts by building something interactive from scratch — handling user input, managing state across components, and working with async responses.

---

## 📄 License

This project is open source and available under the SuperSimpleDev YT [www.youtube.com/@SuperSimpleDev] .
