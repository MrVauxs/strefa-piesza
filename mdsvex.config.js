import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const config = defineConfig({
	extensions: ['.md', '.svx'],

	smartypants: {
		dashes: 'oldschool',
		ellipses: true
	},

	layout: {
		_: 'src/lib/Components/Layout.svelte'
	},

	remarkPlugins: [],
	rehypePlugins: [
		rehypeExternalLinks, // Adds 'target' and 'rel' to external links
		rehypeSlug, // Adds 'id' attributes to Headings (h1, h2, etc)
		[
			rehypeAutolinkHeadings,
			{
				// Adds hyperlinks to the headings, requires rehypeSlug
				behavior: 'prepend',
				properties: { className: ['heading-link'], title: 'Permalink', ariaHidden: 'true' },
				content: {
					type: 'element',
					tagName: 'span',
					properties: {},
					children: [{ type: 'text', value: '#' }]
				}
			}
		]
	]
});

export default config;
