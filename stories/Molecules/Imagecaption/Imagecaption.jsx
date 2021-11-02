import React from "react";
import "./imagecaption.scss";
import { Imagecredit } from "../../Atom/Images/Imagecredit/Imagecredit";

export const caption_options = {
  True: "",
  False: "image__caption--unstag",
};

export const credit_options = {
  True: "",
  False: "image__caption--stag",
};

export const Imagecaption = ({ name, label, paragraph, ...args }) => (
  <>
    {args.caption === "False" && args.credit === "False" ? (
      <></>
    ) : (
      <figcaption className={[ "image__caption", `${caption_options[`${args.caption}`]}`, `${credit_options[`${args.credit}`]}`].join(" ")}>
        {args.caption === "True" && (
          <div className="image__caption_para">{paragraph}</div>
        )}
        {args.credit === "True" && <Imagecredit label={label} name={name} />}
      </figcaption>
    )}
  </>
);

Imagecaption.defaultProps = {
  caption: "True",
  credit: "True",
};
