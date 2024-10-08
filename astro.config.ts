import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
	site: SITE.website,
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		react(),
		sitemap(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
	],
	markdown: {
		remarkPlugins: [
			remarkToc,
			[
				remarkCollapse,
				{
					test: "Table of contents",
				},
			],
		],
		shikiConfig: {
			theme: "one-dark-pro",
			wrap: true,
		},
	},
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
	scopedStyleStrategy: "where",
});
