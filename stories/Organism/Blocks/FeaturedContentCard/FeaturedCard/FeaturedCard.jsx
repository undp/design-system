import React from 'react';
import './featured-card.scss';
import { FeaturedContentCard } from '../../../../Components/UIcomponents/Cards/FeaturedCard/FeaturedContentCard';

export const FeaturedCard = ({ headertext, data }) => (
  <div className="featured-card-container">
    <FeaturedContentCard headertext={headertext} data={data} />
  </div>
);
