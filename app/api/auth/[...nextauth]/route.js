import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { randomBytes, pbkdf2Sync } from 'crypto';
import { adapter } from "next/dist/server/web/adapter";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()


export const authOptions = {
   adapter: PrismaAdapter(prisma),
   providers: [
    Credentials({
        name: "credentials",
        credentials: {
           email: {label: "email", type: "email", placeholder: "your email"},
           password: {label: "password", type: "password", placeholder: "your password"}
        },
     async authorize(credentials) { 


    //     const {email, password} = credentials

    // const user = await prisma.user.findUnique({
    //     where: {
    //         email: email
    //     }
    // })

    // if(user) {
    //     throw new Error("User already exists")
    // }

    // const salt = randomBytes(16).toString('hex')
    // const hashedPassword =  pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')

    // const newUser = await prisma.user.create({
    //     data: {
    //         email: email,
    //         password: hashedPassword
    //     }
    // })


    // console.log(newUser)

    }
    })
   ],
   session: {
    strategy: "jwt"
   },
   secret: process.env.NEXTAUTH_SECRET,
   debug: process.env.NODE_ENV === "development"
}


const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}