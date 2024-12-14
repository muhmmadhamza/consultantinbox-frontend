import * as Yup from "yup";

export const ResetPasswordScehma = Yup.object().shape({
  password: Yup.string().min(6).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password not match"),
});
