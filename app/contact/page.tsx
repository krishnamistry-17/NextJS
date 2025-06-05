// import ButtonComponent from "./button";
"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <p className="text-center text-[25px] font-bold text-black">
          Contact Detail
        </p>
        <form className="flex justify-center items-center">
          <div className="flex flex-col gap-4 my-4 text-center">
            <input
              type="text"
              placeholder="First Name"
              value={formData.fname}
              onChange={(e) =>
                setFormData({ ...formData, fname: e.target.value })
              }
              className="border border-black p-[10px] max-w-[250px] rounded-sm"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={formData.lname}
              onChange={(e) =>
                setFormData({ ...formData, lname: e.target.value })
              }
              className="border bor
              der-black p-[10px] max-w-[250px] rounded-sm"
            />
            <input
              type="email"
              placeholder="abc@gmail.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="border border-black p-[10px] max-w-[250px] rounded-sm"
            />
            <textarea
              name=""
              placeholder="Enter query
            "
              className="border border-black p-[10px] rounded-sm"
            ></textarea>
            <button
              className="bg-blue-500 hover:bg-blue-700 px-4 py-3 rounded text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

{
  /*This is made client-server component of example using button */
}
// const response = await fetch("https://jsonplaceholder.typicode.com/posts");
// const posts = await response.json();
// console.log(posts);
// console.log("hey is this server or client component?");
// return (
//   <div>
//     <p>Contact Page</p>
//     <ButtonComponent />
//   </div>
// );
