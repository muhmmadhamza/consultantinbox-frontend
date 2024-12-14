import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  operator: Yup.string().min(3).max(25).required('This field is required'),
  location : Yup.string().min(3).max(25).required('This field is required'),
  date: Yup.string().min(3).max(25).required('This field is required'),
  conducted: Yup.string().min(3).max(25).required('This field is required'),
  manufacturer: Yup.string().min(3).max(25).required('This field is required'),
  serial : Yup.string().min(3).max(25).required('This field is required'),
  calibration: Yup.string().min(3).max(25).required('This field is required'),
  detection:Yup.string().min(3).max(25).required('This field is required'),
  detectable:Yup.string().min(3).max(25).required('This field is required'),
});