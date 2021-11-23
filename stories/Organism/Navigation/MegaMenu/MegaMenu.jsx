import React from 'react';
import { Ctalink } from '../../../Atom/Buttons-and-labels/Cta_link/Cta_link';
import { Image } from '../../../Atom/Images/Image/Image';
import './MegaMenu.scss';

const MegaMenu = ({ text }) => (
  <div className="cell large-12 mega-nav-option">
    <div className="grid-x">
      <div className="cell large-3">
        <ul className="submenu" />
      </div>
      <div className="cell large-9">
        <div className="grid-x">
          <div className="cell large-6 mega-sub-description">
            <h3 className="mega-title">Page Title</h3>
            <p className="mega-description">Ea rem numquam ad odit. Consequatur numquam harum nemo quisquam dolores harum itaque omnis qui. Veniam a quisquam distinctio repellendus. Vel sapiente omnis alias eos corrupti.</p>
            <div className="sub-sub-menu">
              <ul className="list-col-first" />
              <ul className="list-col-second" />
            </div>
          </div>
          <div className="cell large-6 mega-image">
            <Image />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MegaMenu;
