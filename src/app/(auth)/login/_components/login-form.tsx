"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { LuLock } from "react-icons/lu";
import { z } from "zod";

const loginBackground = "/images/loginBackground.png";
const seedListLogo = "/images/SeedlistLogo.png";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  // Handle form submission
  const onSubmit = (data: LoginFormInputs) => {
    console.log("Form Data:", data);
    // You can handle your login logic here.
  };

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

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <div className="mt-6">
            <label className="block text-sm font-medium">Email</label>
            <div className="relative flex items-center mt-1">
              <FaRegEnvelope className="absolute left-3 text-slate-800" />
              <Input
                type="email"
                placeholder="Enter email"
                className="pl-10"
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
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
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-slate-800"
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
            <a
              href="#"
              className="block mt-1 text-sm text-sky-700 hover:underline text-right"
            >
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <Button
            className="w-full mt-6"
            variant="primary"
            size="lg"
            type="submit"
          >
            Sign In
          </Button>
        </form>

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
