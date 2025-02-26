"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { LuLock } from "react-icons/lu";
const loginBackground = "/images/loginBackground.png";
const seedListLogo = "/images/SeedlistLogo.png";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
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
      <div className="relative z-10 flex flex-col items-center mb-4">
        <Image
          src={seedListLogo}
          alt="SeedList.ai Logo"
          width={180}
          height={60}
        />
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md px-8 py-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl text-slate-800 font-semibold text-center">
          Sign In
        </h1>
        {/* Email Input */}
        <div className="mt-6">
          <label className="block text-sm font-medium">Email</label>
          <div className="relative flex items-center mt-1">
            <FaRegEnvelope className="absolute left-3 text-slate-800" />
            <Input
              type="email"
              placeholder="Enter email"
              className="pl-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mt-4">
          <label className="block text-sm font-medium">Password</label>
          <div className="relative flex items-center mt-1">
            <LuLock className="absolute left-3 text-slate-800" />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="pl-10 pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 text-slate-800"
            >
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </button>
          </div>
          <a
            href="#"
            className="block mt-1 text-sm text-sky-700 hover:underline text-right"
          >
            Forgot Password?
          </a>
        </div>

        <Button className="w-full mt-6" variant="primary" size="lg">
          Sign In
        </Button>

        <p className="mt-4 text-center text-sm text-slate-700">
          Don’t have an account?{" "}
          <Link href="/signup" className="underline">
            Sign up here
          </Link>
        </p>

        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <Button className="w-full" variant="outline" size="lg">
          <FcGoogle className="text-xl" />
          Sign In with Google
        </Button>

        <p className="mt-4 text-xs text-slate-700">
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
  );
}
