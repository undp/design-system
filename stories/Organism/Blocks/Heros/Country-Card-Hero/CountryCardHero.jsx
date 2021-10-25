import React, { useEffect } from "react";
import "./countrycardhero.scss";
import viewport from "../../../../assets/js/viewport";
import { Heading } from ".././../../../Atom/Base-typography/Heading/Heading";
import { CountryCard } from "../../../../Molecules/Blocks/CountryCard/CountryCard";

export const CountryCardHero = ({ data, title, subtitle }) => {
  useEffect(() => {
    viewport(".countrycard__title");
    viewport(".countrycard__subtitle");
  }, []);
  return (
    <div className="countrycard__wrapper">
      <div className="grid-x countrycard__header">
        <div className="cell large-7">
          <Heading type="1" className="countrycard__title left-right" label={title}/>
        </div>
        <div className="cell large-4 countrycard-border">
          <Heading type="6" className="countrycard__subtitle left-right" label={subtitle}/>
        </div>
      </div>
      <CountryCard data={data} />
    </div>
  );
};
