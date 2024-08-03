import React from "react";
import "./Card.css";
import { ImLinkedin } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import Image from "../../assets/imgs/image.png";

const Card = () => {
  return (
    <div className="card">
      <img src={Image} alt="" />

      <div className="Card-detail">
        <h2>Priya Bhasker</h2>
        <span>Frontend Developer</span>
        <div>
          <div>
            <ImLinkedin />
          </div>
          <div>
            <ImTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

// import React from "react";
// import "./Card.css";
// import { FaLinkedin } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";
// import Image from "../image/image.png";

//   const Card = () =>{
//     return (
//         <div className="card">
//             <img src={Image} alt="" />
//             <div className="Card-detail">
//                <h2>Priya Bhasker</h2>
//                <p>Frontend Davloper</p>
//               <div>
//                 <div className="card-icon">
//                   <FaLinkedin size={20} />
//                 </div>
//                 <div className="card-icon">
//                  <FaSquareInstagram size={20} />
//                 </div>
//               </div>
//            </div>
//         </div>
//     )
// }

// export default Card;
