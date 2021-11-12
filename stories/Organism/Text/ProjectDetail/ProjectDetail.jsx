import React, { useEffect } from 'react';
import viewport from '../../../assets/js/viewport';
import './projectdetail.scss';
import { Projectcolumn } from '../../../Atom/ProjectColumn/ProjectColumn';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';
export const Projectdetail = ({
  text, title1, subtitle1, title2, subtitle2, title3, subtitle3, title4, subtitle4, title5, subtitle5, title6, subtitle6, title7, subtitle7,
}) => {
  useEffect(() => {
    viewport('.projectdata-section__title');
    viewport('.projectdata-section');
  }, []);
  return (
    <div className="projectdata-section__wrapper">
      <Heading type="2" className="projectdata-section__title left-right" label={text} />
      <div className="projectdata-section left-right grid-x grid-margin-x">
        <div className="cell large-2 medium-2 projectdata-section__wrapper1">
          <div className="grid-x">
            <div className="cell large-12 medium-12 small-6 projectdata-section__wrapper1--cart-1">
              <Projectcolumn headertext={title1} subtext={subtitle1} />
            </div>
            <div className="cell large-12 medium-12 small-6 projectdata-section__wrapper1--cart-2">
              <Projectcolumn headertext={title2} subtext={subtitle2} />
              <Projectcolumn headertext={title3} subtext={subtitle3} />
            </div>
          </div>
        </div>
        <div className="cell large-2 medium-2 projectdata-section__wrapper2">
          <Projectcolumn headertext={title4} subtext={subtitle4} />
        </div>
        <div className="cell large-5 medium-5 projectdata-section__wrapper3">
          <div className="grid-x">
            <div className="cell large-7 medium-5 small-6 projectdata-section__wrapper3--cart-1">
              <Projectcolumn headertext={title5} subtext={subtitle5} />
            </div>
            <div className="cell large-5 medium-7 small-6 projectdata-section__wrapper3--cart-2">
              <Projectcolumn headertext={title6} subtext={subtitle6} />
            </div>
          </div>
        </div>
        <div className="cell large-3 medium-3 projectdata-section__wrapper4">
          <Projectcolumn headertext={title7} subtext={subtitle7} />
        </div>
      </div>
    </div>
  );
};