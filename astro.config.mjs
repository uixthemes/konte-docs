import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import remarkImageAlign from './src/plugins/remark-image-align.mjs';

const section = (label, directory) => ({ label, items: [{ autogenerate: { directory } }] });

export default defineConfig({
  site: 'https://docs.uix.store',
  base: '/konte',
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [remarkImageAlign],
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
        section('Installation', 'installation'),
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
