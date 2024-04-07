import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";
export const POST = async (req) => {
  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  try {
    const deletePost = await prisma.post.delete({
      where: {
        id: id,
      },
    });
    if (!deletePost) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    } else {
      return NextResponse.json({ message: "Post deleted" }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
