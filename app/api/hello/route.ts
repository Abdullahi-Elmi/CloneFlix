import { NextRequest, NextResponse } from 'next/server';

// Define the type for the response data
type Data = {
    name: string;
};

export function GET(req: NextRequest) {
    const data: Data = { name: 'Hello, world!' };
    return NextResponse.json(data);
}
