 // Prisma client import from lib
import prisma from '@/lib/db';
import { useAuth } from '@clerk/nextjs';

export async function POST(req) {
  const { userId } = useAuth();

  if (!userId) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  try {
    const { emailAddresses, firstName, lastName } = await getClerkUser(userId);

    const user = await prisma.user.create({
      data: {
        clerkId: userId,
        name: `${firstName} ${lastName}`,
        email: emailAddresses[0].emailAddress,
      },
    });

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error creating user' }), { status: 500 });
  }
}

// Helper function to get Clerk user data
async function getClerkUser(userId) {
  const clerkApi = require('@clerk/clerk-sdk-node');
  const user = await clerkApi.users.getUser(userId);
  return user;
}
