import React from 'react';
import './authorimage.scss';
import user from '../../../assets/images/user.svg';

export const Small = ({ src, alt }) => {
    const image = {
        src: user,
        alt: 'user',
    }
    return (
        <figure className="author-img-small">
            <img src={image.src} alt={image.alt} />
        </figure>
    );
};
