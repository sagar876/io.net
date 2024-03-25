import { CHAT_URL } from "../config.js";
import { transformMessages } from "../utils/transformMessage.js";

export const fetchMessages = async (chatMessages) => {
  console.log("process", process.env.REACT_APP_Open_AI_Key);
  const payload = transformMessages(chatMessages);
  const response = await fetch(`${CHAT_URL}/completions`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_Open_AI_Key,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return response.json();
};
