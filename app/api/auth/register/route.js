// import prisma from '@/lib/prisma';
import { PrismaClient } from '@prisma/client';
import { randomBytes, pbkdf2Sync } from 'crypto';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient()





export async function POST(request) {
    const body = await request.json()
    const {name, email, password } = body
    console.log(body)


   return NextResponse.json({name, email, password})

    


}