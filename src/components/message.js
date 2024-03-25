import React from 'react'; 
import { Messages, Message } from '../styles/chat';

export const GptMessages = ({messages}) => {
  return (
    <Messages>
        {messages.map((message, index) => (
          <Message key={index} sender={message?.sender}>
            {message?.message}
          </Message>
        ))}
    </Messages>
  );
};