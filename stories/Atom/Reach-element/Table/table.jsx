import React from 'react';
import './table.scss';

export const TableTag = ({ text , tdtext, details}) => {
  return (
   <table>
      <tr>
         <th>{text}</th>
         <th>{text}</th>
         <th>{text}</th>
      </tr>
      <tr>
         <td>{tdtext}	</td>
         <td>{tdtext}</td>
         <td>{details}</td>
      </tr>
       <tr>
         <td>{tdtext}	</td>
         <td>{tdtext}</td>
         <td>{details}</td>
      </tr>
       <tr>
         <td>{tdtext}	</td>
         <td>{tdtext}</td>
         <td>{details}</td>
      </tr>
       <tr>
         <td>{tdtext}	</td>
         <td>{tdtext}</td>
         <td>{details}</td>
      </tr>

   </table>
  );
};
