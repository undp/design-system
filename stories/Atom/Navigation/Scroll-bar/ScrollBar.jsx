import React from "react";
import "./scrollbar.scss";

export const ScrollBar = ({}) => (
  <>
    <div className="Scrollbar-horizontal-wrapper Scrollbar-horizontal">
      <div class="Scrollbar-data">.</div>
    </div>
    <div className="Scrollbar-vertical-wrapper Scrollbar-vertical">
      <div class="Scrollbar-data__vertical"></div>
    </div>
  </>
);
