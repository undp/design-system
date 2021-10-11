import React from 'react';
import './authors.scss';
import { Heading } from '../../../../Atom/Base-typography/Heading/Heading';
import { Authorimg } from '../../../../Atom/Images/Authorimage/Authorimages';

export const Author = ({ data, width }) => {
    return (
        <div className="author-wrapper">
            {data.map(function(item, index) {
                return (
                    <div className={['author-wrapper__box', `author-${width}-col`].join(' ')} key={index}>
                        <Authorimg size='small'/>
                        <div className="author__label">
                            <Heading type='6' label={item.Authorlabel} className='name'/>
                            <span className='designation'>{item.Authortext}</span>
                        </div>
                    </div>
                )})}
        </div>
    );
};
