import React from 'react';
import './publicationcard.scss';
import '../../../assets/scss/_grid.scss';
import { Publicationthumb } from '../../../Atom/Cards/Publication-thumbnail/PublicationThumbnail';
import { Cardthumb } from '../../../Atom/Cards/Card-thumbnail/CardThumbnail';
import { Icondownload } from '../../../Atom/Icons/download';
import { Iconexternallink } from '../../../Atom/Icons/external_link';

export const PublicationCard = ({
  image, image2, download, readmore, ...args
}) => (
  <div className="publication-card">
    {image && <Publicationthumb Hovercolors="yellow"/>}
    {image2 && <Cardthumb />}
    <div className="publication-card__description">
      {args.variant === 'Download'
        && (
        <div className="publication-card__download">
          {download}
          <Icondownload />
        </div>
        ) }
      {args.variant === 'Readmore'
        && (
        <div className="publication-card__readmore">
          {readmore}
          <Iconexternallink />
        </div>
        )}
      {args.variant === 'Both'
        && (
        <div class="grid-x">
          <div class="cell small-6">
            <div className="publication-card__download">
              {download}
              <Icondownload />
            </div>
          </div>
          <div class="cell small-6">
            <div className="publication-card__readmore">
              {readmore}
              <Iconexternallink />
            </div>
          </div>
        </div>
        )}
    </div>
  </div>
);

PublicationCard.defaultProps = {
  variant: 'Both',
};
