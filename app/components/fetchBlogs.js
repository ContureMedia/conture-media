// fetchBlogs.js
import { Client, Databases } from "appwrite";

export const fetchBlogs = async () => {
  const client = new Client();
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6700d08b00249a10df53");

  const database = new Databases(client);
  const response = await database.listDocuments(
    "6700d0bf00172635c204",
    "6700d0c8001050f11559"
  );

  return response.documents;
};
