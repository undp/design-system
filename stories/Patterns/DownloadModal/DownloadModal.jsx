import React, { useEffect } from 'react';
import './download-modal.scss';
import { Publicationthumb } from '../../Atom/Cards/Publication-thumbnail/PublicationThumbnail';
import { modal } from '../../assets/js/modal';
import { DownloadRow } from '../../Molecules/DownloadRow/DownloadRow';
import { checkbox, selectFilter } from '../../assets/js/download-modal';
import { CtaButton } from '../../Components/UIcomponents/Buttons/Cta_button/CtaButton';
import CustomSelect from '../../Components/Forms/Dropdowns/CustomSelect/CustomSelect';
import { Modal } from '../../Components/UIcomponents/Modal/Modal';

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
      <Modal 
        id="downloadModal"
        css_class={image_variant}
        content={
          <>
            <div className="download-body">
              {Image === 'True' && (
              <div className="show-large">
                <Publicationthumb Hovercolors="yellow" />
              </div>
              )}
              <div className="download-content">
                {Category === 'Multiplelanguages' && <CustomSelect text={select} />}
                <div className={cls('download-list', `${category_variant}`)}>
                  {data.map((item, index) => (
                    <DownloadRow title={item.title} subtitle={item.subtitle} dataValue={item.dataValue} key={index} value={index} />
                  ))}
                </div>
              </div>
            </div>
            <div className="download-footer">
              <CtaButton label={button} For_Primary="No Arrow" State="Disabled" />
            </div>  
          </>
        }
      />
    </>
  );
};

DownloadModal.defaultProps = {
  Image: 'True',
  Category: 'Multiplelanguages',
};
