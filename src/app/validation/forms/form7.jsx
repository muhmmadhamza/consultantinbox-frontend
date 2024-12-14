import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  operator: Yup.string().min(3).max(25).required("This field is required"),
  location: Yup.string().min(3).max(25).required("This field is required"),
  make: Yup.string().min(3).max(25).required("This field is required"),
  types: Yup.string().min(3).max(25).required("This field is required"),
  brand: Yup.string().min(3).max(25).required("This field is required"),
  inspector: Yup.string().min(3).max(25).required("This field is required"),
  added: Yup.string().min(3).max(25).required("This field is required"),
  inspection: Yup.string().min(3).max(25).required("This field is required"),
  period: Yup.string().min(3).max(25).required("This field is required"),
  delivery: Yup.string().min(3).max(25).required("This field is required"),
  size: Yup.string().min(3).max(25).required("This field is required"),
  capacity: Yup.string().min(3).max(25).required("This field is required"),
  tank: Yup.string().min(3).max(25).required("This field is required"),
  odorant: Yup.string().min(3).max(25).required("This field is required"),
  odorization: Yup.string().min(3).max(25).required("This field is required"),
  date: Yup.string().min(3).max(25).required("This field is required"),
  signature: Yup.string().min(3).max(25).required("This field is required"),
});
