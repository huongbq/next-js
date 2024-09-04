"use client";

import AuthServices from "@/services/auth.service";
import { SignInData } from "@/types/auth.type";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const SignInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/auth/sign-in");
      return;
    }

    try {
      const decodedToken = jwtDecode(token) as any;
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp && decodedToken.exp < currentTime) {
        localStorage.removeItem("token");
        router.push("/auth/sign-in");
      }
    } catch (error) {
      console.error("Invalid token:", error);
      router.push("/auth/sign-in");
    }
  }, [router]);

  const onSubmit: SubmitHandler<SignInData> = async (data) => {
    try {
      const response = await AuthServices.signIn(data as SignInData);
      if (!response.data?.token) {
        throw new Error("No token returned from the server");
      }
      localStorage.setItem("token", response.data?.token);
      setSuccess("User logged in successfully");
      setError(null);
      router.push("/");
    } catch (err) {
      setError("Login failed. Please check your credentials.");
      setSuccess(null);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center mx-auto gap-5 w-[350px]">
      <div className="text-left">
        <label className="mr-2">Email: </label>
        <input
          type="email"
          className="border-b border-black"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p style={{ color: "red" }}>{errors.email.message as string}</p>
        )}
      </div>
      <div className="text-left">
        <label className="mr-2">Password: </label>
        <input
          type="password"
          className="border-b border-black"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message as string}</p>
        )}
      </div>
      <button type="submit" className="border rounded-lg py-2 w-full">
        Login
      </button>
      <p>
        If you {`don't`} have an account,{" "}
        <span
          onClick={() => router.push("/auth/sign-up")}
          className="cursor-pointer text-lime-500 text-xl">
          click here
        </span>{" "}
        to create a new account
      </p>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
};

export default SignInForm;
