import React from 'react';
import './statscards.scss';
import { Heading } from '.././../../Atom/Base-typography/Heading/Heading';
import { P } from '.././../../Atom/Base-typography/Paragraph/Paragraph';

export const StatsCards = ({ title, titlesec, number, percent, content, size }) => {
    return (
        <div className={['statscard', `statscard--${size}`].join(' ')}>
            <div className='statscard__box'>
                {title && <Heading type='2' className='statscard__title' label={title}/>}
                {titlesec && <Heading type='3' className='statscard__title' label={titlesec}/>}
                <span className='statscard__number'>{number}</span>
                <span className='statscard__per'>{percent}</span>
                <P label={content}/>
            </div>
        </div>
    );
};
