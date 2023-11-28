import * as Yup from 'yup'

const phoneRegex = '^09[0|1|2|3][0-9]{8}$'

export const editUserShema = Yup.object().shape({
  firstName: Yup.string().required('this feild is required'),
  lastName: Yup.string().required('this feild is required'),
  email: Yup.string()
    .email('invalid email')
    .required('Please enter a valid email'),
  number: Yup.string()
    .required('this feild is required')
    .matches(phoneRegex, 'Please enter a valid number'),
})
