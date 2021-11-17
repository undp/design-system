import React, { useEffect } from "react";
import "./featuredcard.scss";
import { FeaturedContentCard } from "../../../../Molecules/Blocks/FeaturedContentCard/FeaturedContentCard";

export const FeaturedCard = ({ headertext, data }) => {
  return (
    <div className="featured-card-container">
      <FeaturedContentCard headertext={headertext} data={data} />
    </div>
  );
};
