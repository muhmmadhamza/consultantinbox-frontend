import * as Yup from "yup";

export const EditUserSchema = Yup.object().shape({
  name: Yup.string().min(3).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  phone: Yup.string().required("Phone number is required"),
  role_id: Yup.string().required("Role Number is required"),
});
