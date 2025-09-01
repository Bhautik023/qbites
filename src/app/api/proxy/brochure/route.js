// app/api/proxy/brochure/route.js
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET() {
  try {
    // Fetch brochure list
    const listRes = await fetch('https://srv733641.hstgr.cloud:22443/view-brochures/', {
      cache: 'no-store',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    if (!listRes.ok) {
      return NextResponse.json({ error: 'Failed to list' }, { status: 502 });
    }

    const json = await listRes.json();
    const items = json?.data ?? [];
    const target = items.find(
      (i) => String(i.title).trim().toLowerCase() === 'company broucher'
    );

    if (!target?.file_url) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    // Fetch the PDF
    const fileRes = await fetch(target.file_url);
    if (!fileRes.ok || !fileRes.body) {
      return NextResponse.json({ error: 'Failed to fetch file' }, { status: 502 });
    }

    // Stream with attachment disposition to force download
    return new NextResponse(fileRes.body, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Company-Brochure.pdf"', // Forces download
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    console.error('Proxy error', err);
    return NextResponse.json({ error: 'Proxy crashed' }, { status: 500 });
  }
}
