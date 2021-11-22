import * as yup from "yup";
export const signupSchema = yup.object().shape({
  fullName: yup.string().required("The field is mandatory."),
  email: yup.string().email("Invalid email address").required("Email required"),
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
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address.")
    .required("Email required"),
    password: yup
    .string()
    .min(8)
    .max(32)
    .required("Password must be at least 8 Long"),
});
