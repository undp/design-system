import React from 'react';
import './download-card.scss';
import '../../../assets/scss/_grid.scss';
import { Publicationthumb } from '../../../Atom/Cards/Publication-thumbnail/PublicationThumbnail';
import { Cardthumb } from '../../../Atom/Cards/Card-thumbnail/CardThumbnail';

export const DownloadCard = ({
  image, image2, title, format, download,
}) => (
  <div className="download-card">
    <a href="#">
      {image && <Publicationthumb />}
      {image2 && <Cardthumb image={image2} />}
      <div className="description">
        <p className="title">{title}</p>
        <p className="format">{format}</p>
        <span href="#" className="download">
          {download}
          <span className="download-icon" ><i/></span>
        </span>
      </div>
    </a>
  </div>
);
