import AstroRSS from "@astrojs/rss";
import { getCollection } from "astro:content";
import globals from "../../src/model/globals";

export async function GET() {
  const posts = await getCollection("posts");
  return AstroRSS({
    title: "antoine fricker devlog",
    description: "miscellaneous notes and thoughts on development",
    site: globals.site,
    customData: `<language>en-us</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `${globals.site}/blog/${post.slug}`,
      author: globals.author,
    })),
  });
}
