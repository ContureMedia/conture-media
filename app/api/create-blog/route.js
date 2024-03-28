import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { title, content, image } = await req.json();
  try {
    if (!title || !content || !image) {
      return NextResponse.json({ message: "All fields are required" }, 400);
    }
    const blog = await prisma.Post.create({
      data: {
        title,
        content,
        image,
      },
    });
    return NextResponse.json({
      message: "Blog created successfully",
      data: blog,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, 500);
  }
};
