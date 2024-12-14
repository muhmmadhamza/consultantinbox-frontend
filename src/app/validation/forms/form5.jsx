import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  operator: Yup.string().min(3).max(25).required('This field is required'),
  location : Yup.string().min(3).max(25).required('This field is required'),
  make: Yup.string().min(3).max(25).required('This field is required'),
  types: Yup.string().min(3).max(25).required('This field is required'),
  orifice: Yup.string().min(3).max(25).required('This field is required'),
  inspector : Yup.string().min(3).max(25).required('This field is required'),
  downstream: Yup.string().min(3).max(25).required('This field is required'),
  pressure: Yup.string().min(3).max(25).required('This field is required'),
  outlet: Yup.string().min(3).max(25).required('This field is required'),
  size: Yup.string().min(3).max(25).required('This field is required'),
  regulator: Yup.string().min(3).max(25).required('This field is required'),
  lock: Yup.string().min(3).max(25).required('This field is required'),
  capacity: Yup.string().min(3).max(25).required('This field is required'),
  made:Yup.string().min(3).max(25).required('This field is required'),
  remarks:Yup.string().min(3).max(25).required('This field is required'),
  date: Yup.string().min(3).max(25).required('This field is required'),
  signature : Yup.string().min(3).max(25).required('This field is required'),
  subscribe: Yup.boolean().test('subscribe', 'Select at least one checkbox', (value) => {
    return value === true;
  }),
  springs: Yup.boolean(),
  pilot: Yup.boolean(),
  other: Yup.boolean(),

});