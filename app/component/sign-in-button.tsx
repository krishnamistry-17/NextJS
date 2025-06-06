"use client";

import { login } from "@/lib/actions/auth";

export default function SignedInBtn() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <button
          className="border border-black py-2 px-3 rounded-md text-center
              "
          onClick={() => login()}
        >
          SignIn with GitHub
        </button>
      </div>
    </div>
  );
}
