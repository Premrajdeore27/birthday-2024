import React from "react";
// import Welcome from "./components/Welcome";
// import PhotoGallery from "./components/PhotoGallery";
// import Message from "./components/Message";
import "./App.css";
import AppRouter from "./utils/AppRouter";

const App: React.FC = () => {
  return (
    <>

    <React.Fragment>
         <AppRouter/>
    </React.Fragment>
    </>
  );
};

export default App;
