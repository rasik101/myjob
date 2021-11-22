import React, { useState, useEffect } from "react";
import "./forgotPassword.scss";
import { Input, Button } from "components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPassword, forgotPassword } from "./validation";
import useService from "helper/useService";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function ForgotAndReset() {
  const navigate = useNavigate();
  const [resetMode, setResetPassword] = useState(false);
  const [state, getCall] = useService("get");
  const [resetPasswordState, resetGetCall] = useService("post");

  const [resetToken, setResetToken] = useState("");
  const formSubmit = (data) => {
    if (!resetMode) {
      getCall(`/auth/resetpassword?email=${data.email}`);
    } else {
      const payload = {
        password: data.password,
        confirmPassword: data.confirmPassword,
        token: resetToken,
      };
      resetGetCall(`/auth/resetpassword`, payload);
    }
  };

  useEffect(() => {
    if (state?.data?.token) {
      setResetPassword(true);
      setResetToken(state.data.token);
    }
  }, [state.data]);
  useEffect(() => {
    if (resetPasswordState?.data?.token) {
      localStorage.setItem("token", state.data.token);
      toast.success("Password reset successfully");
      navigate("/postbyyou");
    }
  }, [resetPasswordState.data]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: resetMode
      ? yupResolver(resetPassword)
      : yupResolver(forgotPassword),
  });
  return (
    <form
      className="forgotPassword_container"
      onClick={handleSubmit(formSubmit)}
    >
      <p className="heading">
        {resetMode ? "Reset Your Password" : "Forgot your password?"}
      </p>
      <p className="enterEmail">
        {resetMode
          ? "Enter your new password below."
          : "Enter the email associated with your account and we’ll send you instructions to reset your password."}
      </p>
      {!resetMode ? (
        <Input
          label="Email address"
          register={register}
          required
          name="email"
          placeholder="Enter your email"
          error={errors.email?.message}
        />
      ) : (
        <>
          <Input
            label="Password"
            placeholder="Enter your password"
            name="password"
            register={register}
            required
            type="password"
            error={errors.password?.message}
          />
          <Input
            label="Confirm Password"
            placeholder="Enter your password"
            name="confirmPassword"
            register={register}
            required
            type="password"
            error={errors.confirmPassword?.message}
          />
        </>
      )}
      <Button type="submit" className="submitButton ">
        {resetMode ? "Reset" : "Submit"}
      </Button>
    </form>
  );
}
