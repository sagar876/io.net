import { ASSISTANT_ROLE, CHAT_MODEL, USER_ROLE } from "../constants/roles";

export const transformMessages = (chatMessages) => {
  const apiMessages = chatMessages.map((messageObject) => {
    const role = messageObject.sender === "ChatGPT" ? ASSISTANT_ROLE : USER_ROLE;
    return { role, content: messageObject.message };
  });
  return {
    model: CHAT_MODEL,
    messages: [...apiMessages],
  };
};
