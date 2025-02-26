import Link from "next/link";

export const LoginForm = () => {
  return (
    <>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-full md:w-96 p-4">
          <h1 className="text-3xl font-bold text-center mb-8">Login</h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm
                "
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm
                "
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
            <div className="text-center">
              <span className="text-gray">Don't have an account? </span>{" "}
              <Link href="/signup" className="text-blue-500">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
