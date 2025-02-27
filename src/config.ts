import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
	website: "https://kadoppe.com/",
	author: "Kohei Kadowaki (kadoppe)",
	desc: "kadoppe's blog and personal site",
	title: "kadoppe.com",
	ogImage: "ogp.png",
	lightAndDarkMode: false,
	postPerPage: 10,
};

export const LOCALE = ["ja-JP"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
	enable: true,
	svg: true,
	width: 36,
	height: 36,
};

export const SOCIALS: SocialObjects = [
	{
		name: "Twitter",
		href: "https://twitter.com/kadoppe",
		linkTitle: `${SITE.title} on Twitter`,
		active: true,
	},
	{
		name: "Bluesky",
		href: "https://bsky.app/profile/kadoppe.com",
		linkTitle: `${SITE.title} on Bluesky`,
		active: true,
	},
	{
		name: "Sizume",
		href: "https://sizu.me/kadoppe",
		linkTitle: `${SITE.title} on Sizu.me`,
		active: false,
	},
	{
		name: "Mastodon",
		href: "https://mastodon.social/@kadoppe",
		linkTitle: `${SITE.title} on Mastodon`,
		active: false,
	},
	{
		name: "Github",
		href: "https://github.com/kadoppe",
		linkTitle: ` ${SITE.title} on Github`,
		active: true,
	},
	{
		name: "Facebook",
		href: "https://facebook.com/kadoppe",
		linkTitle: `${SITE.title} on Facebook`,
		active: true,
	},
	{
		name: "Instagram",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: `${SITE.title} on Instagram`,
		active: false,
	},
	{
		name: "LinkedIn",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: `${SITE.title} on LinkedIn`,
		active: false,
	},
	{
		name: "Mail",
		href: "mailto:kadoppe@me.com",
		linkTitle: `Send an email to ${SITE.title}`,
		active: true,
	},
	{
		name: "Twitch",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: `${SITE.title} on Twitch`,
		active: false,
	},
	{
		name: "YouTube",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: `${SITE.title} on YouTube`,
		active: false,
	},
	{
		name: "WhatsApp",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: `${SITE.title} on WhatsApp`,
		active: false,
	},
	{
		name: "Snapchat",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: `${SITE.title} on Snapchat`,
		active: false,
	},
	{
		name: "Pinterest",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: `${SITE.title} on Pinterest`,
		active: false,
	},
	{
		name: "TikTok",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: `${SITE.title} on TikTok`,
		active: false,
	},
	{
		name: "CodePen",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: `${SITE.title} on CodePen`,
		active: false,
	},
	{
		name: "Discord",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: `${SITE.title} on Discord`,
		active: false,
	},
	{
		name: "GitLab",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: `${SITE.title} on GitLab`,
		active: false,
	},
	{
		name: "Reddit",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: `${SITE.title} on Reddit`,
		active: false,
	},
	{
		name: "Skype",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: `${SITE.title} on Skype`,
		active: false,
	},
	{
		name: "Steam",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: `${SITE.title} on Steam`,
		active: false,
	},
	{
		name: "Telegram",
		href: "https://github.com/satnaing/astro-paper",
		linkTitle: `${SITE.title} on Telegram`,
		active: false,
	},
];
