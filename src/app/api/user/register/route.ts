import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import {hash,genSalt} from "bcrypt";

export async function POST(request: NextRequest) {
    const body = await request.json() as Prisma.UserCreateInput;
    
    //1. Check email already exists
    const userExist = await prisma.user.findUnique({where: {email: body.email}});
    if (userExist !== null){
        return NextResponse.json({message: "Email alerady exist!"},{status:400});
    }
    //2. Encrypt password
    const salt = await genSalt(10);
    const hashPassword = await hash(body.password, salt);

    //3. Insert to Users Table
    await prisma.user.create({
        data: {
            fullname: body.fullname,
            email: body.email,
            password: hashPassword,
        }
    });

    return NextResponse.json({message: "Register successfully"},{status:201});
}