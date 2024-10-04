import { getAuth, clerkClient } from '@clerk/nextjs/server'; // Import clerkClient as well
import prisma from '@/lib/db'; // Ensure this points to your Prisma setup
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { userId, sessionId } = getAuth(req); // Pass the request object to getAuth()
    
    if (!sessionId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await clerkClient.users.getUser(userId);
    const { entry } = await req.json(); // Get the entry from the client request

    const email = user?.emailAddresses?.[0]?.emailAddress || "";
    const created_by = `${user?.firstName || ""} ${user?.lastName || ""}`.trim() || user?.username || "";

    const body = entry.slice(0, 500);

    // Insert into your database
    await prisma.guestbook.create({
      data: {
        email,
        created_by,
        body,
        last_modified: new Date(),
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving guestbook entry:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
