import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Header from "./components/Header";
import Home from "./pages/Home";
import LoveMemories from "./pages/LoveMemories";
import MyEdits from "./pages/MyEdits ";
import ILiked from './pages/ILiked'

function App() {
  const [unlocked, setUnlocked] = useState(false);   // password correct
  const [showWelcome, setShowWelcome] = useState(false); // show welcome text
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleClick = (value) => {
    if (pin.length < 6) setPin(pin + value);
  };

  const handleClear = () => {
    setPin('');
    setError('');
  };

  const handleSubmit = () => {
    if (pin === '149') {
      setUnlocked(true);
      setShowWelcome(true);

      // hide welcome after 3 sec
      setTimeout(() => {
        setShowWelcome(false);
      }, 3000);
    } else {
      setError('Wrong PIN ❌');
      setPin('');
    }
  };

  const pinButtons = [1,2,3,4,5,6,7,8,9,'*',0,'#'];

  // Show full password screen if not unlocked
  if (!unlocked) {
    return (
      <div className="lockscreen">
        <h2>Enter Passcode 💕</h2>
        <div className="pin-display">{pin || '•••'}</div>
        <div className="pin-buttons">
          {pinButtons.map((btn, i) => (
            <button key={i} onClick={() => handleClick(btn.toString())}>
              {btn}
            </button>
          ))}
          <button className="clear-btn" onClick={handleClear}>Clear</button>
          <button className="submit-btn" onClick={handleSubmit}>Enter</button>
        </div>
        {error && <p className="error">{error}</p>}
      </div>
    );
  }

  // Show welcome text if unlocked and within 5 sec
  if (showWelcome) {
    return (
      <div className="welcome-screen">
        <h1>WELCOME MRS SHAIKH 🎀😊😉🤗😭</h1>
      </div>
    );
  }

  // After welcome disappears, show the website
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/edits" element={<MyEdits />} />
        <Route path="/" element={<Home />} />
        <Route path="/lovemessages" element={<LoveMemories />} />
        <Route path="/iliked" element={<ILiked />} />
      </Routes>
    </Router>
  );
}

export default App;
