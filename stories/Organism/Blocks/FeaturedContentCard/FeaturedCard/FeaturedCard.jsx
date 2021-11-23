import React, { useEffect } from 'react';
import './featuredcard.scss';
import { FeaturedContentCard } from '../../../../Components/UIcomponents/Cards/FeaturedCards/FeaturedContentCard';

export const FeaturedCard = ({ headertext, data }) => (
  <div className="featured-card-container">
    <FeaturedContentCard headertext={headertext} data={data} />
  </div>
);
