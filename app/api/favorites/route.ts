import { NextRequest, NextResponse } from "next/server";
import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";

export async function GET(req: NextRequest) {
    try {
        const { currentUser } = await serverAuth(req);
        const favoriteMovies = await prismadb.movie.findMany({
            where: {
                id: {
                    in: currentUser?.favoriteIds,
                }
            }
        })

        return NextResponse.json(favoriteMovies, { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse(null, { status: 400 });
    }
} 