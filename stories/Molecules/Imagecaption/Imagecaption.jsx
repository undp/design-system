import React from 'react';
import './imagecaption.scss';
import { P } from '../../Atom/Base-typography/Paragraph/p';
import { Imagecredit } from '../../Atom/Images/Imagecredit/Imagecredit';

export const Imagecaption = ({ name, label, paragraph, ...props }) => {
    return (
    <div className="image-caption">
        <div className="image__caption__para">
            <P label={ paragraph }/>
        </div>
        <Imagecredit label={ label } name={ name }/>
    </div>
    );
};
