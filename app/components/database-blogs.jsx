import { Client, Databases } from "appwrite";
import { useEffect, useState } from "react";

export const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const client = new Client();
    client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("6700d08b00249a10df53");

    const database = new Databases(client);
    const promise = database.listDocuments(
      "6700d0bf00172635c204",
      "6700d0c8001050f11559"
    );

    promise.then(
      (response) => {
        setBlogs(response.documents);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return blogs;
};
