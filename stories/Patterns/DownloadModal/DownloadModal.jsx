import React, { useEffect } from 'react';
import './downloadmodal.scss';
import { Publicationthumb } from '../../Atom/Cards/Publication-thumbnail/PublicationThumbnail';
import { DownloadRow } from '../../Molecules/DownloadRow/DownloadRow';
import { checkbox, selectfilter } from '../../assets/js/downloadmodal';
import { CtaButton } from '../../Components/UIcomponents/Buttons/Cta_button/CtaButton';
import CustomSelect from '../../Components/Forms/Dropdowns/CustomSelect/CustomSelect';

export const Image_options = {
  True: '',
  False: 'modal-download',
};

export const Category_options = {
  Singlelanguage: 'list-language',
  Multiplelanguages: '',
};

export const DownloadModal = ({
  data, button, select, ...args
}) => {
  useEffect(() => {
    checkbox('.custom-control-input', '.button--primary');
    selectfilter();
  }, []);
  return (
    <div id="myDownload" className={['modal', `${Image_options[`${args.Image}`]}`].join(' ')}>
      <div className="modal-content">
        <div className="modal-close-button" />
        <div className="download-body">
          {args.Image === 'True' && (
          <div className="show-large">
            <Publicationthumb />
          </div>
          )}
          <div className="download-content">
            {args.Category === 'Multiplelanguages' && <CustomSelect text={select} />}
            <div className={['download-list', `${Category_options[`${args.Category}`]}`].join(' ')}>
              {data.map((item, index) => (
                <DownloadRow title={item.title} subtitle={item.subtitle} datalang={item.datalang} key={index} value={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="download-footer">
          <CtaButton label1={button} For_Primary="No_arrow" state="Disabled" />
        </div>
      </div>
    </div>
  );
};

DownloadModal.defaultProps = {
  Image: 'True',
  Category: 'Multiplelanguages',
};
