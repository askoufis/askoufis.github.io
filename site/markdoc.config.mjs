import { defineMarkdocConfig, nodes, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  nodes: {
    // Markdoc wraps documents in an `article` element by default
    document: {
      ...nodes.document,
      render: null,
    },
  },
});
