'use client';
import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/navigation";

const ProfileIcon = () => {
  const handleClick = () => {
    console.log("Profile icon clicked");
    router.push('/');
  };

  const router = useRouter();
  const { data: user } = useCurrentUser();

  return (
    <div onClick={handleClick}>
      <div className="group flex-row w-44 mx-auto">
        
        <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
          <img src="/images/profile_icon.png" alt="A smiling face for a profile icon" />
        </div>

        <div className="text-2xl text-gray-400 mt-4 text-center group-hover:text-white">
          {user?.name}
        </div>
      </div>
    </div>
  );
};

export default ProfileIcon;