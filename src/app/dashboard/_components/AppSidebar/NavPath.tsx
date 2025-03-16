import Image from "next/image";


import AvatarDropdown from "./AvatarDropdown";
import NoticeDropdown from "./NoticeDropdown";
import NotificationDropdown from "./NotificationDropdown";

const line = "/images/Line.png";

export default function NavigationPath() {
  return (
    <nav className="flex items-center justify-between mx-6 py-2 border-b border-gray-300">
      {/* Left Side */}
      <h2 className="md:text-lg text-base font-semibold">Email Accounts</h2>


      {/* Right Side */}
      <div className="flex items-center gap-6">
        <NoticeDropdown />

        <NotificationDropdown />

        <Image src={line} alt="Background" width={2} height={4} />

        {/* User Avatar */}
        <AvatarDropdown />
      </div>
    </nav>
  );
}
