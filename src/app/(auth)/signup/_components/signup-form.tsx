"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
const loginBackground = "/images/loginBackground.png";
const seedListLogo = "/images/SeedlistLogo.png";

export const SignupForm = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#eaf2ff]">
        {/* Background Image */}
        <Image
          src={loginBackground}
          alt="Background"
          layout="fill"
          objectFit="fill"
          className="absolute inset-0 z-0"
        />

        {/* Logo */}
        <div className="relative z-10 flex flex-col items-center mb-6">
          <Image
            src={seedListLogo}
            alt="SeedList.ai Logo"
            width={180}
            height={60}
          />
        </div>

        {/* Login Card */}
        <div className="relative z-10 w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-center">Sign Up</h1>

          <Button className="w-full mt-6" variant="primary" size="lg">
            Sign Up
          </Button>

          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Sign in here
            </Link>
          </p>

          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <Button className="w-full" variant="outline" size="lg">
            <FcGoogle className="text-xl" />
            Sign Up with Google
          </Button>
          <p className="mt-4 text-xs text-gray-500">
            Creating an account indicates your agreement with Seedlist’s
            <a href="#" className="underline">
              {" "}
              Terms of Service{" "}
            </a>
            &
            <a href="#" className="underline">
              {" "}
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};
