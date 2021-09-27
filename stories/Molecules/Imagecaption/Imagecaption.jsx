import React from 'react';
import './imagecaption.scss';
import { Imagecredit } from '../../Atom/Images/Imagecredit/Imagecredit';

export const Imagecaption = ({ name, label, paragraph, ...props }) => {
    return (
        <figcaption className="image__caption">
            <div className="image__caption_para">
                { paragraph }
            </div>
            <Imagecredit label={ label } name={ name }/>
        </figcaption>
    );
};
