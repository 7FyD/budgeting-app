"use client";

import { useRouter } from "next/navigation";
import CenterDropdown from "./CenterDropdown";

const AccountMenu = () => {
  const router = useRouter();

  return (
    <div>
      <div className="hidden md:flex flex-row gap-4 justify-center">
        <p className="cursor-pointer" onClick={() => router.push("/login")}>
          Login
        </p>
        <p className="cursor-pointer" onClick={() => router.push("/register")}>
          Join for free
        </p>
      </div>
      <div className="block md:hidden w-auto md:w-auto ">
        <CenterDropdown label="Account" />
      </div>
    </div>
  );
};

export default AccountMenu;
