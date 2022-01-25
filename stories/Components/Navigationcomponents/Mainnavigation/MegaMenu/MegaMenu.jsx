import React from 'react';
import { Image } from '../../../../Atom/Images/Image/Image';

import './mega-menu.scss';

const MegaMenu = ({ text }) => (
  <div className="cell large-12 mega-nav-option" data-menu-item-id="headerlink2">
    <div className="grid-x">
      <div className="cell large-3">
        <ul className="submenu">
          <li id="submenu1-headerlink1" className="active"><a href="#" className="sub-link">Page Title</a></li>
          {' '}
          <li id="submenu2-headerlink1" className=""><a href="#" className="sub-link">Page Title</a></li>
          {' '}
          <li id="submenu3-headerlink1" className=""><a href="#" className="sub-link">Page Title</a></li>
          {' '}
          <li id="submenu4-headerlink1" className=""><a href="#" className="sub-link">Page Title</a></li>
        </ul>
      </div>
      <div className="cell large-9">
        <div className="grid-x sub-menu-content" data-submenu-id="submenu2-headerlink1">
          <div className="cell mega-sub-description large-6">
            <h3 className="mega-title">Page Title</h3>
            <p className="mega-description">Ea rem numquam ad odit. Consequatur numquam harum nemo quisquam dolores harum itaque omnis qui. Veniam a quisquam distinctio repellendus. Vel sapiente omnis alias eos corrupti.</p>
            <div className="sub-sub-menu">
              <ul className="list-col-first">
                <li><a className="cta__link cta--space" href="#">Sub Page</a></li>
              </ul>
              <ul className="list-col-second">
                <li><a className="cta__link cta--space" href="#">Sub Page</a></li>
              </ul>
            </div>
          </div>
          <div className="cell large-6 mega-image"><Image /></div>
        </div>
      </div>
    </div>
  </div>
);

export default MegaMenu;
