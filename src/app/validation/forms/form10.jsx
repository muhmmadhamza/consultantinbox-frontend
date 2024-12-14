import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  operator: Yup.string().min(3).max(25).required('This field is required'),
  caller : Yup.string().min(3).max(25).required('This field is required'),
  date: Yup.string().min(3).max(25).required('This field is required'),
  phone : Yup.string().min(3).max(25).required('This field is required'),
  customer: Yup.string().min(3).max(25).required('This field is required'),
  describe:Yup.string().min(3).max(25).required('This field is required'),
  located:Yup.string().min(3).max(25).required('This field is required'),
  out_located:Yup.string().min(3).max(25).required('This field is required'),
  smelling:Yup.string().min(3).max(25).required('This field is required'),
  investigator:Yup.string().min(3).max(25).required('This field is required'),
  arrival:Yup.string().min(3).max(25).required('This field is required'),
  action:Yup.string().min(3).max(25).required('This field is required'),
  completion:Yup.string().min(3).max(25).required('This field is required'),
  follow_up:Yup.string().min(3).max(25).required('This field is required'),
remarks:Yup.string().min(3).max(25).required('This field is required'),
investigators:Yup.string().min(3).max(25).required('This field is required'),
supervisor:Yup.string().min(3).max(25).required('This field is required'),  
  subscribe: Yup.boolean().test('subscribe', 'Select at least one checkbox', (value) => {
    return value === true;
  }),
  springs: Yup.boolean(),
  pilot: Yup.boolean(),
  other: Yup.boolean(),

});