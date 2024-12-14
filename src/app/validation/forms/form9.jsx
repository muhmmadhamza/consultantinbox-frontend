import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  operator: Yup.string().min(3).max(25).required('This field is required'),
  location : Yup.string().min(3).max(25).required('This field is required'),
  date: Yup.string().min(3).max(25).required('This field is required'),
  conducted: Yup.string().min(3).max(25).required('This field is required'),
  witnessed: Yup.string().min(3).max(25).required('This field is required'),
  serial : Yup.string().min(3).max(25).required('This field is required'),


 subscribe: Yup.boolean().test('subscribe', 'Select at least one checkbox', (value) => {
    return value === true;
  }),
  detectable: Yup.boolean(),
  barely: Yup.boolean(),
  readily: Yup.boolean(),
  strong: Yup.boolean(),

});