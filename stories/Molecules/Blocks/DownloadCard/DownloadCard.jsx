import React from 'react';
import './download-card.scss';
import '../../../assets/scss/_grid.scss';
import { Publicationthumb } from '../../../Atom/Cards/PublicationThumbnail/PublicationThumbnail';
import { Cardthumb } from '../../../Atom/Cards/CardThumbnail/CardThumbnail';

export const DownloadCard = ({
  image, image2, title, format, download, ...args
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
          <span className={[`${(args.variant == 'External Link' ? 'external-link' :'download-icon')}`]}><i/></span>
        </span>
      </div>
    </a>
  </div>
);
