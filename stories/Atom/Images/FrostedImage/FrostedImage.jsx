import React from "react";
import "./frostedimage.scss";
import BackgroundImg from "../../../assets/images/bees.svg";

export const FrostedImage = ({}) => {
  return (
    <div class="frosted-overlay">
      <img src={BackgroundImg} alt={BackgroundImg} />
    </div>
  );
};
