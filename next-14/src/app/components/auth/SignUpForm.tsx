"use client";

import AuthServices from "@/services/auth.service";
import { SignUpData } from "@/types/auth.type";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>();
  const router = useRouter();

  const onSubmit: SubmitHandler<SignUpData> = async (data) => {
    try {
      const response = await AuthServices.signUp(data);

      if (response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        router.push("/auth/sign-in");
      }
    } catch (err) {
      console.error("Sign up failed", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div>
        <label className="mr-2">Username: </label>
        <input
          type="text"
          className="border-b border-black"
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && (
          <p style={{ color: "red" }}>{errors.username.message}</p>
        )}
      </div>

      <div>
        <label className="mr-2">Email: </label>
        <input
          type="email"
          className="border-b border-black"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>

      <div>
        <label className="mr-2">Password: </label>
        <input
          type="password"
          className="border-b border-black"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </div>
      <div>
        <button className="mr-16" onClick={() => router.push("/auth/sign-in")}>
          Back to Login
        </button>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
};

export default SignUpForm;
