import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  operator: Yup.string().min(3).max(25).required('This field is required'),
  date: Yup.string().min(3).max(25).required('This field is required'),
  began: Yup.string().min(3).max(25).required('This field is required'),
  ended: Yup.string().min(3).max(25).required('This field is required'),
  covered: Yup.string().min(3).max(25).required('This field is required'),
  references: Yup.string().min(3).max(25).required('This field is required'),
  leakage: Yup.string().min(3).max(25).required('This field is required'),
  describe: Yup.string().min(3).max(25).required('This field is required'),
  factors: Yup.string().min(3).max(25).required('This field is required'),
  follow: Yup.string().min(3).max(25).required('This field is required'),
  comments: Yup.string().min(3).max(25).required('This field is required'),
  persons: Yup.string().min(3).max(25).required('This field is required'),
  signature: Yup.string().min(3).max(25).required('This field is required'),
  
  // Add validation rules for other fields as needed
});