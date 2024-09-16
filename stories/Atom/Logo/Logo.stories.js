import React from 'react';
import { Meta, Story, Canvas, Anchor } from '@storybook/addon-docs';
import { Logo } from './Logo';
import logo from '../../assets/images/undp-logo-blue.svg';
import logowhite from '../../assets/images/undp-logo-white.svg';
import pnud from '../../assets/images/pnud-logo-blue.svg';
import pnudwhite from '../../assets/images/pnud-logo-white.svg';

export default {
  title: 'Foundation/Logos',
  component: Logo,
  
  
  parameters: {
    args: {
      src: logo,
      alt: 'UNDP Logo',
    },
    backgrounds: {
      default: 'white',
      values: [
        { name: "white", value: "#fff" },
        { name: "gray", value: "#A9B1B7" },
      ],
    },
    docs: {
      page: () => (
        <section>
          <h1>UNDP Logos</h1>
          <p>
            The UNDP logo is a keystone element of the identity and is used to represent the entire organization.
          </p>

          <h3>Overview</h3>
          <p>
            The UNDP logo is the combination, in one fixed-size relationship, of the United Nations emblem and the letters “UNDP/PNUD”.
            The UNDP logo is the keystone element of the identity program and should be used to represent the entire organization.
          </p>

          <h3>When to use:</h3>
          <ul>
            <li>To promote business.</li>
            <li>To create an identity for the organization.</li>
          </ul>

          <h3>Formatting</h3>
          <h4>Default</h4>
          <p>
            There are only two versions of the UNDP logo: UNDP (English) and PNUD (French/Spanish). Within the design system, the logo is used in the header and footer components.
            The logo is available in blue or white.
          </p>

          <h3>Content</h3>
          <p>
            A well-established and consistently presented identity is a very valuable asset.
            To protect and strengthen the trademark status of the logo, the approved versions must not be altered, modified, changed, or added to in any way.
          </p>

          <h3>Behaviors</h3>
          <h4>States</h4>
          <p>The UNDP and PNUD logos are available in blue or white and used as per the page background.</p>

          <Anchor storyId="foundation-logos--pnud-logo-blue"></Anchor>

          <h4>1. PNUD logo - Blue <a href="images/pnud-logo-blue.svg" download>Download</a></h4>
     

          <Canvas of={PNUDLogoBlue} />

          <Anchor storyId="foundation-logos--pnud-logo-white"></Anchor>

          <h4>2. PNUD logo - White <a href="images/pnud-logo-white.svg" download>Download</a></h4>
   

          <Canvas of={PNUDLogoWhite} />

          <Anchor storyId="foundation-logos--undp-logo-blue"></Anchor>

          <h4>3. UNDP Logo - Blue</h4>
       

          <Canvas of={UNDPLogoBlue} />

          <Anchor storyId="foundation-logos--undp-logo-white"></Anchor>

          <h4>4. UNDP Logo - White</h4>


          <Canvas of={UNDPLogoWhite} />

          <h3>Interactions</h3>
          <p>By clicking on the logo, the website is redirected to the homepage.</p>
        </section>
      ),
    },
  },
};

const Template = (args) => <Logo {...args} />;

export const PNUDLogoBlue = Template.bind({});
PNUDLogoBlue.args = {
  src: pnud,
  alt: 'PNUD Logo - Blue',
};
PNUDLogoBlue.argTypes = {
  src: { table: { disable: true } },
  alt: { table: { disable: true } },
};
PNUDLogoBlue.parameters = {
  docs: {
    story: {
      inline: false,
      iframeHeight: '100%',
    },
  },
};

export const PNUDLogoWhite = Template.bind({});
PNUDLogoWhite.args = {
  src: pnudwhite,
  alt: 'PNUD Logo - White',
};
PNUDLogoWhite.argTypes = {
  src: { table: { disable: true } },
  alt: { table: { disable: true } },
};
PNUDLogoWhite.parameters = {
  backgrounds: { default: 'gray' },
  docs: {
    story: {
      inline: false,
      iframeHeight: '100%',
    },
  },
};

export const UNDPLogoBlue = Template.bind({});
UNDPLogoBlue.args = {
  src: logo,
  alt: 'UNDP Logo - Blue',
};
UNDPLogoBlue.argTypes = {
  src: { table: { disable: true } },
  alt: { table: { disable: true } },
};
UNDPLogoBlue.parameters = {
  docs: {
    story: {
      inline: false,
      iframeHeight: '100%',
    },
  },
};

export const UNDPLogoWhite = Template.bind({});
UNDPLogoWhite.args = {
  src: logowhite,
  alt: 'UNDP Logo - White',
};
UNDPLogoWhite.argTypes = {
  src: { table: { disable: true } },
  alt: { table: { disable: true } },
};
UNDPLogoWhite.parameters = {
  backgrounds: { default: 'gray' },
  docs: {
    story: {
      inline: false,
      iframeHeight: '100%',
    },
  },
};
