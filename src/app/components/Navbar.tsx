import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-blue-800 gap-0 ">
      {" "}
      <Link href={"/"} className="p-5 bg-blue-700 hover:bg-blue-950">
        Home
      </Link>{" "}
      <div className="flex ">
        <Link href={"/Login"} className="p-5 bg-blue-700 hover:bg-blue-950">
          Login
        </Link>{" "}
        <Link href={"/ContactUs"} className="p-5 bg-blue-700 hover:bg-blue-950">
          Contact Us
        </Link>{" "}
      </div>
    </div>
  );
}
