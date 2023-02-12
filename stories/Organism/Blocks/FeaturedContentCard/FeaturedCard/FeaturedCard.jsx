import React from 'react';
import './featured-card.scss';
import { FeaturedContentCard } from '../../../../Components/UIcomponents/Cards/FeaturedCard/FeaturedContentCard';

export function FeaturedCard({ headertext, data, ...args }) {
  return (
    <div className="featured-card-container">
      <FeaturedContentCard headertext={headertext} data={data} {...args} />
    </div>
  );
}
