import React from 'react';
import { Meta, Story, Canvas, Anchor } from '@storybook/addon-docs';
import { Logo } from './Logo';

import logo from '../../assets/images/undp-logo-blue.svg';
import logowhite from '../../assets/images/undp-logo-white.svg';
import pnud from '../../assets/images/pnud-logo-blue.svg';
import pnudwhite from '../../assets/images/pnud-logo-white.svg';

export default {
  title: 'Foundation/Logos',
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#fff' },
        { name: 'gray', value: '#A9B1B7' },
      ],
    },
  },
};

const Template = () => (
  <>
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

    <Anchor storyId="foundation-logos--pnud-logo-blue" />

    <h4>1. PNUD logo - Blue <a href="images/pnud-logo-blue.svg" download>Download</a></h4>

    <Canvas>
      <Story name="PNUD logo - blue" parameters={{ backgrounds: { default: 'white' }, disable: true }}>
        <Logo src={pnud} alt="UNDP Logo" />
      </Story>
    </Canvas>

    <Anchor storyId="foundation-logos--pnud-logo-white" />

    <h4>2. PNUD logo - White <a href="images/pnud-logo-white.svg" download>Download</a></h4>

    <Canvas>
      <Story
        name="PNUD logo - white"
        parameters={{
          backgrounds: { default: 'gray' },
          docs: {
            story: {
              inline: false,
              iframeHeight: '100%',
            },
          },
        }}
      >
        <Logo src={pnudwhite} alt="UNDP Logo" />
      </Story>
    </Canvas>

    <Anchor storyId="foundation-logos--undp-logo-blue" />

    <h4>3. UNDP Logo - Blue</h4>

    <Canvas>
      <Story name="UNDP logo - blue" parameters={{ backgrounds: { default: 'white' } }}>
        <Logo src={logo} alt="UNDP Logo" />
      </Story>
    </Canvas>

    <Anchor storyId="foundation-logos--undp-logo-white" />

    <h4>4. UNDP Logo - White</h4>

    <Canvas>
      <Story
        name="UNDP logo - white"
        parameters={{
          backgrounds: { default: 'gray' },
          docs: {
            story: {
              inline: false,
              iframeHeight: '100%',
            },
          },
        }}
      >
        <Logo src={logowhite} alt="UNDP Logo" />
      </Story>
    </Canvas>

    <h3>Interactions</h3>
    <p>By clicking on the logo, the website is redirected to the homepage.</p>
  </>
);

export const LogosStory = () => <Template />;
LogosStory.parameters = {
  docs: {
    source: {
      code: `
import { Meta, Story, Canvas, Anchor } from "@storybook/addon-docs";
import { Logo } from "./Logo";

import logo from "../../assets/images/undp-logo-blue.svg";
import logowhite from "../../assets/images/undp-logo-white.svg";
import pnud from "../../assets/images/pnud-logo-blue.svg";
import pnudwhite from "../../assets/images/pnud-logo-white.svg";

<Meta
  title="Foundation/Logos"
  parameters={{
    backgrounds: {
      default: "white",
      values: [
        { name: "white", value: "#fff" },
        { name: "gray", value: "#A9B1B7" },
      ],
    },
  }}
/>

# UNDP Logos

The UNDP logo is a keystone element of the identity and is used to represent the entire organization.

### Overview

The UNDP logo is the combination, in one fixed-size relationship, of the United Nations emblem and the letters “UNDP/PNUD”.
The UNDP logo is the keystone element of the identity program and should be used to represent the entire organization.

### When to use:

- To promote business.
- To create an identity for the organization.

### Formatting

#### Default

There are only two versions of the UNDP logo: UNDP (English) and PNUD (French/Spanish). Within the design system, the logo is used in the header and footer components.
The logo is available in blue or white.

### Content

A well-established and consistently presented identity is a very valuable asset.
To protect and strengthen the trademark status of the logo, the approved versions must not be altered, modified, changed, or added to in any way.

### Behaviors

#### States

The UNDP and PNUD logos are available in blue or white and used as per the page background.

The following behavior modifiers are available:

<Anchor storyId="foundation-logos--pnud-logo-blue"></Anchor>

1. PNUD logo - Blue [Download](images/pnud-logo-blue.svg)

This is the default PNUD logo and is used primarily in the header of every page as well as country sites.

<Canvas>
  <Story
    name="PNUD logo - blue"
    parameters={{ backgrounds: { default: "white" }, disable: true }}
  >
    <Logo src={pnud} alt={"UNDP Logo"}></Logo>
  </Story>
</Canvas>

<Anchor storyId="foundation-logos--pnud-logo-white"></Anchor>

2. PNUD logo - White [Download](images/pnud-logo-white.svg)

The PNUD white logo is primarily used in the footer of all pages as well as on a dark background.

<Canvas>
  <Story
    name="PNUD logo - white"
    parameters={{
      backgrounds: { default: "gray" },
      docs: {
        story: {
          inline: false,
          iframeHeight: "100%",
        },
      },
    }}
  >
    <Logo src={pnudwhite} alt={"UNDP Logo"}></Logo>
  </Story>
</Canvas>

<Anchor storyId="foundation-logos--undp-logo-blue"></Anchor>

3. UNDP Logo - Blue [Download](images/undp-logo-blue.svg)

This is the default logo and is used primarily in the header of every page as well as country sites.

<Canvas>
  <Story
    name="UNDP logo - blue"
    parameters={{ backgrounds: { default: "white" } }}
  >
    <Logo src={logo} alt={"UNDP Logo"}></Logo>
  </Story>
</Canvas>

<Anchor storyId="foundation-logos--undp-logo-white"></Anchor>

4. UNDP Logo - White [Download](images/undp-logo-white.svg)

The UNDP white logo is primarily used in the footer of all pages as well as on a dark background.

<Canvas>
  <Story
    name="UNDP logo - white"
    parameters={{
      backgrounds: { default: "gray" },
      docs: {
        story: {
          inline: false,
          iframeHeight: "100%",
        },
      },
    }}
  >
    <Logo src={logowhite} alt={"UNDP Logo"}></Logo>
  </Story>
</Canvas>

### Interactions

- By clicking on the logo, the website is redirected to the homepage.

### Changelog

1.0 — Released component
`,
    },
  },
};
