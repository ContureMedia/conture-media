"use client";
import React, { useState } from "react";

// Sample video data
const videoData = [
  { id: 1, src: "/reviews/vid1.mp4", title: "Video 1" },
  { id: 2, src: "/reviews/vid2.mp4", title: "Video 2" },
  { id: 3, src: "/reviews/vid3.mp4", title: "Video 3" },
];

const VideoCard = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

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
        {/* Increased width and height */}
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
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
                src={src}
                controls
              />
            </div>
          );
        })}
      </div>

      {/* Replace 'Prev' and 'Next' with '<' and '>' */}
      <button
        onClick={prevVideo}
        style={{
          position: "absolute",
          left: "20px",
          fontSize: "30px",
          padding: "10px",
          backgroundColor: "transparent", // Optional: make button transparent for a cleaner look
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
          right: "20px",
          fontSize: "30px",
          padding: "10px",
          backgroundColor: "transparent", // Optional: make button transparent for a cleaner look
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