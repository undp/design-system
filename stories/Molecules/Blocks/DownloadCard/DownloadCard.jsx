import React from 'react';
import './DownloadCard.scss';
import '../../../assets/scss/_grid.scss';
import { Publicationthumb } from '../../../Atom/Cards/Publication-thumbnail/PublicationThumbnail';
import { Cardthumb } from '../../../Atom/Cards/Card-thumbnail/CardThumbnail';
import { Icondownload } from '../../../Atom/Global/Icons/download';

export const DownloadCard = ({
  image, image2, title, format, download, ...args
}) => (
  <div className="download-card">
    {image && <Publicationthumb />}
    {image2 && <Cardthumb />}
    <div className="download-card__description">
      <div className="download-card__title">{title}</div>
      <div className="download-card__format">{format}</div>
      <div className="download-card__download">
        {download}
        <Icondownload />
      </div>
    </div>
  </div>
);
