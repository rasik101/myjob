import * as yup from "yup";

export const forgotPassword = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address.")
    .required("Email required"),
});
export const resetPassword = yup.object().shape({
  password: yup
    .string()
    .min(8)
    .max(32)
    .required("Password must be at least 8 Long"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
});
