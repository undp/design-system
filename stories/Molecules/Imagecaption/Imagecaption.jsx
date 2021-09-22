import React from 'react';
import './imagecaption.scss';
import { Imagecredit } from '../../Atom/Images/Imagecredit/Imagecredit';

export const Imagecaption = ({ name, label, paragraph, ...props }) => {

    return (
    <div className="image-caption">
        <div className="image-caption-para">
            <div className="para-img-box">
                <p>{ paragraph }</p>
            </div>
        </div>
        <div className="author__caption">
            <Imagecredit label={ label } name={ name }/>
        </div>
    </div>
    );
};
