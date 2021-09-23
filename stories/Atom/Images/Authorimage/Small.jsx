import React from 'react';
import './authorimage.scss';
import user from '../../../assets/images/user.svg';

export const Small = ({ src, alt }) => {
    const image = {
        src: user,
        alt: 'user',
    }
    return (
        <div className="author__img author__img--small">
            <img src={image.src} alt={image.alt} />
        </div>
    );
};
