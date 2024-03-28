import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";

export const POST = async (_, { params }) => {
  const { id } = params;
  try {
    const data = await prisma.post.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json({
      message: "Blog",
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
