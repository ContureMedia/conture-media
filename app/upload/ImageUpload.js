"use client";
import React, { useState, useEffect } from "react";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import Image from "next/image";
import { app } from "@/utils/Firebase";

const ImageUpload = ({ setImage }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [media, setMedia] = useState(null);

  const storage = getStorage(app);

  // upload image
  useEffect(() => {
    const upload = () => {
      setUploading(true);
      const name = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
          setUploading(false);
          alert("Error uploading image");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
            setUploading(false);
            alert("Image uploaded successfully");
            console.log("Firebase URL: ", downloadURL);
            setImage(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file, storage, setImage]);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {file && (
        <Image
          width={100}
          height={100}
          src={URL.createObjectURL(file)}
          alt="Selected"
        />
      )}
    </div>
  );
};

export default ImageUpload;
