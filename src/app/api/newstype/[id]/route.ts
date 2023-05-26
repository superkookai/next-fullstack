import { findOneNewsType, removeNewsType, updateNewsType } from "@/services/newstype.service";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

//FIND ONE NEWSTYPE
export async function GET(
  request: NextRequest,
  params: { params: { id: string } }
) {
  const data = await findOneNewsType(+params.params.id);
  if (!data) {
    return NextResponse.json({message:"NewsType not found"},{status: 404});
  }
  return NextResponse.json(data);
}

//UPDATE ONE NEWSTYPE
export async function PUT(
    request: NextRequest,
    params: { params: { id: string } }
  ) {
    const data = await findOneNewsType(+params.params.id);
    if (!data) {
      return NextResponse.json({message:"NewsType not found"},{status: 404});
    }

    //UPDATE
    const bodyJson = await request.json() as Prisma.NewsTypeUpdateInput;
    const dataUpdate = await updateNewsType(+params.params.id,bodyJson);
    
    return NextResponse.json(dataUpdate);
  }

  //DELETE ONE NEWSTYPE
  export async function DELETE(
    request: NextRequest,
    params: { params: { id: string } }
  ) {
    const data = await findOneNewsType(+params.params.id);
    if (!data) {
      return NextResponse.json({message:"NewsType not found"},{status: 404});
    }

    //DELETE
    const dataDelete = await removeNewsType(+params.params.id);
    
    return NextResponse.json({
        message: "Deleted success",
        data: dataDelete,
      });
  }
