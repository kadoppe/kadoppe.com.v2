import type { CollectionEntry } from "astro:content";
import { Resvg } from "@resvg/resvg-js";
import satori, { type SatoriOptions } from "satori";
import postOgImage from "./og-templates/post";
import siteOgImage from "./og-templates/site";

const fetchFonts = async () => {
	const headers = {
		"User-Agent":
			"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
	};
	const baseFontUrl = "https://fonts.googleapis.com/css2?family=Noto+Sans+JP";
	const regexp = /src: url\((.+)\) format\('(opentype|truetype)'\)/;

	const fetchFontData = async (weight: number) => {
		const regularFontUrl = `${baseFontUrl}:wght@${weight}`;
		const css = await (await fetch(regularFontUrl, { headers })).text();
		const resource = css.match(regexp);

		if (!resource) return new ArrayBuffer(0);
		return await fetch(resource[1]).then((res) => res.arrayBuffer());
	};

	const fontRegular = await fetchFontData(400);
	const fontBold = await fetchFontData(700);

	return { fontRegular, fontBold };
};

const { fontRegular, fontBold } = await fetchFonts();

const options: SatoriOptions = {
	width: 1200,
	height: 630,
	embedFont: true,
	fonts: [
		{
			name: "Noto Sans JP",
			data: fontBold,
			weight: 600,
			style: "normal",
		},
	],
};

if (fontRegular) {
	options.fonts.push({
		name: "Noto Sans JP",
		data: fontRegular,
		weight: 400,
		style: "normal",
	});
}

if (fontBold) {
	options.fonts.push({
		name: "Noto Sans JP",
		data: fontBold,
		weight: 700,
		style: "normal",
	});
}

function svgBufferToPngBuffer(svg: string) {
	const resvg = new Resvg(svg);
	const pngData = resvg.render();
	return pngData.asPng();
}

export async function generateOgImageForPost(post: CollectionEntry<"blog">) {
	const svg = await satori(postOgImage(post), options);
	return svgBufferToPngBuffer(svg);
}

export async function generateOgImageForSite() {
	const svg = await satori(siteOgImage(), options);
	return svgBufferToPngBuffer(svg);
}
