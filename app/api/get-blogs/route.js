import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";

export const GET = async (_) => {
  try {
    const data = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        date: true,
        image: true,
      },
    });
    return NextResponse.json({
      message: "All Blogs",
      data: data,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error",
      error: error,
      status: 500,
    });
  }
};
