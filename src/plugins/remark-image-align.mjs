import { visit } from 'unist-util-visit';

/**
 * Supports the legacy Docsify image alignment syntax, e.g.
 * `![Alt](../../../assets/images/foo.png#alignright)`.
 *
 * Strips the `#align*` hash (so Astro can resolve and optimize the image)
 * and adds a matching `align-*` class that `custom.css` styles.
 */
const ALIGN = /#(alignright|alignrightfull|alignleft|alignleft50)$/;

export default function remarkImageAlign() {
  return (tree) => {
    visit(tree, 'image', (node) => {
      const match = node.url.match(ALIGN);
      if (!match) return;
      node.url = node.url.replace(ALIGN, '');
      node.data ??= {};
      node.data.hProperties ??= {};
      node.data.hProperties.className = [`align-${match[1].replace('align', '')}`];
    });
  };
}
