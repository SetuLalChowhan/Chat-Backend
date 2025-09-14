import { StreamChat } from "stream-chat";

import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.log("Missing Stream API Key or Secret");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.log("hi")
    console.log("Error in upsertUser", error);
  }
};

// export const generateStreamToken = (userId = {});
