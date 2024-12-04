import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "../components/Welcome";
import PhotoGallery from "../components/PhotoGallery";

const AppRouter: React.FC = () => {
  const [countdownValue, setCountdownValue] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isCounting, setIsCounting] = useState(false);
  console.log(location,"location");
  console.log(countdownValue,"countdownValue");
  const startCountdown = () => {
    setIsCounting(true);
    let counter = 1;
    const interval = setInterval(() => {
      setCountdownValue(counter);
      counter += 1;
      if (counter > 10) {
        clearInterval(interval);
        setIsCounting(false);
      }
    }, 1000); // 1-second interval for countdown
  };



  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Welcome startCountdown={startCountdown} countdownValue={countdownValue} />}
          />
          <Route path="/gallery" element={<PhotoGallery setCountdownValue={setCountdownValue} />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default AppRouter;
