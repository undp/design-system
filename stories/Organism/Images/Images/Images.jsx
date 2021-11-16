import React, { useEffect } from "react";
import "./images.scss";
import viewport from '../../../assets/js/viewport';
import { Imagecaption } from "../../../Molecules/Imagecaption/Imagecaption";

export const size_options = {
  Wide: "medium-12",
  Medium: "medium-7",
  Portrait: "medium-4",
};

export const size_options2 = {
  Wide: "medium-7",
  Medium: "medium-7",
  Portrait: "medium-3",
};

export const size_options3 = {
  Wide: "",
  Medium: "",
  Portrait: "image-section--portrait",
};

export const Images = ({ imagelg, imagemd, imagesm, alt, label, paragraph, ...args }) => {
  useEffect(() => {
    viewport('.image-section__cart');
    viewport('.image-section__description');
  }, [])
  return (
    <div className={["grid-x", "image-section", `${size_options3[`${args.size}`]}`].join(" ")}>
      <div className={["cell", "image-section__cart", "scale-up", `${size_options[`${args.size}`]}`].join(" ")}>
        {args.size==='Wide' && <img src={imagelg} alt={alt} />}
        {args.size==='Medium' && <img src={imagemd} alt={alt} />}
        {args.size==='Portrait' && <img src={imagesm} alt={alt} />}
      </div>

      {args.caption === "False" && args.credit === "False" ? (
          <></>
        ) : (
          <div className={[ "cell", "image-section__description", "opacity-only", `${size_options2[`${args.size}`]}`].join(" ")}>
            <Imagecaption label={label} paragraph={paragraph} caption={args.caption} credit={args.credit}/>
          </div>
        )}
      
    </div>
  );
};

Images.defaultProps = {
  size: "Wide",
  caption: "True",
  credit: "True",
};
