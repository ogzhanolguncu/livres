import * as yup from 'yup';

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .email('Input must be valid email!')
      .required('Email field is required!'),
  })
  .required();
