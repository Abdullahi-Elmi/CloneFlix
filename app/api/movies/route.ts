import { NextRequest, NextResponse } from "next/server";
import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";

export async function GET(req: NextRequest) {
    try {
        await serverAuth(req);
         
        const movies = await prismadb.movie.findMany();
        return NextResponse.json(movies, { status: 200 });
    } catch (error) {
        console.error('Error fetching movies:', error);
        return new NextResponse(null, { status: 400 });
    }
}