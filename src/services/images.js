import axios from "axios";
import { IMAGE_GENERATION_URL } from "../config.js";

export const createImages = async (prompt) => {
  const payload = {
    prompt: prompt,
    n: 2,
    size: "1024x1024",
  };

  const response = await fetch(`${IMAGE_GENERATION_URL}/generations`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_Open_AI_Key,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return response.json();
};
