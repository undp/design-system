import React from 'react';
import "./sdgmodal.scss";
import { Heading } from '../../Atom/Typography/Heading/Heading';
import { Statscardslider } from "../../Organism/Statscardslider/Statscardslider";
import { ContentCardWithAndWithoutImage } from "../../Organism/Blocks/ContentCardWithAndWithoutImage/ContentCardWithAndWithoutImage";
import { CtaButton } from '../../Components/UIcomponents/Buttons/Cta_button/CtaButton';

export const Sdgmodal = ({ statsData, goalcount, goaldata, contentdata, storyBtn, Sdgcontenttitle, modaltitle, description, goaltitle, sdgimg, alt }) => {
  return (
    <div className="modal-sdg modal-dialog" role="dialog" aria-modal="true" tabindex="0" aria-label="SDG-Modal">
      <div className="grid-x height-full">
        <div className="cell medium-2 modal-header show-large">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="cell medium-10 modal-sdg-content">
          <div className="modal-header show-small">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="sdg-container sdg-red">
            <div className="heading">
              <Heading type="3" label={goalcount} />
              <Heading type="2" label={modaltitle} />
            </div>
            <div className="description color-white">
              <div className="grid-x">
                <div className="cell large-8 medium-6">
                  <p>{description}</p>
                </div>
                <div className="cell large-4 medium-6">
                  <img src={sdgimg} alt={alt} title={alt} />
                </div>
              </div>
            </div>
            <div className="sdg-stats">
              <Statscardslider data={statsData} />
            </div>
            <div className="grid-x bulleted-list">
              <div className="cell small-7 medium-4">
                <Heading type="2" label={goaltitle} />
              </div>
              <div className="cell small-12 medium-7 medium-offset-1">
                <ul>
                  {goaldata.map((item, index) => (
                    <li key={index}>{item.text}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="sdg-content-cards">
              <Heading type="3" label={Sdgcontenttitle} />
              <ContentCardWithAndWithoutImage data={contentdata} />
              <CtaButton label={storyBtn} Type="Secondary" />
            </div>
          </div>
          <div className="ndg-container">
            <a href="#no-poverty" class="sdg-card sdg-red" data-slug="#no-poverty" data-color="sdg-red">
              <strong>1</strong>
              <Heading type="4" label='No poverty' />
              <div class="sdg-image">
                <img src="static/media/stories/assets/images/sdg1.png" alt="sdg-image" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
