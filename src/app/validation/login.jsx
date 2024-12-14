import * as Yup from "yup";

export const LoginScehma = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  password: Yup.string().required("Password is required"),
});
