import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-center bg-blue-800/0  gap-5 ">
      {" "}
      <Link href={"/Home"} className="p-2  hover:bg-blue-950">
        Home
      </Link>{" "}
      <Link href={"/Login"} className="p-2  hover:bg-blue-950">
        Login
      </Link>{" "}
      <Link href={"/ContactUs"} className="p-2  hover:bg-blue-950">
        Contact Us
      </Link>{" "}
    </div>
  );
}
