import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";
export const PATCH = async (req) => {
  const { id, title, content, image } = await req.json();
  try {
    if (!id) {
      return NextResponse.json({ message: "ID is required" }, 400);
    }
    if (!title && !content && !image) {
      return NextResponse.json(
        { message: "At least one field is required" },
        400
      );
    }
    let updateData = {};
    if (title) updateData.title = title;
    if (content) updateData.content = content;
    if (image) updateData.image = image;

    const blog = await prisma.Post.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json({
      message: "Blog updated successfully",
      data: blog,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, 500);
  }
};
