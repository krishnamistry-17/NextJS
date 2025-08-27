"use client";

import React, { useActionState } from "react";
import createUser from "../formaction";

const initialState = {
  message: "",
};

export default function SignUp() {
  const [state, formAction, pending] = useActionState(createUser, initialState);
  return (
    <form action={formAction}>
      <input type="text" name="" id="" />
      <p>{state.message}</p>
      <button disabled={pending}>submit</button>
    </form>
  );
}
