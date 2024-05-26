import { NextRequest, NextResponse } from "next/server";
import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";

export async function GET(req: NextRequest, { params }: { params: { movieId: string } }) {
    try {
        await serverAuth(req);
        
        const { movieId } = params;
        
        if (!movieId || typeof movieId !== 'string') {
            // throw new Error('Invalid movie ID');
            return NextResponse.json({ error: 'Invalid movie ID' }, { status: 400 });
        }

        const movie = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        });

        if(!movie) {
            // throw new Error('Invalid movie ID');
            return NextResponse.json({ error: 'Invalid movie ID' }, { status: 400 });
        }

        return NextResponse.json(movie, { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse(null, { status: 400 });
    }
}