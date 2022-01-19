import React from 'react';
import './DownloadCard.scss';
import '../../../assets/scss/_grid.scss';
import { Publicationthumb } from '../../../Atom/Cards/Publication-thumbnail/PublicationThumbnail';
import { Cardthumb } from '../../../Atom/Cards/Card-thumbnail/CardThumbnail';

export const DownloadCard = ({
  image, image2, title, format, download,
}) => (
  <div className="download-card">
    {image && <Publicationthumb Hovercolors="yellow" />}
    {image2 && <Cardthumb image={image2} />}
    <div className="download-card__description">
      <p className="download-card__title">{title}</p>
      <p className="download-card__format">{format}</p>
      <a href="#" className="download-card__download">
        {download}
        <span className="download-icon" ><i/></span>
      </a>
    </div>
  </div>
);
