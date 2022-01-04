import React from 'react';
import './publicationcard.scss';
import '../../../assets/scss/_grid.scss';
import '../../../Atom/Icons/icons.scss';
import { Publicationthumb } from '../../../Atom/Cards/Publication-thumbnail/PublicationThumbnail';
import { Cardthumb } from '../../../Atom/Cards/Card-thumbnail/CardThumbnail';

export const PublicationCard = ({
  image, image2, download, readmore, ...args
}) => (
  <div className="publication-card">
    {image && <Publicationthumb Hovercolors="yellow" />}
    {image2 && <Cardthumb />}
    <div className="publication-card__description">
      {args.variant === 'Download'
        && (
        <div className="publication-card__download">
          {download}
          <span className="download-icon" />
        </div>
        ) }
      {args.variant === 'Readmore'
        && (
        <div className="publication-card__readmore">
          {readmore}
          <span className="external-link" />
        </div>
        )}
      {args.variant === 'Both'
        && (
        <div className="grid-x">
          <div className="cell small-6">
            <div className="publication-card__download">
              {download}
              <span className="download-icon" />
            </div>
          </div>
          <div className="cell small-6">
            <div className="publication-card__readmore">
              {readmore}
              <span className="external-link" />
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
