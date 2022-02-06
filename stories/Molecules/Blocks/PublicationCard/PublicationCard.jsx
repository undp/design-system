import React from 'react';
import './publication-card.scss';
import '../../../assets/scss/_grid.scss';
import '../../../Atom/Icons/icons.scss';
import { Publicationthumb } from '../../../Atom/Cards/PublicationThumbnail/PublicationThumbnail';
import { Cardthumb } from '../../../Atom/Cards/CardThumbnail/CardThumbnail';

export const PublicationCard = ({
  image, image2, download, readmore, ...args
}) => (
  <div className="publication-card">
    {image && <Publicationthumb />}
    {image2 && <Cardthumb />}
    <div className="description">
      {args.variant === 'Download'
        && (
        <div className="download">
          {download}
          <span className="download-icon"><i/></span>
        </div>
        ) }
      {args.variant === 'Readmore'
        && (
        <div className="readmore">
          {readmore}
          <span className="external-link"><i/></span>
        </div>
        )}
      {args.variant === 'Both'
        && (
        <div className="grid-x">
          <div className="cell small-6">
            <div className="download">
              {download}
              <span className="download-icon"><i/></span>
            </div>
          </div>
          <div className="cell small-6">
            <div className="readmore">
              {readmore}
              <span className="external-link"><i/></span>
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
