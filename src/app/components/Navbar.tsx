import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-blue-800/0  gap-0 ">
      <div className="flex">
        {" "}
        <Link href={"/"} className="p-5  hover:bg-blue-950">
          ✈️Travel Ease🌴
        </Link>{" "}
        <Link href={"/"} className="p-5  hover:bg-blue-950">
          Home
        </Link>{" "}
      </div>
      <div className="flex ">
        <Link href={"/Login"} className="p-5  hover:bg-blue-950">
          Login
        </Link>{" "}
        <Link href={"/ContactUs"} className="p-5  hover:bg-blue-950">
          Contact Us
        </Link>{" "}
      </div>
    </div>
  );
}
