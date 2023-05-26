import { createNewsType, findAllNewsType } from "@/services/newstype.service";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

//GET ALL NEWSTYPE
export async function GET() {
  // return NextResponse.json({message: "Hello world!"});
  const data = await findAllNewsType();
  return NextResponse.json({ data: data });
}

//CREATE ONE NEWSTYPE
export async function POST(request: NextRequest) {
  const bodyJson = (await request.json()) as Prisma.NewsTypeCreateInput;
  const data = await createNewsType(bodyJson);

  return NextResponse.json(
    {
      message: "Created success",
      data: data,
    },
    { status: 201 }
  );
}
