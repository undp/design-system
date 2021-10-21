import React from 'react';
import './DownloadCard.scss';
import '../../../assets/scss/_grid.scss';
import { Publicationthumb } from '../../../Atom/Cards/Publication-thumbnail/PublicationThumbnail';
import { Cardthumb } from '../../../Atom/Cards/Card-thumbnail/CardThumbnail';

export const DownloadCard = ({ image, image2, title, format, download, ...args }) => {
  return (
    <div class="download-card">
      {image && <Publicationthumb />}
      {image2 && <Cardthumb />}
      <div class="download-card__description">
        <div className="download-card__title">{title}</div>
        <div className="download-card__format">{format}</div>
        <div className="download-card__download">{download}
          <div className="download-icon"></div>
        </div>
      </div>
    </div>
  );
};
