import React, { useState, useRef } from "react";

const allEmojis = [
  "😍","🥺","❤️","🔥","😘","💖","🤍","✨","😊","😎",
  "😂","🥰","😇","🤩","😭"
];

export default function VideoCard({ video, requestPlay, markCompleted }) {

  const videoRef = useRef(null);
  const [comment, setComment] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);

  // ---------------------------
  // LOAD COMMENTS + FIX OLD DATA
  // ---------------------------
  let savedComments = JSON.parse(localStorage.getItem("savedComments")) || {};

  // Convert old string → array
  Object.keys(savedComments).forEach((key) => {
    if (typeof savedComments[key] === "string") {
      savedComments[key] = [savedComments[key]];
    }
  });

  const containsEmoji = (text) => /\p{Emoji}/u.test(text);

  const handlePlayAttempt = () => {
    const allowed = requestPlay(video.id);

    if (!allowed) {
      videoRef.current.pause();
      return;
    }

    // pause all other videos
    document.querySelectorAll("video").forEach((v) => {
      if (v !== videoRef.current) v.pause();
    });

    videoRef.current.play();
  };

  const handleSubmit = () => {
    if (!comment.trim() || !containsEmoji(comment)) {
      alert("Jaan ❤️ Comment + Emoji required!");
      return;
    }

    markCompleted(video.id, comment);
    alert("Thank you jaan ❤️ Comment saved!");
    setComment("");
  };

  return (
    <div className="video-card">

      <video
        ref={videoRef}
        src={video.url}
        controls
        onClick={(e) => {
          e.preventDefault();
          handlePlayAttempt();
        }}
      />

      <div className="comment-section">

        <span
          className="emoji-icon"
          onClick={() => setShowEmojis(!showEmojis)}
        >
          😊
        </span>

        {showEmojis && (
          <div className="emoji-panel">
            {allEmojis.map((emoji) => (
              <span key={emoji} onClick={() => setComment((p) => p + emoji)}>
                {emoji}
              </span>
            ))}
          </div>
        )}

        <textarea
          placeholder="Write a sweet comment jaan..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button onClick={handleSubmit}>Submit</button>

        {/* SHOW ALL COMMENTS */}
        <div className="saved-comments">
          <strong>All Comments:</strong>
          {savedComments[video.id] && savedComments[video.id].length > 0 ? (
            savedComments[video.id].map((c, i) => (
              <p key={i} style={{ margin: "5px 0" }}>• {c}</p>
            ))
          ) : (
            <p>No comments yet ❤️</p>
          )}
        </div>

      </div>

    </div>
  );
}
