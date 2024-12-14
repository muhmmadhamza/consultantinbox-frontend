import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  operator: Yup.string().min(3).max(25).required('This field is required'),
  location : Yup.string().min(3).max(25).required('This field is required'),
  building: Yup.string().min(3).max(25).required('This field is required'),
  buildings: Yup.string().min(3).max(25).required('This field is required'),

  town: Yup.string().min(3).max(25).required('This field is required'),
  inspector : Yup.string().min(3).max(25).required('This field is required'),
  pressure: Yup.string().min(3).max(25).required('This field is required'),
  leak_test: Yup.string().min(3).max(25).required('This field is required'),
  leak: Yup.string().min(3).max(25).required('This field is required'),

  result: Yup.string().min(3).max(25).required('This field is required'),
  size: Yup.string().min(3).max(25).required('This field is required'),
  test: Yup.string().min(3).max(25).required('This field is required'),
  make: Yup.string().min(3).max(25).required('This field is required'),
  number: Yup.string().min(3).max(25).required('This field is required'),
  fitting:Yup.string().min(3).max(25).required('This field is required'),





  date: Yup.string().min(3).max(25).required('This field is required'),
  types: Yup.string().min(3).max(25).required('This field is required'),
  orifice: Yup.string().min(3).max(25).required('This field is required'),
  connecting: Yup.string().min(3).max(25).required('This field is required'),
  vent: Yup.string().min(3).max(25).required('This field is required'),
  capacity: Yup.string().min(3).max(25).required('This field is required'),
  relief : Yup.string().min(3).max(25).required('This field is required'),
  recording: Yup.string().min(3).max(25).required('This field is required'),
  support: Yup.string().min(3).max(25).required('This field is required'),
  general: Yup.string().min(3).max(25).required('This field is required'),
  repairs: Yup.string().min(3).max(25).required('This field is required'),
  made: Yup.string().min(3).max(25).required('This field is required'),
  remarks: Yup.string().min(3).max(25).required('This field is required'),
 
  signature : Yup.string().min(3).max(25).required('This field is required'),

  subscribe: Yup.boolean().test('subscribe', 'Select at least one checkbox', (value) => {
    return value === true;
  }),
  
  


});