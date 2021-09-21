import React from 'react';
import './accordion';
import './FaqNew.scss';
import { H5 } from '../../../Atom/Base-typography/Heading/h5';
import { P } from '../../../Atom/Base-typography/Paragraph/p';

export const FaqNew = () => {
  return (
<div className="accordion">
   <div className="accordion-head">
      <H5 label='Repellendus nam autem delectus tempore iste. ' />
      <div className="arrow down"></div>
   </div>
   <div className="accordion-body">
      <P label='Sit velit nisi officia. Dicta illum nesciunt autem ut. Et aut eos dolor. Exercitationem reprehenderit unde harum. ' />
      <P label='Adipisci asperiores ab ut. Dolor voluptatem modi. Eligendi maxime voluptatem. Earum quasi quasi culpa a quia libero esse dolore saepe. Ipsam qui sapiente. Rerum ut ipsa asperiores aut.' />
      <P label='Molestiae aperiam eum. Eligendi earum minima delectus consequatur ipsum rerum aut exercitationem. Dolorem id voluptatum sapiente nisi est ut consequatur et nemo. Hic pariatur sit. Quaerat voluptatem omnis quia est. Temporibus quia est veniam at commodi in.' />
   </div>
   <div className="accordion-head">
        <H5 label='Temporibus et vero voluptas culpa eos occaecati at quae.' />
      <div className="arrow down"></div>
   </div>
   <div className="accordion-body">
      <P label='Adipisci asperiores ab ut. Dolor voluptatem modi. Eligendi maxime voluptatem. Earum quasi quasi culpa a quia libero esse dolore saepe. Ipsam qui sapiente. Rerum ut ipsa asperiores aut.' />
      <P label='Molestiae aperiam eum. Eligendi earum minima delectus consequatur ipsum rerum aut exercitationem. Dolorem id voluptatum sapiente nisi est ut consequatur et nemo. Hic pariatur sit. Quaerat voluptatem omnis quia est. Temporibus quia est veniam at commodi in.' />
   </div>
</div>
  );
};
