"use client";

import { useActionState } from "react";
import createPost from "../action";

const initialState = {
  message: "",
};

export default function Form() {
  const [state, formAction, pending] = useActionState(createPost, initialState);
  console.log("state :", state);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <form action={formAction} className="k py-11 px-11 rounded-md">
        <label
          className="block mb-2 text-gray-700 text-sm font-medium"
          htmlFor="title"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          placeholder="Title"
          className="w-full border border-black rounded-md px-4 py-2 mb-4 focus:outline-none
          focus:ring-2 focus:ring-blue-400
          "
        />
        <label
          className="block mb-2 text-gray-700 text-sm font-medium"
          htmlFor="body"
        >
          Body
        </label>
        <textarea
          id="body"
          name="body"
          required
          placeholder="Body"
          className="w-full border border-black rounded-md px-4 py-2 mb-4 focus:outline-none
          focus:ring-2 focus:ring-blue-400
          "
        />
        <button
          disabled={pending}
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 rounded-md"
        >
          Create Post
        </button>
      </form>
      {state?.message && <p>{state.message}</p>}
      {/* {state?.post && (
        <div>
          <h2 className="font-semibold text-md p-2">
            Title:{state.post.title}
          </h2>
          <p className="font-semibold text-md p-2">Body:{state.post.body}</p>
        </div>
      )} */}
    </div>
  );
}
