import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Bienvenido a mi blog - CDSS!",
    description:
      "¡Hola! Soy César David Sánchez Saldaña, Desarrollador ABAP con 11 años de experiencia ayudando a optimizar soluciones SAP.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./posts/*.{md,mdx}")),
    customData: `<language>es-es</language>`,
  });
}

