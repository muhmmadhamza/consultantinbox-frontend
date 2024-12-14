import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  operator: Yup.string().min(3).max(25).required('This field is required'),
  number: Yup.string().min(3).max(25).required('This field is required'),
  location: Yup.string().min(3).max(25).required('This field is required'),
  manufacture: Yup.string().min(3).max(25).required('This field is required'),
  date: Yup.string().min(3).max(25).required('This field is required'),
  date1: Yup.string().min(3).max(25).required('This field is required'),
  voltage: Yup.string().min(3).max(25).required('This field is required'),
  voltage1: Yup.string().min(3).max(25).required('This field is required'),
  volts: Yup.string().min(3).max(25).required('This field is required'),
  volts1: Yup.string().min(3).max(25).required('This field is required'),
  amps1:Yup.string().min(3).max(25).required('This field is required'),
  amps:Yup.string().min(3).max(25).required('This field is required'),
  condition:Yup.string().min(3).max(25).required('This field is required'),
  condition1:Yup.string().min(3).max(25).required('This field is required'),
  inspectedby:Yup.string().min(3).max(25).required('This field is required'),
  inspectedby1:Yup.string().min(3).max(25).required('This field is required'),
});