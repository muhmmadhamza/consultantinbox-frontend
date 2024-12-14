import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  operator: Yup.string().min(3).max(25).required('This field is required'),
  location : Yup.string().min(3).max(25).required('This field is required'),
  make: Yup.string().min(3).max(25).required('This field is required'),
  types: Yup.string().min(3).max(25).required('This field is required'),
  name: Yup.string().min(3).max(25).required('This field is required'),
  adress : Yup.string().min(3).max(25).required('This field is required'),
  leak_found: Yup.string().min(3).max(25).required('This field is required'),
  supervisor : Yup.string().min(3).max(25).required('This field is required'),
  downstream: Yup.string().min(3).max(25).required('This field is required'),
  pressure: Yup.string().min(3).max(25).required('This field is required'),
  investigation_by:Yup.string().min(3).max(25).required('This field is required'),
  reported: Yup.string().min(3).max(25).required('This field is required'),
  size: Yup.string().min(3).max(25).required('This field is required'),
  received: Yup.string().min(3).max(25).required('This field is required'),
  leak: Yup.string().min(3).max(25).required('This field is required'),
  how_many:Yup.string().min(3).max(25).required('This field is required'),
  made_by: Yup.string().min(3).max(25).required('This field is required'),
  weight:Yup.string().min(3).max(25).required('This field is required'),
  depth:Yup.string().min(3).max(25).required('This field is required'),
  capacity: Yup.string().min(3).max(25).required('This field is required'),
  investigation:Yup.string().min(3).max(25).required('This field is required'),
  foreman:Yup.string().min(3).max(25).required('This field is required'),
  leak_location:Yup.string().min(3).max(25).required('This field is required'),
  length:Yup.string().min(3).max(25).required('This field is required'),
  repair_made:Yup.string().min(3).max(25).required('This field is required'),
  date: Yup.string().min(3).max(25).required('This field is required'),
  posted_by : Yup.string().min(3).max(25).required('This field is required'),
  subscribe: Yup.boolean().test('subscribe', 'Select at least one checkbox', (value) => {
    return value === true;
  }),
  springs: Yup.boolean(),
  pilot: Yup.boolean(),
  other: Yup.boolean(),

});