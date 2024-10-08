// /src/app/api/guestbook/entries/route.js

import prisma from '@/lib/db'; // Prisma client instance

export async function GET() {
  try {
    const entries = await prisma.guestbook.findMany({
      orderBy: {
        last_modified: 'desc',
      },
    });
    
    return new Response(JSON.stringify(entries), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch entries' }), {
      status: 500,
    });
  }
}
