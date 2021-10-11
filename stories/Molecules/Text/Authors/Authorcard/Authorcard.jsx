import React from 'react';
import './authorcard.scss';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { Author } from '../../../../Molecules/Text/Authors/Authorcolumn/Authors';
import { Ctaspace } from '../../../../Atom/Buttons-and-labels/Cta_button/cta_link_space';

export const Authorcard = ({ data, para, button, link, width }) => {
    return (
        <div className='grid-x grid-margin-x'>
            <div className='cell medium-4'>
                <a href={link} className='authorcard'>
                    <Author data={data} width={width}/>
                    <P label={para}/>
                    <Ctaspace label={button}/>
                </a>
            </div>
        </div>
    );
};
