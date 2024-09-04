import SignInForm from "@/app/components/auth/SignInForm";
import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="text-center p-10">
      <h1 className="my-5 uppercase text-lg font-bold">Sign In</h1>
      <SignInForm />
    </div>
  );
};

export default LoginPage;
