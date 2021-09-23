import React from 'react';
import './imagecredit.scss';

export const Imagecredit = ({ label, name, ...props }) => {
    return (
        <div className="image--author">
            <span className="author__caption author--label">{label}</span>
            <span className="author__caption author--name">{name}</span>
        </div>
    );
};
