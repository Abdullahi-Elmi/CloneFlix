import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import ClientComponent from "@/components/ClientComponent";
import HomeClient from "@/components/HomeClient";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth");
  }

  return (
    <>
      <h1 className="text-2xl text-green-500">Netflix Clone</h1>
      <HomeClient />
      <ClientComponent />
    </>
  );
}