import { NextRequest, NextResponse } from "next/server";
import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";
import { without } from "lodash";

export async function POST(req: NextRequest) {
    try {
        const { currentUser } = await serverAuth(req);

        const { movieId } = await req.json();
        
        const existingMovie = await prismadb.movie.findUnique({
            where: {
                id: movieId,
            }
        })

        if (!existingMovie) {
            return new Error('Invalid movie ID');
        }

        const updatedUser = await prismadb.user.update({
            where: {
                email: currentUser.email || '',
            },
            data: {
                favoriteIds: {
                    push: movieId,
                }
            }
        })
        return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse(null, { status: 400 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { currentUser } = await serverAuth(req);
        const { movieId } = await req.json();

        const existingMovie = await prismadb.movie.findUnique({
            where: {
                id: movieId,
            }
        })

        if (!existingMovie) {
            return new Error('Invalid movie ID');
        }

        const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);

        const updatedUser = await prismadb.user.update({
            where: {
                email: currentUser.email || '',
            },
            data: {
                favoriteIds: updatedFavoriteIds,
            }
        })

        return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse(null, { status: 400 });
    }   
}

// HANDLE 405 ERRORS IF NOT `POST` OR `DELETE`
// Handle unsupported methods
export async function middleware(req: NextRequest) {
    const method = req.method?.toUpperCase();

    if (method !== 'POST' && method !== 'DELETE') {
        return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
    }
}

export const config = {
    matcher: '/api/favorite', // Apply middleware to this route
};