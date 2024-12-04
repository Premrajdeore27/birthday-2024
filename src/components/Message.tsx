import React from "react";
import { motion } from "framer-motion";
import "./Message.css";

const Message: React.FC = () => {
  return (
    <div className="message-container">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="message-title"
      >
        My Birthday Wish for You! 💌
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="message-text"
      >


Happy Birthday, Kajal! 🎉🎂 Wishing you a fantastic day filled with joy, laughter, and wonderful moments. May this year bring you success, happiness, and everything you hope for. Have an amazing celebration! 🌟
      </motion.p>
    </div>
  );
};

export default Message;
