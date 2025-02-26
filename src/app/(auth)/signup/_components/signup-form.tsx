"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { LuLock, LuUser } from "react-icons/lu";
const loginBackground = "/images/loginBackground.png";
const seedListLogo = "/images/SeedlistLogo.png";

export const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        <div className="relative z-10 flex flex-col items-center mb-2">
          <Image
            src={seedListLogo}
            alt="SeedList.ai Logo"
            width={180}
            height={60}
          />
        </div>

        {/* Login Card */}
        <div className="relative z-10 w-full max-w-md px-8 py-5 bg-white rounded-lg shadow-lg mb-3">
          <h1 className="text-2xl font-semibold text-center text-slate-800">
            Sign Up
          </h1>

          {/* Name Inputs */}
          <div className="mt-3 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">First Name</label>
              <div className="relative flex items-center mt-1">
                <LuUser className="absolute left-3 text-slate-800" />
                <Input
                  type="text"
                  placeholder="Enter first name"
                  className="pl-10"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <div className="relative flex items-center mt-1">
                <LuUser className="absolute left-3 text-slate-800" />
                <Input
                  type="text"
                  placeholder="Enter last name"
                  className="pl-10"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Email Input */}
          <div className="mt-3">
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
          <div className="mt-3">
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
          </div>

          {/* Confirm Password Input */}
          <div className="mt-3">
            <label className="block text-sm font-medium">
              Confirm Password
            </label>
            <div className="relative flex items-center mt-1">
              <LuLock className="absolute left-3 text-slate-800" />
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter password"
                className="pl-10 pr-10"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 text-slate-800"
              >
                {showConfirmPassword ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>
          </div>

          <Button className="w-full mt-6" variant="primary" size="lg">
            Sign Up
          </Button>

          <p className="mt-4 text-center text-sm text-slate-700">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Sign in here
            </Link>
          </p>

          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-slate-700 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <Button className="w-full" variant="outline" size="lg">
            <FcGoogle className="text-xl" />
            Sign Up with Google
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
    </>
  );
};
