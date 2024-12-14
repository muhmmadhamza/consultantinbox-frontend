import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  operator: Yup.string().min(3).max(25).required('This field is required'),
  date: Yup.string().min(3).max(25).required('This field is required'),
  location: Yup.string().min(3).max(25).required('This field is required'),
  inspector: Yup.string().min(3).max(25).required('This field is required'),
  designation: Yup.string().min(3).max(25).required('This field is required'),
  main: Yup.string().min(3).max(25).required('This field is required'),
  services: Yup.string().min(3).max(25).required('This field is required'),
  size: Yup.string().min(3).max(25).required('This field is required'),
  inches: Yup.string().min(3).max(25).required('This field is required'),
  pressure: Yup.string().min(3).max(25).required('This field is required'),
  material: Yup.string().min(3).max(25).required('This field is required'),
  potential: Yup.string().min(3).max(25).required('This field is required'),
  type: Yup.string().min(3).max(25).required('This field is required'),
  pipeline: Yup.string().min(3).max(25).required('This field is required'),
  way: Yup.string().min(3).max(25).required('This field is required'),
  measures: Yup.string().min(3).max(25).required('This field is required'),
  installed: Yup.string().min(3).max(25).required('This field is required'),
  anodessize: Yup.string().min(3).max(25).required('This field is required'),


  subscribe: Yup.boolean().test('subscribe', 'Select at least one checkbox', (value) => {
    return value === false;
  }),
  
});