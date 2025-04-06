import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark text-black text-center px-4">
      <h1 className="text-6xl font-bold mb-4 text-red-500">404</h1>
      <p className="text-xl mb-8 ">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/dashboard"
        className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:underline"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
