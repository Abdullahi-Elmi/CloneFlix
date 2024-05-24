'use client';

import { signOut } from "next-auth/react";

export default function ClientComponent() {
  return (
    <button onClick={() => signOut()} className="h-10 w-full bg-white">
      Logout!
    </button>
  );
}