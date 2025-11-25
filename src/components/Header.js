import React from "react";
import Lottie from "lottie-react";
import kittyJson from "../assets/cat.json";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="main-header">
      <div
        className="header-left"
        onClick={() => (window.location.href = "/")}
        style={{ cursor: "pointer" }}
      >
        <Lottie 
          animationData={kittyJson} 
          loop={true}
          className="cat-lottie"
          style={{ width: 85, height: 88 }}
        />
        <span className="greeting" style={{color:'black'}}>HELLO MY MRS SHAIKH 💋🎀💕</span>
      </div>

      <div className="header-right">
        <nav>
          <NavLink to="/edits">My Edits</NavLink>
          <NavLink to="/lovemessages">Love Memories</NavLink>
          <NavLink to="/iliked">I Liked</NavLink>
        </nav>
      </div>
    </header>
  );
}
