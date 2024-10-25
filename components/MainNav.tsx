import Link from "next/link";
import React from "react";
import ToggleMode from "./ToggleMode";
import MainNavLinks from "./MainNavLinks";

function MainNav() {
  return (
    <div className="flex justify-between">
      <MainNavLinks />

      <div className="flex items-center gap-3">
        <Link href="/">Logout</Link>
        <ToggleMode />
      </div>
    </div>
  );
}

export default MainNav;
