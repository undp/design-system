import React from 'react';
import './tertiary.scss';

import { H4 } from '../../../Atom/Base-typography/Heading/h4';
import { H5 } from '../../../Atom/Base-typography/Heading/h5';
import { P } from '../../../Atom/Base-typography/Paragraph/p';

export const Tertiary = ({ }) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
          <div className='tertiary-wrapper' >  
          <H4 label='Section Header' />
          <H5 label='Algeria' />
          <P label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis, sem vitae scelerisque tincidunt, mi metus fringilla lectus, quis malesuada sapien elit vel lectus. Quisque faucibus cursus nisi, id mollis dolor vulputate ullamcorper. Nunc volutpat at quam id imperdiet. Integer non dolor vel nisl placerat interdum. Nulla ut ipsum in ligula tincidunt consequat. Aenean tincidunt scelerisque dolor sit amet maximus.'/>
        </div>
    </div>
  );
};


