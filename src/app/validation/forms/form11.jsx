import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  operator: Yup.string().min(3).max(25).required("This field is required"),
  location: Yup.string().min(3).max(25).required("This field is required"),
  date: Yup.string().min(3).max(25).required("This field is required"),
  inspector: Yup.string().min(3).max(25).required("This field is required"),
  size: Yup.string().min(3).max(25).required("This field is required"),
  describe: Yup.string().min(3).max(25).required("This field is required"),
  paint: Yup.string().min(3).max(25).required("This field is required"),

  subscribe: Yup.boolean().test(
    "subscribe",
    "Select at least one checkbox",
    (value) => {
      return value === true;
    }
  ),
  springs: Yup.boolean(),
  pilot: Yup.boolean(),
  other: Yup.boolean(),
});
