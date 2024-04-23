"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const VideoCard = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const videos = [
    {
      src: "https://victoryempire.co/assets/videos/video11.mp4?v=919e79fa",
      thumbnail:
        "https://victoryempire.co/assets/videos/video11.mp4.jpg?v=919e79fa",
      alt: "Video 1",
    },
    {
      src: "https://victoryempire.co/assets/videos/video12.mp4?v=919e79fa",
      thumbnail:
        "https://victoryempire.co/assets/videos/video12.mp4.jpg?v=919e79fa",
      alt: "Video 2",
    },
    {
      src: "https://victoryempire.co/assets/videos/video02.mp4?v=919e79fa",
      thumbnail:
        "https://victoryempire.co/assets/videos/video02.mp4.jpg?v=919e79fa",
      alt: "Video 3",
    },
    {
      src: "https://victoryempire.co/assets/videos/video06.mp4?v=919e79fa",
      thumbnail:
        "https://victoryempire.co/assets/videos/video06.mp4.jpg?v=919e79fa",
      alt: "Video 4",
    },
  ];

  const handlePlayVideo = (videoSrc) => {
    setPlayingVideo(videoSrc);
  };

  return (
    <>
      <h1 className="text-xl md:text-3xl font-bold my-5 text-center text-white">
        Dive into our Video Reviews and Discover Your Next Favorite!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative rounded-md overflow-hidden border-4 border-gray-00  w-64 h-96"
          >
            {playingVideo !== video.src && (
              <Image
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
