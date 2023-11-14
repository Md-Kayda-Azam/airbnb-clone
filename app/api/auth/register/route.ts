import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, password } = body;

  const hashPassword = await bcrypt.hashSync(password, 12);

  const user = await prisma?.user.create({
    data: { name, email, hashPassword },
  });

  return NextResponse.json(user);
}
