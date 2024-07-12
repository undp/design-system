import { Meta } from "@storybook/addon-docs";

const meta = {
  title: "Foundation/Accessibility",
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
};

export default {
  title: "Documentation/Accessibility",
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>Accessibility</h1>
          <p>
            Accessible design not only helps users with disabilities; it also
            provides a better user experience for everyone. All components
            follow the WCAG 2.1 AA standards.
          </p>
          <p>
            All patterns are perceivable, operable, and understandable to
            users, even when using a screen reader or other assistive
            technology. However, how you use these elements also affects the
            accessibility of a product.
          </p>
          <p>
            Please find additional information about accessibility in the links
            below:
          </p>
          <p>
            Visit W3C WCAG for more detail{" "}
            <a href="https://www.w3.org/TR/WCAG21/" target="_blank">
              https://www.w3.org/TR/WCAG21/
            </a>
            .
          </p>
        </>
      ),
    },
  },
};

