import React from 'react';
import './author-card.scss';
import '../../../../assets/scss/_grid.scss';
import { P } from '../../../../Atom/BaseTypography/Paragraph/Paragraph';
import { Author } from '../AuthorColumn/AuthorColumn';

export function Authorcard({
  data, para, button, link, authorImage, alt,
}) {
  return (
    <div className="grid-x grid-margin-x author-card">
      {data.map((item, index) => (
        <div className="cell medium-4" key={index}>
          <a href={link}>
            <Author data={data} Number="One" authorImage={authorImage} variant="small" alt={alt} title={alt} Link="False" />
            <P label={para} />
            <span className="cta__link cta--space">{button}</span>
          </a>
        </div>
      ))}
    </div>
  );
}
