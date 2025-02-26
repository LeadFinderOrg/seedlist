"use client";

import Link from "next/link";

export const SignupForm = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-white">
        <div className="w-full px-6 md:px-16 mt-8">
          <section className="w-full md:w-[560px]">
            <div className="mt-4 text-center mb-6">
              <span className="text-gray">Already registered? </span>{" "}
              <Link href="/login" className="text-blue-500">
                Login
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
