import prisma from "@/lib/prisma";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: "/login",
    },
    session:{
        strategy: "jwt",
        maxAge: 1 * 24 * 60 * 60, // 1 day
    },
    // useSecureCookies: true, // use for Production and use https
    providers: [
        CredentialsProvider({
            credentials: {},
            async authorize(credentials, req) {
                const {email,password} = credentials as {email: string, password: string};

                const user = await prisma.user.findUnique({where:{email: email}});
                if(!user) {
                    throw new Error('User not found');
                }

                const isValid = await compare(password, user.password);
                if(!isValid) {
                    throw new Error("Password incorrected!");
                }

                return {
                    id: user.id.toString(),
                    name: user.fullname,
                    email: user.email
                }
            }
          })
    ]
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }