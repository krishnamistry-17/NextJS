"use client";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <p className="text-center text-[25px] text-black font-bold">
          About Page
        </p>
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-4 my-4 text-center">
            <h2 className="font-bold text-black text-[18px]">
              This is for Informaion
            </h2>
            <p className="font-medium text-black text-[16px]">
              This is made using NextJS
            </p>
            <p className="font-medium text-black text-[16px]">
              In this Tailwind is used
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
