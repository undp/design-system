import React from 'react';
import './imagecredit.scss';

export const Imagecredit = ({ label, name, ...props }) => {
    return (
        <div>
            <div className="credit--image-author">
                <span>{label}</span>
                <b>{name}</b>
            </div>
        </div>
    );
};
