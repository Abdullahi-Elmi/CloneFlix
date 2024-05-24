// const Profiles = () => {
//     return (
//         <div>
//             <p className="text-white text-4xl">Profiles</p>
//         </div>
//     );
// }

// export default Profiles;
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

const Profiles = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth");
  }

  return (
    <div>
      <p className="text-white text-4xl">Profiles</p>
    </div>
  );
}

export default Profiles;