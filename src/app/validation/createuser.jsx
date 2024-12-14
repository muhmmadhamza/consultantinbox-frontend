import * as Yup from "yup";

export const CreateNewUserSchema = Yup.object().shape({
  name: Yup.string().min(3).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password not match"),
  phone: Yup.string().required("Phone number is required"),
  role_id: Yup.string().required("Role Number is required"),
});
