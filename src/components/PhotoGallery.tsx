import React, { useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PhotoGallery.css";
import { useLocation } from "react-router-dom";
import Message from "./Message";
import kajalpuja from "../assets/images/kajalpuja.jpg";
import kajalbirthday from "../assets/images/kajalbirthday.jpg";
import kajalsaadi from "../assets/images/kajalsaadi.jpg";
import childhood from "../assets/images/kajalchildhood.jpg";
import recentPic from "../assets/images/resentclick.jpg";
import birthdayVideo from "../assets/video/Gen-3 Alpha Turbo 1029899111, kajalbirthdayjpg, M 5.mp4"


interface PhotoGalleryInterface {
  setCountdownValue: React.Dispatch<React.SetStateAction<number>>;
}



const photos = [ {type:"image",image:`${kajalpuja}`},{type:"image", image:`${kajalbirthday}`},{type:"image",image:`${kajalsaadi}`},{type:"image",image:`${childhood}`},{type:"image",image:`${recentPic}`},{type:"video",image:`${birthdayVideo}`}]

const PhotoGallery: React.FC<PhotoGalleryInterface> = ({ setCountdownValue }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };


  
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/gallery") setCountdownValue(0);
  }, [location.pathname, setCountdownValue]);

  return (
    <>
    <motion.div
      className="gallery-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.h2
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="gallery-title"
      >
        Special Moments 💕
      </motion.h2>
      <Slider {...settings} >
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            
          >{
            photo.type === "image" ?
            <img src={photo.image} alt={`Memory ${index + 1}`} className="photo"  />:
            <video
            src={photo.image}
            className="photo"
            controls
            autoPlay
            muted
            loop
          />
          }
            
          </motion.div>
        ))}
      </Slider>
    </motion.div>
    <motion.div>
        <Message/>
    </motion.div>
    </>
  );
};

export default PhotoGallery;
