import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1>Happy Birthday, [Her Name]! 🎉</h1>
      <p>You’re the best part of my life. Click below to see a surprise! ❤️</p>
      <button onClick={() => navigate("/gallery")}>See Your Surprise</button>
    </div>
  );
};

export default LandingPage;
