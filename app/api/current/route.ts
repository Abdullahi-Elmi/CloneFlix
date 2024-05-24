import { NextRequest, NextResponse } from "next/server";

import serverAuth from "@/lib/serverAuth";

export async function GET(req: NextRequest) {
    try {
        const { currentUser } = await serverAuth(req);
        return NextResponse.json(currentUser);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to fetch user' }, { status: 401 });
    }
}