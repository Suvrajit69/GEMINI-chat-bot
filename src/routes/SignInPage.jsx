import React from "react";
import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <SignIn path="/sign-in" signUpUrl="/sign-up" />
    </div>
  );
};

export default SignInPage;
