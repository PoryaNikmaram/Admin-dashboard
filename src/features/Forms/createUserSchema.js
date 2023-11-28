import * as Yup from 'yup'

const phoneRegex = '^09[0|1|2|3][0-9]{8}$'

export const createUserSchema = Yup.object().shape({
  firstName: Yup.string().required('this feild is required'),
  lastName: Yup.string().required('this feild is required'),
  email: Yup.string()
    .email('invalid email')
    .required('Please enter a valid email'),
  number: Yup.string()
    .required('this feild is required')
    .matches(phoneRegex, 'Please enter a valid number'),
  password: Yup.string()
    .required('this feild is required')
    .min(8, 'password must be at least 8 charachters')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter'),
  confirmPassword: Yup.string()
    .required('this field is required')
    .oneOf([Yup.ref('password'), 'password must match']),
})
