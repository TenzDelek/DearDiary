import prisma from "@/lib/db";
import { getAuth } from "@clerk/nextjs/server";

export async function DELETE(req, { params }) {
    const { userId } = getAuth(req);
    if (!userId) {
        return new Response(JSON.stringify({ error: "User not authenticated" }), { status: 401 });
    }
    const { id } = params;
    try {
        const user = await prisma.user.findUnique({
            where: {
                clerkId: userId,
            }, select: {
                id: true
            }
        });
        await prisma.diary.delete({
            where: {
                id: id[0],
                userId: user.id
            },
        });
        return Response.json({ message: "diary deleted successfully" });
    } catch (err) {
        console.log(err);
        return Response.json({ error: "Error deleting diary" });
    }
}

export async function PATCH(req, { params }) {
    const { userId } = getAuth(req);
    if (!userId) {
        return new Response(JSON.stringify({ error: "User not authenticated" }), { status: 401 });
    }
    const { id } = params;
    const body = await req.json();
    const { title, content } = body;
    try {
        const user = await prisma.user.findUnique({
            where: {
                clerkId: userId,
            }, select: {
                id: true
            }
        });
        await prisma.diary.update({
            where: {
                id: id[0],
                userId: user.id
            },
            data: {
                title,
                content
            },
        });
        return Response.json({ message: "diary updated successfully" });
    } catch (err) {
        console.log(err);
        return Response.json({ error: "Error updating diary" });
    }
}