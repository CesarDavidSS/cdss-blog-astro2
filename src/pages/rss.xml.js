import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Welcome to the Frieren Land!",
    description:
      "Join me on this exciting adventure as we explore the magical landscape together",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./posts/*.{md,mdx}")),
    customData: `<language>en-us</language>`,
  });
}

