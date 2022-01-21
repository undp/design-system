import React, { useEffect } from 'react';
import './downloadmodal.scss';
import { Publicationthumb } from '../../Atom/Cards/Publication-thumbnail/PublicationThumbnail';
import { modal } from '../../assets/js/modal';
import { DownloadRow } from '../../Molecules/DownloadRow/DownloadRow';
import { checkbox, selectFilter } from '../../assets/js/downloadmodal';
import { CtaButton } from '../../Components/UIcomponents/Buttons/Cta_button/CtaButton';
import CustomSelect from '../../Components/Forms/Dropdowns/CustomSelect/CustomSelect';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const Image_options = {
  True: '',
  False: 'modal-download',
};

export const Category_options = {
  Singlelanguage: 'list-language',
  Multiplelanguages: '',
};

export const DownloadModal = ({
  data, button, select, modalbtn, content, Image, Category, ...props
}) => {
  useEffect(() => {
    checkbox('.form-check input', '.download-footer .button-primary');
    selectFilter();
    modal();
  }, []);
  let image_variant = Image_options[`${Image}`];
  let category_variant = Category_options[`${Category}`];
  return (
    <>
      {content === '' && <CtaButton label={modalbtn} data-toggle="modal" data-target-modal="#downloadModal" />}
      <div className={cls('modal', `${image_variant}`)} role="dialog" aria-label="modal" aria-modal="true" {...props}>
        <div className="modal-content">
          <button type="button" class="modal-close-button" data-dismiss="modal" aria-label="Close">Close</button>
          <div className="download-body">
            {Image === 'True' && (
            <div className="show-large">
              <Publicationthumb Hovercolors="yellow" />
            </div>
            )}
            <div className="download-content">
              {Category === 'Multiplelanguages' && <CustomSelect text={select} />}
              <div className={cls('download-list', 'scrollbar-vertical', `${category_variant}`)}>
                {data.map((item, index) => (
                  <DownloadRow title={item.title} subtitle={item.subtitle} dataValue={item.dataValue} key={index} value={index} />
                ))}
              </div>
            </div>
          </div>
          <div className="download-footer">
            <CtaButton label={button} For_Primary="No Arrow" State="Disabled" />
          </div>
        </div>
      </div>
    </>
  );
};

DownloadModal.defaultProps = {
  Image: 'True',
  Category: 'Multiplelanguages',
};
