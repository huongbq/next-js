import SignUpForm from "@/app/components/auth/SignUpForm";
import React from "react";

const SignUpPage: React.FC = () => {
  return (
    <div className="text-center p-10 w-full">
      <h1 className="my-5 uppercase text-lg font-bold">Register</h1>
      <h2 className="mb-10">
        Please register an account to log in to our website
      </h2>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
