import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  operator: Yup.string().min(3).max(25).required('This field is required'),
  number: Yup.string().min(3).max(25).required('This field is required'),
  number1: Yup.string().min(3).max(25).required('This field is required'),
  number2: Yup.string().min(3).max(25).required('This field is required'),
  number3: Yup.string().min(3).max(25).required('This field is required'),
  location: Yup.string().min(3).max(25).required('This field is required'),
  location1: Yup.string().min(3).max(25).required('This field is required'),
  location2: Yup.string().min(3).max(25).required('This field is required'),
  location3: Yup.string().min(3).max(25).required('This field is required'),
  inspected: Yup.string().min(3).max(25).required('This field is required'),
  inspected1: Yup.string().min(3).max(25).required('This field is required'),
  inspected2: Yup.string().min(3).max(25).required('This field is required'),
  inspected3: Yup.string().min(3).max(25).required('This field is required'),
  inspectedby: Yup.string().min(3).max(25).required('This field is required'),
  inspectedby1: Yup.string().min(3).max(25).required('This field is required'),
  inspectedby2: Yup.string().min(3).max(25).required('This field is required'),
  inspectedby3: Yup.string().min(3).max(25).required('This field is required'),
 
});