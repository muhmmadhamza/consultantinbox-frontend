import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  operator: Yup.string().min(3).max(25).required('This field is required'),
  adress: Yup.string().min(3).max(25).required('This field is required'),
 
});