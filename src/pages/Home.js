import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pinkBalloon from '../assets/balloon-pink.png';
import lavenderBalloon from '../assets/balloon-lavender.png';

const Home = () => {
  const navigate = useNavigate();

  const balloons = [
    { src: pinkBalloon, left: '10%', duration: 6, delay: 0 },
    { src: lavenderBalloon, left: '25%', duration: 7, delay: 1 },
    { src: pinkBalloon, left: '40%', duration: 6.5, delay: 0.5 },
    { src: lavenderBalloon, left: '55%', duration: 8, delay: 1.2 },
    { src: pinkBalloon, left: '70%', duration: 7.5, delay: 0.8 },
    { src: lavenderBalloon, left: '85%', duration: 6, delay: 1.5 },
  ];

  const [welcomeText, setWelcomeText] = useState(true);

  // Hide welcome text after 3 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setWelcomeText(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleCelebrateClick = () => {
    // Navigate to the new page, e.g., "/catworld"
    navigate('/edits');
  };

  return (
    <section className="birthday-hero">
      <div className="hero-text">
        {welcomeText && (
          <div className="welcome-text">
            WELCOME MRS SHAIKH 🎀😊😉🤗😭
          </div>
        )}

        {!welcomeText && (
          <div className="next-section">
            <h1>Happy Birthday, Love! 🎉💖</h1>
            <p>Wishing you a day full of joy and cuteness!</p>

            {/* Let’s Celebrate Button */}
            <button className="celebrate-btn" onClick={handleCelebrateClick}>
              Let’s Celebrate! 🎈
            </button>
          </div>
        )}
      </div>

      {/* Balloons */}
      <div className="balloons">
        {balloons.map((balloon, i) => (
          <img
            key={i}
            src={balloon.src}
            className="balloon"
            style={{
              left: balloon.left,
              animationDuration: `${balloon.duration}s`,
              animationDelay: `${balloon.delay}s`,
            }}
            alt="balloon"
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
