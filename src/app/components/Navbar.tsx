import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <Link href={"/Login"}>Login | </Link>
      <Link href={"/"}>Home</Link>
    </div>
  );
}
