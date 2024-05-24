import { NextRequest } from "next/server";
import { getServerSession } from "next-auth/next";
import prismadb from "@/lib/prismadb";
import { authOptions } from '@/lib/auth';

const serverAuth = async (req: NextRequest) => {
    const session = await getServerSession({ req, ...authOptions });

    if (!session?.user?.email) {
        throw new Error("You are not signed in");
    }

    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user?.email,
            // email: session.user.email,
        }
    });

    if (!currentUser) {
        throw new Error("You are not signed in");
    }

    return { currentUser }
};

export default serverAuth;