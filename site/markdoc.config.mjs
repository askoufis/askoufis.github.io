import { defineMarkdocConfig, nodes, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  nodes: {
    heading: {
      ...nodes.heading,
      render: component('./src/components/Heading.astro'),
    },
    paragraph: {
      ...nodes.paragraph,
      render: component('./src/components/Text.astro'),
    },
    blockquote: {
      ...nodes.paragraph,
      render: component('./src/components/Blockquote.astro'),
    },
    document: {
      ...nodes.document,
      render: null,
    },
  },
});
