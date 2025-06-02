import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="text-center pt-[20px]">
      <h1 className=" text-red-700 text-3xl">404 - Page Not Found</h1>
      <p className="pt-[8px]">
        Oops! The Page you are looking for does not exist!
      </p>
      <Link href={"/"} className="text-blue-700 underline">
        Go to Home Page
      </Link>
    </div>
  );
}
