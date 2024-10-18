import prisma from "@/lib/db";
import { getAuth } from "@clerk/nextjs/server";

export async function DELETE(req, { params }) {
  const { userId } = getAuth(req);
  if (!userId) {
    return new Response(JSON.stringify({ error: "User not authenticated" }), {
      status: 401,
    });
  }
  const { id } = params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
      select: {
        id: true,
      },
    });
    await prisma.notes.delete({
      where: {
        id: id[0],
        userId: user.id,
      },
    });
    return Response.json({ message: "notes deleted successfully" });
  } catch (err) {
    console.log(err);
    return Response.json({ error: "Error deleting notes" });
  }
}

export async function PATCH(req, { params }) {
  const { userId } = getAuth(req);
  if (!userId) {
    return new Response(JSON.stringify({ error: "User not authenticated" }), {
      status: 401,
    });
  }
  const { id } = params;
  const body = await req.json();
  const { content } = body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
      select: {
        id: true,
      },
    });
    await prisma.notes.update({
      where: {
        id: id[0],
        userId: user.id,
      },
      data: {
        content,
      },
    });
    return Response.json({ message: "notes updated successfully" });
  } catch (err) {
    console.log(err);
    return Response.json({ error: "Error updating notes" });
  }
}
