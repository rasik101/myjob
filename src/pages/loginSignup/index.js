import React, { useState, useEffect } from "react";
import "./loginSignup.scss";
import { Input, Button } from "components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, signupSchema } from "./validation";
import SwitchButtons from "./switchButtons";
import useService from "helper/useService";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [isRecruiter, setRecruiter] = useState(true);
  const [state, postCall] = useService("post");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
    resolver: isLogin ? yupResolver(loginSchema) : yupResolver(signupSchema),
  });
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };
  const formSubmit = (data) => {
    const loginpayload = {
      email: data.email,
      password: data.password,
    };
    const registerPayload = {
      email: data.email,
      userRole: 0,
      password: data.password,
      confirmPassword: data.confirmPassword,
      name: data.fullName,
      skills: data.skills,
    };
    if (isLogin) {
      postCall("/auth/login", loginpayload);
    } else {
      postCall("/auth/register", registerPayload);
    }
  };
  useEffect(() => {
    if (state.data.token) {
      localStorage.setItem("name", state.data.name);
      localStorage.setItem("token", state.data.token);
      toast.success("Login Successful");

      navigate("/postbyyou");
    }
  }, [state.data]);
  useEffect(() => {
    reset();
  }, [isLogin]);
  return (
    <form className="loginSignup-container" onClick={handleSubmit(formSubmit)}>
      <p className="heading">{isLogin ? "Login" : "Signup"}</p>
      {!isLogin && (
        <SwitchButtons setRecruiter={setRecruiter} isRecruiter={isRecruiter} />
      )}
      {!isLogin && (
        <Input
          label="Full name"
          register={register}
          required
          name="fullName"
          placeholder="Enter your full name"
          error={errors.fullName?.message}
        />
      )}
      <Input
        label="Email address"
        register={register}
        required
        name="email"
        placeholder="Enter your email"
        error={errors.email?.message}
      />
      <div className="confirmPassword">
        <Input
          label="Password"
          placeholder="Enter your password"
          forgotPassword={isLogin}
          name="password"
          register={register}
          required
          type="password"
          error={errors.password?.message}
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            placeholder="Enter your password"
            name="confirmPassword"
            register={register}
            required
            type="password"
            error={errors.confirmPassword?.message}
          />
        )}
      </div>
      {!isLogin && (
        <Input
          label="Skills"
          placeholder="Enter your Skills"
          name="skills"
          register={register}
          required
          type="skills"
        />
      )}
      <Button type="submit" className="submitButton">
        {isLogin ? "Login" : "Signup"}
      </Button>
      {isLogin ? (
        <p className="createNewAccount">
          New to MyJobs?<span onClick={toggleLogin}>Create an account</span>
        </p>
      ) : (
        <p className="createNewAccount">
          Have an account?
          <span onClick={toggleLogin}>Login</span>
        </p>
      )}
    </form>
  );
}
