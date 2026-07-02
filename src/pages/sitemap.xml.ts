import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const siteUrl = 'https://windroseguides.com';
const categories = ['beginner', 'survival', 'ships', 'multiplayer', 'settings', 'resources'];

function urlEntry(path: string, lastmod?: string, priority = '0.7') {
  const normalizedPath = path === '/' ? '' : path;

  return [
    '  <url>',
    `    <loc>${siteUrl}${normalizedPath}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : '',
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].filter(Boolean).join('\n');
}

export const GET: APIRoute = async () => {
  const guides = await getCollection('guides');
  const guideUrls = guides.map((guide) => {
    const lastmod = guide.data.updatedDate ?? guide.data.publishDate;
    return urlEntry(`/guides/${guide.slug}`, lastmod, '0.8');
  });

  const staticUrls = [
    urlEntry('/', undefined, '1.0'),
    urlEntry('/guides', undefined, '0.9'),
    urlEntry('/about', undefined, '0.4'),
    urlEntry('/faq', undefined, '0.6'),
    ...categories.map((category) => urlEntry(`/category/${category}`, undefined, '0.7')),
  ];

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...staticUrls,
    ...guideUrls,
    '</urlset>',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
