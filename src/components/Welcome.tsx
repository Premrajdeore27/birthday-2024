import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import "./Welcome.css";

interface WelcomeProps {
  startCountdown: () => void;
  countdownValue: number;
}

const Welcome: React.FC<WelcomeProps> = ({ startCountdown, countdownValue }) => {
  const navigate = useNavigate();
  const [showCountdown, setShowCountdown] = useState<boolean>(false);
  const [showSurprise, setShowSurprise] = useState<boolean>(false);

  const handleStartCountdown = () => {
    startCountdown();
    setShowCountdown(true);  // Show countdown when button is clicked
  };

  useEffect(() => {
    if (countdownValue === 10) {
      setShowSurprise(true);  // Show surprise when countdown reaches 10
      setTimeout(() => {
        navigate("/gallery");  // Navigate to gallery after surprise animation
      }, 2000); // 2-second delay for the surprise animation to finish
    }
  }, [countdownValue, navigate]);

  return (
    <div className="welcome-container">
      {!showCountdown ? (
        <>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="welcome-text"
          >
            Happy Birthday, My Dear ! 🎉🎂
          </motion.h1>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="explore-button"
            onClick={handleStartCountdown}
          >
            See Memories
          </motion.button>
        </>
      ) : (
        <motion.div
          className="countdown-container"
          key="countdown"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="countdown-number"
            key={countdownValue}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {countdownValue}
          </motion.div>
          {showSurprise && (
            <motion.div
              className="surprise"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span role="img" aria-label="fireworks">🎆🎉</span> {/* Cracker animation */}
              <span role="img" aria-label="confetti">🎊🎊</span> {/* Sprinkles */}
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Welcome;
