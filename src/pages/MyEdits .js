import React, { useState } from "react";
import VideoCard from "../components/VideoCard";

const videos = [
  { id: 1, url: "/videos/e1.mp4" },
  { id: 2, url: "/videos/e2.mp4" },
  { id: 3, url: "/videos/e3.mp4" },
  { id: 4, url: "/videos/e4.mp4" },
  { id: 5, url: "/videos/e5.mp4" },
  { id: 6, url: "/videos/e6.mp4" },
  { id: 7, url: "/videos/e7.mp4" },
  { id: 8, url: "/videos/e8.mp4" },
  { id: 9, url: "/videos/e9.mp4" },
  { id: 10, url: "/videos/e10.mp4" },
  { id: 11, url: "/videos/e11.mp4" },
  { id: 12, url: "/videos/e12.mp4" },
  { id: 13, url: "/videos/e13.mp4" },
  { id: 14, url: "/videos/e14.mp4" },
  { id: 15, url: "/videos/e15.mp4" },
  { id: 16, url: "/videos/e16.mp4" },
  { id: 17, url: "/videos/e17.mp4" },
  { id: 18, url: "/videos/e18.mp4" },
  { id: 19, url: "/videos/e19.mp4" },
  { id: 20, url: "/videos/e20.mp4" },
  { id: 21, url: "/videos/e21.mp4" },
];

export default function EditPage() {
  const [completedVideos, setCompletedVideos] = useState(() => {
    return JSON.parse(localStorage.getItem("completedVideos")) || [];
  });

  const [activeVideo, setActiveVideo] = useState(null);

  // -------------------------
  // FIXED PERFECT LOGIC HERE
  // -------------------------
  const requestPlay = (videoId) => {
    if (videoId === 1) {
      setActiveVideo(videoId);
      return true;
    }

    const previous = videoId - 1;

    if (!completedVideos.includes(previous)) {
      alert(
        `Jaan ❤️ Please comment on Video ${previous} before going to Video ${videoId} 😘`
      );
      return false;
    }

    setActiveVideo(videoId);
    return true;
  };

  const markCompleted = (videoId, newComment) => {
    if (!completedVideos.includes(videoId)) {
      const updated = [...completedVideos, videoId];
      setCompletedVideos(updated);
      localStorage.setItem("completedVideos", JSON.stringify(updated));
    }

    const saved = JSON.parse(localStorage.getItem("savedComments")) || {};

    if (!saved[videoId]) {
      saved[videoId] = [];
    }

    saved[videoId].push(newComment);

    localStorage.setItem("savedComments", JSON.stringify(saved));
  };

  return (
    <>
    <p style={{display:'flex', justifyContent:'center'}}><b>PLEASE DO COMMENTS AND SHARE YOU EMOTION BY SEEING EVERY REELS JAAN 🤌🏻</b></p>
    <div className="edit-page">
      {videos.map((v) => (
        <VideoCard
          key={v.id}
          video={v}
          requestPlay={requestPlay}
          markCompleted={markCompleted}
        />
      ))}
    </div>
    </>
  );
}
