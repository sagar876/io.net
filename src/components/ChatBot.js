import { useState } from "react";
import "../App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { fetchMessages } from "../services/chat";
import {
  MainContainer,
  MessageIndicator,
  MessageInput,
  MessageInputContainer,
} from "../styles/chat";
import { GptMessages } from "./message";
import { createImages } from "../services/images";
import { GptImages } from "./images";

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sender: "ChatGPT",
    },
  ]);
  const [images, setImages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

  const sendMessage = async () => {
    if (input.length) {
      const newMessage = {
        message: input,
        direction: "outgoing",
        sender: "user",
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput("");
      setIsTyping(true);

      try {
        const response = await fetchMessages([...messages, newMessage]);
        const content = response.choices[0]?.message?.content;
        if (content) {
          const chatGPTResponse = {
            message: content,
            sender: "ChatGPT",
          };
          setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
        }
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsTyping(false);
      }
    }
  };

  const generateImage = async () => {
    setIsGeneratingImage(true);
    try {
      const response = await createImages(input);
      setImages((prevImages) => [...prevImages, ...response?.data]);
    } catch (error) {
      throw new Error(error);
    } finally {
      setInput("");
      setIsGeneratingImage(false);
    }
  };

  return (
    <MainContainer>
      <GptMessages messages={messages} />
      {isGeneratingImage && (
        <MessageIndicator>Dall-e is generating your image....</MessageIndicator>
      )}
      <GptImages images={images} />
      {isTyping && <MessageIndicator>Chatbot is typing....</MessageIndicator>}
      <MessageInputContainer className="message-input">
        <MessageInput
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
        <button onClick={generateImage}>Generate Image</button>
      </MessageInputContainer>
    </MainContainer>
  );
};

export default ChatBot;
