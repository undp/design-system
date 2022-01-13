import React from "react";
import "./footerLists.scss";
import { Link } from "../../../Atom/Typography/Links/link";

export const variant_options = {
  default: "",
  inverted: "inverted",
};

const cls = (...classes) =>
  classes.filter(Boolean).length > 0 ? classes.filter(Boolean).join(" ") : null;

export const FooterLists = ({
  type, headerText, text, style, ariacontrol, arialabel, data, ...args
}) => {
  let screen_variant = variant_options[`${args.variant}`];
  return (
    <div className={cls("cell", "medium-2", "footer__items", `${screen_variant}`)}>
      <button type="button" className="footer__heading" tabIndex="0" aria-control={ariacontrol} aria-expanded="false" id={arialabel}>{headerText}</button>
      <div className="footer__panel" id={ariacontrol} aria-label={arialabel} aria-hidden="true" role="footerlist">
        {data.map((item, index) => (
          <Link key={index} label={item.text} />
        ))}
      </div>
    </div>
  );
};

FooterLists.defaultProps = {
  variant: "default",
};