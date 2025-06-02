"use client";
//from client component - server actions
import { myServerAction } from "./action";

function Button() {
  const handleClick = async () => {
    const res = await myServerAction("Button Triggered");
    console.log("res  :", res);
    alert("Serevr actions, see in console");
  };
  return (
    <div>
      <button onClick={handleClick}>Call Server Actions</button>
    </div>
  );
}
export default Button;
