import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';

const section = (label, directory) => ({ label, items: [{ autogenerate: { directory } }] });

export default defineConfig({
  site: 'https://docs.uix.store',
  base: '/konte',
  trailingSlash: 'always',
  // Old "Getting Started" pages merged into "Before You Install".
  redirects: {
    '/getting-started/overview/': '/konte/getting-started/',
    '/getting-started/installation/': '/konte/getting-started/install-theme/',
    '/getting-started/wordpress-information/': '/konte/getting-started/before-you-install/',
    '/getting-started/requirements/': '/konte/getting-started/before-you-install/',
    '/getting-started/file-included/': '/konte/getting-started/before-you-install/',
  },
  integrations: [
    starlight({
      title: 'Konte Docs',
      description: 'User documentation for the Konte WordPress theme by UIX Themes.',
      customCss: ['./src/styles/custom.css'],
      lastUpdated: true,
      plugins: [starlightImageZoom()],
      social: [{ icon: 'information', label: 'Get Support', href: 'https://uix.ticksy.com/' }],
      sidebar: [
        section('Getting Started', 'getting-started'),
        section('Theme Options', 'theme-options'),
        section('Elementor', 'elementor'),
        section('WPBakery Page Builder', 'wpb-page-builder'),
        section('Header', 'header'),
        section('Sliders', 'slider'),
        section('Pages', 'page'),
        section('Shop', 'shop'),
        section('Portfolio', 'portfolio'),
        section('Footer', 'footer'),
        section('Translation', 'translate'),
        section('Customize Theme', 'customize'),
        section('Other', 'misc'),
        section('Updates', 'update'),
      ],
    }),
  ],
});
