// app/api/sitemap/route.js
import { NextResponse } from 'next/server';

const EXTERNAL_DATA_URL = 'https://hanimetv.vercel.app';

async function fetchAllIds() {
  let allIds = [];

  for (let page = 1; page <= 135; page++) {
    const response = await fetch(`https://demonking-7hti.onrender.com/api/hen-all?page=${page}`);
    const data = await response.json();
    
    // Assuming the response contains an array of items with IDs
    const ids = data.results.data.all.map(item => item.id);
    allIds = allIds.concat(ids);
  }

  return allIds;
}

export async function GET() {
  try {
    const allIds = await fetchAllIds();

    const dynamicUrls = allIds.map(id => `
      <url>
        <loc>${EXTERNAL_DATA_URL}${id}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    `).join("");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${dynamicUrls}
      </urlset>
    `;

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'text/xml',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}
