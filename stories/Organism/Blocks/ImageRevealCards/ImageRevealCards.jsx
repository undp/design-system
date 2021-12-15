import React, { useEffect } from 'react';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import { Ctalink } from '../../../Components/UIcomponents/Buttons/Cta_link/Cta_link';
import './imagerevealcards.scss';
import viewport from '../../../assets/js/viewport';

export const ImageRevealCards = ({ data, label }) => {
    useEffect(() => {
        viewport('.reveal-head');
        viewport('.reveal-cards');   
    }, []);
    return (
    <>
    {label && <Heading className="reveal-head left-right" type="2" label={label} />}
    <div className="grid-x grid-margin-x reveal-cards left-right">
        {data.map((item, index) => (
        <div key={index} className={['cell', `${item.size}`].join(' ')}>
            <a href={item.link} className={['image-card', `image-card__${item.size}`].join(' ')}>
                <div className="image-card__content">
                    {item.imageback && (
                        <div className={['image-card__content--thumbnail-image', `${item.size}`].join(' ')}>
                            <img src={item.imageback} alt={item.imageback} />
                        </div>
                    )}
                    <div className="image-card__content--caption">
                        {item.contentname && <Heading type="5" label={item.contentname} />}
                    </div>
                </div>
                <Ctalink label={item.btnlabel} variant="Arrow" />
            </a>
        </div>
        ))}
    </div></>
  );
}
