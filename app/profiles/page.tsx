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

import ProfileIcon from "@/components/ProfileIcon";

const Profiles = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth");
  }

  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
      <h1 className="text-3xl md:text-6xl text-white text-center">Who is watching?</h1>
      <div className="flex items-center justify-center gap-8 mt-10">
        {/* <div onClick={() => {}}>
          
          <div className="group flex-row w-44 mx-auto">
            <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
              <img src="/images/profile_icon.png" alt="A smiling face for a profile icon"/>
            </div>
          </div>

        </div> */}
        <ProfileIcon />
      </div>
      </div>
    </div>
  );
}

export default Profiles;