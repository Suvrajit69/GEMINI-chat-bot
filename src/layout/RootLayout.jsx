import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="py-4 px-16 h-screen flex flex-col">
      <header className="flex items-center justify-between">
        <Link to="/" className="flex items-center font-bold gap-2">
          <img src="/logo.png" className="w-8 h-8" alt="" />
          <span>GEMINI CHAT</span>
        </Link>
        <div className="">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>
      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
