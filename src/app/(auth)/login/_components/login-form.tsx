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
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginBackground = "/images/loginBackground.png";
const seedListLogo = "/images/SeedlistLogo.png";

interface LoginFormInputs {
  email: string;
  password: string;
}

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle form submission
  const onSubmit = (values: LoginFormInputs) => {
    console.log("Form Data:", values);
    // You can handle your login logic here.
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-blue-50">
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                      <Input
                        type="email"
                        placeholder="Enter email"
                        className="pl-10"
                        {...field}
                      />
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
                        <Eye size={20} className="text-slate-800" />
                      ) : (
                        <EyeOff size={20} className="text-slate-800" />
                      )}
                    </button>
                  </div>
                  <FormMessage />
                  <a
                    href="#"
                    className="block mt-1 text-sm text-sky-700 hover:underline text-right"
                  >
                    Forgot Password?
                  </a>
                </FormItem>
              )}
            />

            {/* Sign In Button */}
            <Button
              className="w-full mt-6 bg-customBlue hover:bg-customBlue/90"
              size="lg"
              type="submit"
            >
              Sign In
            </Button>
          </form>
        </Form>

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
          <GoogleIcon />
          Sign In with Google
        </Button>

        <p className="mt-4 text-xs text-slate-700">
          Creating an account indicates your agreement with Seedlist’s
          <a href="#" className="underline">
            {" "}
            Terms of Service{" "}
          </a>
          &amp;
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
