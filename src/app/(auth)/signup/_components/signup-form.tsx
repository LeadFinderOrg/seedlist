"use client";

import Link from "next/link";

export const SignupForm = () => {
  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
        <div className="mt-4 text-center mb-6">
          <span className="text-gray">Already registered? </span>{" "}
          <Link href="/login" className="text-blue-500">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};
