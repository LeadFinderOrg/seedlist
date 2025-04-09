"use client";

import GoogleIcon from "@/common/GoogleIcon";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginBackground = "/images/loginBackground.png";
const seedListLogo = "/images/SeedlistLogo.png";

interface SignupFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const signupSchema = z
  .object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const SignupForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Handle form submission
  const onSubmit = (values: SignupFormInputs) => {
    console.log("Signup Data:", values);
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
        <Image src={seedListLogo} alt="SeedList.ai Logo" width={180} height={60} />
      </div>

      {/* Signup Card */}
      <div className="relative z-10 w-full max-w-md px-8 py-5 bg-white rounded-lg shadow-lg mb-3">
        <h1 className="text-2xl font-semibold text-center text-slate-800">Sign Up</h1>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 mt-4">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <div className="relative flex items-center !mt-1">
                      <User size={18} className="absolute left-3 text-slate-800" />
                      <FormControl>
                        <Input type="text" placeholder="Enter first name" className="pl-10" {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <div className="relative flex items-center !mt-1">
                      <User size={18} className="absolute left-3 text-slate-800" />
                      <FormControl>
                        <Input type="text" placeholder="Enter last name" className="pl-10" {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <div className="relative flex items-center !mt-1">
                    <Mail size={18} className="absolute left-3 text-slate-800" />
                    <FormControl>
                      <Input type="email" placeholder="Enter email" className="pl-10" {...field} />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <div className="relative flex items-center !mt-1">
                    <Lock size={18} className="absolute left-3 text-slate-800" />
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        className="pl-10 pr-10"
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 text-slate-800"
                    >
                      {showPassword ? (
                        <Eye size={20} className="text-slate-800"/>
                      )  : (
                        <EyeOff size={20} className="text-slate-800"/>
                      )}
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password Field */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <div className="relative flex items-center !mt-1 !mb-2">
                    <Lock size={18} className="absolute left-3 text-slate-800" />
                    <FormControl>
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Re-enter password"
                        className="pl-10 pr-10"
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 text-slate-800"
                    >
                      {showConfirmPassword ? (
                        <Eye size={20} className="text-slate-800"/>
                      ) : (
                        <EyeOff size={20} className="text-slate-800"/>
                      )}
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full bg-[#2184C6] hover:bg-[#2184C6]/90" size="lg" type="submit">
              Sign Up
            </Button>
          </form>
        </Form>

        <p className="mt-4 text-center text-sm text-slate-700">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Sign in here
          </Link>
        </p>

        <div className="flex items-center my-3">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-slate-700 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <Button className="w-full" variant="outline" size="lg">
          <GoogleIcon />
          Sign Up with Google
        </Button>

        <p className="mt-4 text-xs text-slate-700">
          Creating an account indicates your agreement with Seedlist’s{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>
          &amp;
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};
