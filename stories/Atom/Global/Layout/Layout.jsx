import React from 'react';
import './layout.scss';

export const Layout = ({ }) => (
  <div>
    <div className="grid_name">Basic</div>
    <div className="grid_description">
      The structure of XY grid uses .grid-x, .grid-y, and .cell as its base.
      Without defining a gutter type the cells will simply split up the space
      without any gutters.
    </div>
    <div className="grid-x ">
      <div className="cell small-6 medium-8 large-10 grid--layout">
        <div className="column">12/12/12 cells </div>
      </div>
    </div>
    <div className="grid-x">
      <div className="cell  medium-6 large-6 grid--layout">
        <div className="column">12/6/6 cells </div>
      </div>
      <div className="cell  medium-6 large-6 grid--layout">
        <div className="column">12/6/6 cells </div>
      </div>
    </div>
    <div className="grid-x">
      <div className="cell  medium-4 large-4 grid--layout">
        <div className="column">12/4/4 cells </div>
      </div>
      <div className="cell  medium-4 large-4 grid--layout">
        <div className="column">12/4/4 cells </div>
      </div>
      <div className="cell  medium-4 large-4 grid--layout">
        <div className="column">12/4/4 cells </div>
      </div>
    </div>
    <div className="grid-x">
      <div className="cell  medium-3 large-3 grid--layout">
        <div className="column">12/3/3 cells </div>
      </div>
      <div className="cell  medium-3 large-3 grid--layout">
        <div className="column">12/3/3 cells </div>
      </div>
      <div className="cell  medium-3 large-3 grid--layout">
        <div className="column">12/3/3 cells </div>
      </div>
      <div className="cell  medium-3 large-3 grid--layout">
        <div className="column">12/3/3 cells </div>
      </div>
    </div>
    <div className="grid-x">
      <div className="cell  medium-2 large-2 grid--layout">
        <div className="column">12/2/2 cells </div>
      </div>
      <div className="cell  medium-2 large-2 grid--layout">
        <div className="column">12/2/2 cells </div>
      </div>
      <div className="cell  medium-2 large-2 grid--layout">
        <div className="column">12/2/2 cells </div>
      </div>
      <div className="cell  medium-2 large-2 grid--layout">
        <div className="column">12/2/2 cells </div>
      </div>
      <div className="cell  medium-2 large-2 grid--layout">
        <div className="column">12/2/2 cells </div>
      </div>
      <div className="cell  medium-2 large-2 grid--layout">
        <div className="column">12/2/2 cells </div>
      </div>
    </div>
    <div className="grid-x">
      <div className="cell  medium-1 large-1 grid--layout">
        <div className="column">12/1/1 cells </div>
      </div>
      <div className="cell  medium-1 large-1 grid--layout">
        <div className="column">12/1/1 cells </div>
      </div>
      <div className="cell  medium-1 large-1 grid--layout">
        <div className="column">12/1/1 cells </div>
      </div>
      <div className="cell  medium-1 large-1 grid--layout">
        <div className="column">12/1/1 cells </div>
      </div>
      <div className="cell  medium-1 large-1 grid--layout">
        <div className="column">12/1/1 cells </div>
      </div>
      <div className="cell  medium-1 large-1 grid--layout">
        <div className="column">12/1/1 cells </div>
      </div>
      <div className="cell  medium-1 large-1 grid--layout">
        <div className="column">12/1/1 cells </div>
      </div>
      <div className="cell  medium-1 large-1 grid--layout">
        <div className="column">12/1/1 cells </div>
      </div>
      <div className="cell  medium-1 large-1 grid--layout">
        <div className="column">12/1/1 cells </div>
      </div>
      <div className="cell  medium-1 large-1 grid--layout">
        <div className="column">12/1/1 cells </div>
      </div>
      <div className="cell  medium-1 large-1 grid--layout">
        <div className="column">12/1/1 cells </div>
      </div>
      <div className="cell  medium-1 large-1 grid--layout">
        <div className="column">12/1/1 cells </div>
      </div>
    </div>
    <div className="grid_name">Gutters</div>
    <div className="grid_description">
      The defining feature of the XY grid is the ability to use margin AND
      padding grids in harmony. To define a grid type, simply set
      .grid-margin-x/.grid-margin-y or .grid-padding-x/.grid-padding-y on the
      grid.
    </div>
    <div className="grid-x grid-margin-x">
      <div className="cell  medium-12 large-12 grid--layout">
        <div className="column">12/12/12 cells </div>
      </div>
    </div>
    <div className="grid-x grid-margin-x">
      <div className="cell  medium-6 large-6 grid--layout">
        <div className="column">12/6/6 cells </div>
      </div>
      <div className="cell  medium-6 large-6 grid--layout">
        <div className="column">12/6/6 cells </div>
      </div>
    </div>
    <div className="grid-x grid-margin-x">
      <div className="cell  medium-4 large-4 grid--layout">
        <div className="column">12/4/4 cells </div>
      </div>
      <div className="cell  medium-4 large-4 grid--layout">
        <div className="column">12/4/4 cells </div>
      </div>
      <div className="cell  medium-4 large-4 grid--layout">
        <div className="column">12/4/4 cells </div>
      </div>
    </div>
    <div className="grid-x grid-margin-x">
      <div className="cell  medium-3 large-3 grid--layout">
        <div className="column">12/3/3 cells </div>
      </div>
      <div className="cell  medium-3 large-3 grid--layout">
        <div className="column">12/3/3 cells </div>
      </div>
      <div className="cell  medium-3 large-3 grid--layout">
        <div className="column">12/3/3 cells </div>
      </div>
      <div className="cell  medium-3 large-3 grid--layout">
        <div className="column">12/3/3 cells </div>
      </div>
    </div>
    <div className="grid-x grid-margin-x">
      <div className="cell  medium-2 large-2 grid--layout">
        <div className="column">12/2/2 cells </div>
      </div>
      <div className="cell  medium-2 large-2 grid--layout">
        <div className="column">12/2/2 cells </div>
      </div>
      <div className="cell  medium-2 large-2 grid--layout">
        <div className="column">12/2/2 cells </div>
      </div>
      <div className="cell  medium-2 large-2 grid--layout">
        <div className="column">12/2/2 cells </div>
      </div>
      <div className="cell  medium-2 large-2 grid--layout">
        <div className="column">12/2/2 cells </div>
      </div>
      <div className="cell  medium-2 large-2 grid--layout">
        <div className="column">12/2/2 cells </div>
      </div>
    </div>
    <div className="grid_name">Grid Container</div>
    <div className="grid_description">
      The grid defaults to the full width of the available space. To contain
      it horizontally use the grid-container class. The container will be
      centered and have a max-width equal to your $grid-container setting
      (1200px by default), along with padding on the left/right equal to half
      your $grid-container-padding setting.
    </div>
    <div className="grid-container">
      <div className="grid-x grid-margin-x">
        <div className="cell small-4 grid--layout">
          <div className="column">cells </div>
        </div>
        <div className="cell small-4 grid--layout">
          <div className="column">cells </div>
        </div>
        <div className="cell small-4 grid--layout">
          <div className="column">cells </div>
        </div>
      </div>
    </div>
    <div className="grid_name">Grid Container Fluid</div>
    <div className="grid_description">
      To stretch the content to the full width of the available space, simply
      add the class fluid to your grid-container.
    </div>
    <div className="grid-container fluid">
      <div className="grid-x grid-margin-x">
        <div className="cell small-4 grid--layout">
          <div className="column">cells </div>
        </div>
        <div className="cell small-4 grid--layout">
          <div className="column">cells </div>
        </div>
        <div className="cell small-4 grid--layout">
          <div className="column">cells </div>
        </div>
      </div>
    </div>
    <div className="grid_name">Auto Sizing</div>
    <div className="grid_description">
      If the class .auto or .[size]-auto is added to the cell, it will take up
      the remaining space.
    </div>
    <div className="grid-x grid-margin-x">
      <div className="cell small-4 grid--layout">
        <div className="column">4 cells </div>
      </div>
      <div className="cell auto grid--layout">
        <div className="column">Whatever's left! </div>
      </div>
    </div>
    <div className="grid_description">
      Multiple expanding cells will share the leftover space equally.
    </div>
    <div className="grid-x grid-margin-x">
      <div className="cell small-4 grid--layout">
        <div className="column">4 cells </div>
      </div>
      <div className="cell auto grid--layout">
        <div className="column">Whatever's left! </div>
      </div>
      <div className="cell auto grid--layout">
        <div className="column">Whatever's left! </div>
      </div>
    </div>
    <div className="grid_description">
      A cell can also be made to shrink, by adding the .shrink or
      .[size]-shrink class. This means it will only take up the space its
      contents need.
    </div>
    <div className="grid-x grid-margin-x">
      <div className="cell shrink grid--layout">
        <div className="column">Shrink!</div>
      </div>
      <div className="cell auto grid--layout">
        <div className="column">Expand! </div>
      </div>
    </div>
    <div className="grid_name">Responsive Adjustments</div>
    <div className="grid_description">
      To switch back to the auto behavior from a percentage or shrink
      behavior, use the classes .[size]-auto or .[size]-shrink. In the below
      example, the cells stack on small screens, and become even-width on
      large screens.
    </div>
    <div className="grid-x">
      <div className="cell large-auto grid--layout">
        <div className="column">One</div>
      </div>
      <div className="cell large-auto grid--layout">
        <div className="column">Two</div>
      </div>
      <div className="cell large-auto grid--layout">
        <div className="column">Three</div>
      </div>
      <div className="cell large-auto grid--layout">
        <div className="column">Four</div>
      </div>
      <div className="cell large-auto grid--layout">
        <div className="column">Five</div>
      </div>
      <div className="cell large-auto grid--layout">
        <div className="column">Six</div>
      </div>
    </div>
    <div className="grid_name">
      Collapse Cells
      <span>X Grid only</span>
    </div>
    <div className="grid_description">
      The .[size]-[gutter-type]-collapse class lets you remove cell gutters.
      There are times when you won't want each media query to be collapsed. In
      this case, use the media query size you want and collapse, and add that
      to your grid element. Example shows gutters at small and no gutters on
      medium and up.
    </div>
    <div className="grid-x grid-margin-x medium-margin-collapse">
      <div className="cell small-6 grid--layout">
        <div className="column">  Gutters at small no gutters at medium.</div>
      </div>
      <div className="cell small-6 grid--layout">
        <div className="column">  Gutters at small no gutters at medium.</div>
      </div>
    </div>
    <div className="grid_name">Offsets</div>
    <div className="grid_description">
      Offsets work by applying margin-left to a grid.
    </div>
    <div className="grid-x grid-margin-x">
      <div className="cell small-4 large-offset-2 grid--layout">
        <div className="column"> Offset 2 on large</div>
      </div>
      <div className="cell small-4 grid--layout">
        <div className="column"> 4 cells </div>
      </div>
    </div>
    <div className="grid_name">
      Block Grids
      <span>X Grid only</span>
    </div>
    <div className="grid_description">
      To define cell widths within a direction-level, instead of the
      individual cell level, add the class .[size]-up-[n] to a grid-x, where
      [n] is the number of cells to display per direction, and [size] is the
      breakpoint at which to apply the effect.
    </div>
    <div className="grid-x grid-padding-x small-up-2 medium-up-4 large-up-6">
      <div className="cell grid--layout">
        <div className="column"> cells</div>
      </div>
      <div className="cell grid--layout">
        <div className="column"> cells</div>
      </div>
      <div className="cell grid--layout">
        <div className="column"> cells</div>
      </div>
      <div className="cell grid--layout">
        <div className="column"> cells</div>
      </div>
      <div className="cell grid--layout">
        <div className="column"> cells</div>
      </div>
      <div className="cell grid--layout">
        <div className="column"> cells</div>
      </div>
    </div>
    <div className="grid_name">Grid Frame</div>
    <div className="grid_description">
      The XY grid incorporates the grid frame from Foundation for Apps plus
      many other useful features. To start, add .grid-frame to the grid. This
      sets the grid to be 100vh (the full height of the browser window).
    </div>
    <div className="grid-y medium-grid-frame">
      <div className="cell shrink header medium-cell-block-container">
        <div className="grid_name">Grid Frame Header</div>
        <div className="grid-x grid-padding-x">
          <div className="cell medium-4 grid--layout">
            <div className="column"> A medium 4 cell</div>
          </div>
          <div className="cell medium-4 medium-cell-block">
            <div className="grid_description">
              A medium 4 cell block... on medium this content should overflow and let you horizontally scroll across... one might use this for an array of options
            </div>
          </div>
          <div className="cell medium-4 grid--layout">
            <div className="column"> A medium 4 cell</div>
          </div>
        </div>
      </div>
      <div className="cell medium-auto medium-cell-block-container">
        <div className="grid-x grid-padding-x">
          <div className="cell medium-4 medium-cell-block-y ">
            <div className="grid_description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacus odio, accumsan id ullamcorper eget, varius nec erat. Nulla facilisi. Donec dui felis, euismod nec finibus vitae, dapibus quis arcu. Maecenas tempor et ipsum quis venenatis. Ut posuere sed augue sit amet efficitur. Sed imperdiet, justo id tempus rhoncus, est est viverra turpis, non vulputate magna lectus et nisl. Pellentesque ultrices porttitor vehicula. Ut aliquet efficitur ligula, a consectetur felis. Proin tristique ut augue nec luctus. Curabitur a sapien pretium, auctor elit a, efficitur erat. Donec tincidunt dui vel velit bibendum euismod. Cras vitae nibh dui. Aliquam erat volutpat. Etiam sit amet arcu a erat efficitur facilisis. Ut viverra dapibus turpis, et ornare justo. Integer in dui cursus, dignissim tortor a, hendrerit risus.</div>
            <div className="grid_description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacus odio, accumsan id ullamcorper eget, varius nec erat. Nulla facilisi. Donec dui felis, euismod nec finibus vitae, dapibus quis arcu. Maecenas tempor et ipsum quis venenatis. Ut posuere sed augue sit amet efficitur. Sed imperdiet, justo id tempus rhoncus, est est viverra turpis, non vulputate magna lectus et nisl. Pellentesque ultrices porttitor vehicula. Ut aliquet efficitur ligula, a consectetur felis. Proin tristique ut augue nec luctus. Curabitur a sapien pretium, auctor elit a, efficitur erat. Donec tincidunt dui vel velit bibendum euismod. Cras vitae nibh dui. Aliquam erat volutpat. Etiam sit amet arcu a erat efficitur facilisis. Ut viverra dapibus turpis, et ornare justo. Integer in dui cursus, dignissim tortor a, hendrerit risus.</div>
          </div>
          <div className="cell medium-8 medium-cell-block-y">
            <div className="grid_description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacus odio, accumsan id ullamcorper eget, varius nec erat. Nulla facilisi. Donec dui felis, euismod nec finibus vitae, dapibus quis arcu. Maecenas tempor et ipsum quis venenatis. Ut posuere sed augue sit amet efficitur. Sed imperdiet, justo id tempus rhoncus, est est viverra turpis, non vulputate magna lectus et nisl. Pellentesque ultrices porttitor vehicula. Ut aliquet efficitur ligula, a consectetur felis. Proin tristique ut augue nec luctus. Curabitur a sapien pretium, auctor elit a, efficitur erat. Donec tincidunt dui vel velit bibendum euismod. Cras vitae nibh dui. Aliquam erat volutpat. Etiam sit amet arcu a erat efficitur facilisis. Ut viverra dapibus turpis, et ornare justo. Integer in dui cursus, dignissim tortor a, hendrerit risus.</div>
            <div className="grid_description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacus odio, accumsan id ullamcorper eget, varius nec erat. Nulla facilisi. Donec dui felis, euismod nec finibus vitae, dapibus quis arcu. Maecenas tempor et ipsum quis venenatis. Ut posuere sed augue sit amet efficitur. Sed imperdiet, justo id tempus rhoncus, est est viverra turpis, non vulputate magna lectus et nisl. Pellentesque ultrices porttitor vehicula. Ut aliquet efficitur ligula, a consectetur felis. Proin tristique ut augue nec luctus. Curabitur a sapien pretium, auctor elit a, efficitur erat. Donec tincidunt dui vel velit bibendum euismod. Cras vitae nibh dui. Aliquam erat volutpat. Etiam sit amet arcu a erat efficitur facilisis. Ut viverra dapibus turpis, et ornare justo. Integer in dui cursus, dignissim tortor a, hendrerit risus.</div>
            <div className="grid_description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacus odio, accumsan id ullamcorper eget, varius nec erat. Nulla facilisi. Donec dui felis, euismod nec finibus vitae, dapibus quis arcu. Maecenas tempor et ipsum quis venenatis. Ut posuere sed augue sit amet efficitur. Sed imperdiet, justo id tempus rhoncus, est est viverra turpis, non vulputate magna lectus et nisl. Pellentesque ultrices porttitor vehicula. Ut aliquet efficitur ligula, a consectetur felis. Proin tristique ut augue nec luctus. Curabitur a sapien pretium, auctor elit a, efficitur erat. Donec tincidunt dui vel velit bibendum euismod. Cras vitae nibh dui. Aliquam erat volutpat. Etiam sit amet arcu a erat efficitur facilisis. Ut viverra dapibus turpis, et ornare justo. Integer in dui cursus, dignissim tortor a, hendrerit risus.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
