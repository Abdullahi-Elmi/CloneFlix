'use client';

import useCurrentUser from "@/hooks/useCurrentUser";

export default function HomeClient() {
    const { data: user } = useCurrentUser();

    return (
        <>
            <p className="text-white">Logged in as: {user?.email}</p>
        </>
    );
}