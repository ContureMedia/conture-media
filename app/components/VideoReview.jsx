"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const VideoCard = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const videos = [
    {
      src: "/reviews/vid1.mp4",
      thumbnail: "/reviews/img1.jpeg",
      alt: "Video 1",
      insta: "https://www.instagram.com/fyd_ritik/",
    },
    {
      src: "/reviews/vid3.mp4",
    thumbnail: "/reviews/img3.png",
      alt: "Video 3",
      
    },
    {
      src: "/reviews/vid2.mp4",
      thumbnail: "/reviews/img2.jpeg",
      alt: "Video 2",
      insta: "https://www.instagram.com/sanatanmusic_/",
    }
    
  ];

  const handlePlayVideo = (videoSrc) => {
    setPlayingVideo(videoSrc);
  };

  return (
    <>
      <h1 className="flex flex-col text-center justify-center items-center text-xl md:text-[26px] font-bold my-5 text-white capitalize gap-2">
        Dive into our video reviews to experience{" "}
        <p className="font-bold from-blue-600 via-green-500 to-indigo-400 bg-gradient-to-r bg-clip-text text-transparent">
          Trust, Authenticity, and Transparency
        </p>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative rounded-md overflow-hidden border-solid border-4 border-white  w-64 h-96"
          >
            {playingVideo !== video.src && (
              <img
                width={256}
                height={144}
                src={video.thumbnail}
                alt={video.alt}
                className="w-full h-full object-cover"
              />
            )}
            
            {playingVideo === video.src ? (
              <video
                src={video.src}
                autoPlay
                className="w-full h-full object-cover"
                controls
              />
            ) : (
              <button
                onClick={() => handlePlayVideo(video.src)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black rounded-full p-3"
              >
                <FaPlay className="h-6 w-6" />
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCard;
