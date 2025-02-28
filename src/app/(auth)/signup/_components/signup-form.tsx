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
import { LuLock, LuUser } from "react-icons/lu";
import { z } from "zod";

const loginBackground = "/images/loginBackground.png";
const seedListLogo = "/images/SeedlistLogo.png";

const signupSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupFormInputs = z.infer<typeof signupSchema>;

export const SignupForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
  });

  // Handle form submission
  const onSubmit = (data: SignupFormInputs) => {
    console.log("Signup Data:", data);
    // Implement your signup logic here.
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
      <div className="relative z-10 flex flex-col items-center mb-2">
        <Image
          src={seedListLogo}
          alt="SeedList.ai Logo"
          width={180}
          height={60}
        />
      </div>

      {/* Signup Card */}
      <div className="relative z-10 w-full max-w-md px-8 py-5 bg-white rounded-lg shadow-lg mb-3">
        <h1 className="text-2xl font-semibold text-center text-slate-800">
          Sign Up
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("firstName")}
                />
              </div>
              {errors.firstName && (
                <p className="mt-1 text-xs text-red-600">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <div className="relative flex items-center mt-1">
                <LuUser className="absolute left-3 text-slate-800" />
                <Input
                  type="text"
                  placeholder="Enter last name"
                  className="pl-10"
                  {...register("lastName")}
                />
              </div>
              {errors.lastName && (
                <p className="mt-1 text-xs text-red-600">
                  {errors.lastName.message}
                </p>
              )}
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
          <div className="mt-3">
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
                {...register("confirmPassword")}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 text-slate-800"
              >
                {showConfirmPassword ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-600">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button
            className="w-full mt-6"
            variant="primary"
            size="lg"
            type="submit"
          >
            Sign Up
          </Button>
        </form>

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
  );
};
