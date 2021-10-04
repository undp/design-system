import React from 'react';
import './singlecontent.scss';
import '../../../assets/scss/_grid.scss';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';
import { Ctaspace } from '../../../Atom/Buttons-and-labels/Cta_button/cta_link_space';

export const SingleContent = ({ contenttile, contentname, contentnametwo, image, type, paragraph,link,button }) => {
    return (
        <div className='grid-x grid-margin-x'>
            <div className='cell medium-4'>
                <a href={link} className={['singlecard', `singlecard--${type}`].join(' ')}>
                    <div className="singlecard__head">{contenttile}</div>
                    {image && <div className='card_thumbnail__image'>
                        <img src={image} alt={image}/>
                    </div>}
                    <div className='singlecard__caption'>
                        {contentname && <Heading type='5' label={contentname}/>}
                        {contentnametwo && <Heading type='4' label={contentnametwo}/>}
                        {paragraph && <span className='singlecard__para'>{paragraph}</span>}
                        <Ctaspace label={button}/>
                    </div>
                </a>
            </div>
        </div>
    );
};
