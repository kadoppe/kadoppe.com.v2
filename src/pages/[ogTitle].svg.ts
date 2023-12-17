import { getCollection } from "astro:content";
import generateOgImageForPost from "@utils/generateOgImages";
import type { APIRoute } from "astro";

export const get: APIRoute = async ({ params }) => ({
  body: await generateOgImageForPost(params.ogTitle),
});

const postImportResult = await getCollection("blog", ({ data }) => !data.draft);
const posts = Object.values(postImportResult);

export function getStaticPaths() {
  return posts
    .filter(({ data }) => !data.ogImage)
    .map(({ data }) => ({
      params: { ogTitle: data.title },
    }));
}
