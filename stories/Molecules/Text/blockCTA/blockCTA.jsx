import React from 'react';
import './blockCTA.scss';
import { H4 } from '../../../Atom/Base-typography/Heading/h4';
import { P } from '../../../Atom/Base-typography/Paragraph/p';


export const BlockCTA = ({sizes }) => {
  return (
<div className={sizes}>
      <div className='block-cta-wrapper' >  
       <H4 label='UNDP Hope' />
       <P label='UNDP works in about 170 countries and territories, helping to achieve the eradication of poverty, and the reduction of inequalities and exclusion. We help countries to develop policies, leadership skills, partnering abilities, institutional capabilities and build resilience in order to sustain development results.' />
    </div>
</div>
  );
};


