import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  operator: Yup.string().min(3).max(25).required('This field is required'),
  testing: Yup.string().min(3).max(25).required('This field is required'),
  date: Yup.string().min(3).max(25).required('This field is required'),
  type: Yup.string().min(3).max(25).required('This field is required'),
  size: Yup.string().min(3).max(25).required('This field is required'),
  inches:Yup.string().min(3).max(25).required('This field is required'),
  length:Yup.string().min(3).max(25).required('This field is required'),
  location:Yup.string().min(3).max(25).required('This field is required'),
  describe:Yup.string().min(3).max(25).required('This field is required'),
  started:Yup.string().min(3).max(25).required('This field is required'),
  ended:Yup.string().min(3).max(25).required('This field is required'),
  pressure_start:Yup.string().min(3).max(25).required('This field is required'),
  pressure_stop:Yup.string().min(3).max(25).required('This field is required'),
  amount:Yup.string().min(3).max(25).required('This field is required'),
  line_loss:Yup.string().min(3).max(25).required('This field is required'),
  measure:Yup.string().min(3).max(25).required('This field is required'),
  remarks:Yup.string().min(3).max(25).required('This field is required'),
  supervisor:Yup.string().min(3).max(25).required('This field is required'),
  signature:Yup.string().min(3).max(25).required('This field is required'),

  subscribe: Yup.boolean().test('subscribe', 'Select at least one checkbox', (value) => {
    return value === true;
  }),
  springs: Yup.boolean(),
  pilot: Yup.boolean(),
  other: Yup.boolean(),

});