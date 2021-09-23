import React from 'react';
import './authorimage.scss';
import user from '../../../assets/images/user.svg';

export const Large = ({ src, alt }) => {
    const image = {
        src: user,
        alt: 'user',
    }
    return (
        <figure className="author-img">
            <img src={image.src} alt={image.alt} />
        </figure>
    );
};
