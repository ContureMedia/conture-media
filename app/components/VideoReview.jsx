"use client";
import React, { useState, useRef } from "react";

// Sample video data
const videoData = [
  { id: 1, src: "/reviews/vid1.mp4", title: "Video 1" },
  { id: 2, src: "/reviews/vid2.mp4", title: "Video 2" },
  { id: 3, src: "/reviews/vid3.mp4", title: "Video 3" },
];

const VideoCard = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef([]); // To store references to each video element
  const [activeVideoId, setActiveVideoId] = useState(null);

  // Function to move to the next video
  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoData.length);
  };

  // Function to move to the previous video
  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videoData.length - 1 : prevIndex - 1
    );
  };

  // Function to handle when a video starts playing
  const handlePlay = (id) => {
    if (activeVideoId !== id) {
      // Pause the currently active video
      if (activeVideoId !== null && videoRefs.current[activeVideoId]) {
        videoRefs.current[activeVideoId].pause();
      }
      // Set the new active video
      setActiveVideoId(id);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "300px",
          height: "600px",
          position: "relative",
          perspective: "1000px",
        }}
      >
        {videoData.map(({ id, src }, index) => {
          // Calculate the position of each video based on its index
          const isCurrent = index === currentVideoIndex;
          const isPrev =
            index ===
            (currentVideoIndex === 0
              ? videoData.length - 1
              : currentVideoIndex - 1);
          const isNext = index === (currentVideoIndex + 1) % videoData.length;

          // Set the style for current, previous, and next videos
          const style = isCurrent
            ? {
                transform: "translateZ(0) scale(1)",
                zIndex: 2,
                opacity: 1,
              }
            : isPrev
            ? {
                transform:
                  "translateZ(-300px) translateX(-200px) rotateY(15deg) scale(0.8)", // Adjusted translateX for new size
                zIndex: 1,
                opacity: 0.7,
              }
            : isNext
            ? {
                transform:
                  "translateZ(-300px) translateX(200px) rotateY(-15deg) scale(0.8)", // Adjusted translateX for new size
                zIndex: 1,
                opacity: 0.7,
              }
            : {
                opacity: 0,
                zIndex: 0,
              };

          return (
            <div
              key={id}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                transition: "transform 0.5s ease, opacity 0.5s ease",
                ...style,
              }}
            >
              <video
                ref={(el) => (videoRefs.current[id] = el)} // Store the reference to this video
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
                src={src}
                controls
                onPlay={() => handlePlay(id)} // Call handlePlay when the video starts playing
              />
            </div>
          );
        })}
      </div>

      {/* Adjusted the positions of the buttons to move them even closer to the video */}
      <button
        onClick={prevVideo}
        style={{
          position: "absolute",
          left: "20%", // Moved closer to the video
          fontSize: "30px",
          padding: "10px",
          backgroundColor: "transparent",
          color: "#007bff",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        {"<"}
      </button>

      <button
        onClick={nextVideo}
        style={{
          position: "absolute",
          right: "20%", // Moved closer to the video
          fontSize: "30px",
          padding: "10px",
          backgroundColor: "transparent",
          color: "#007bff",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default VideoCard;