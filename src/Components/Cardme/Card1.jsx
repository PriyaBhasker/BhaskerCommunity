import React from "react";
import "./Card1.css";
import Image from "../image/image.png";
import { ImLinkedin } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
const Card = () => {
  return (
    <div>
      <div className="card">
        <div className="Emoji">
          <img className="inline" src={Image} alt="" />
        </div>
        <div>
          <h3>Priya Bhasker</h3>
          <span>Frontend Developer</span>

          <div className="icon">
            <ImLinkedin />
            <ImTwitter />
            <ImYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
