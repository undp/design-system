import React, { useEffect } from 'react';
import viewport from '../../../assets/js/viewport';
import './project-detail.scss';
import { Projectcolumn } from '../../../Atom/ProjectColumn/ProjectColumn';
import { Heading } from '../../../Atom/Typography/Heading/Heading';

export const Projectdetail = ({
  text, title1, subtitle1, title2, subtitle2, title3, subtitle3, title4, subtitle4, title5, subtitle5, title6, subtitle6, title7, subtitle7,
}) => {
  useEffect(() => {
    viewport('.left-right');
  }, []);
  return (
    <div className="project-detail">
      <Heading type="2" className="left-right" label={text} />
      <div className="grid-x grid-margin-x project-detail-list left-right">
        <div className="cell large-2 medium-2">
          <div className="grid-x">
            <div className="cell large-12 medium-12 small-6">
              <Projectcolumn headertext={title2} subtext={subtitle2} />
              <Projectcolumn headertext={title3} subtext={subtitle3} />
            </div>
            <div className="cell large-12 medium-12 small-6">
              <Projectcolumn headertext={title1} subtext={subtitle1} />
            </div>
          </div>
        </div>
        <div className="cell large-2 medium-2">
          <Projectcolumn headertext={title4} subtext={subtitle4} />
        </div>
        <div className="cell large-5 medium-5">
          <div className="grid-x">
            <div className="cell large-7 medium-5 small-6">
              <Projectcolumn headertext={title5} subtext={subtitle5} />
            </div>
            <div className="cell large-5 medium-7 small-6">
              <Projectcolumn headertext={title6} subtext={subtitle6} />
            </div>
          </div>
        </div>
        <div className="cell large-3 medium-3">
          <Projectcolumn headertext={title7} subtext={subtitle7} />
        </div>
      </div>
    </div>
  );
};
