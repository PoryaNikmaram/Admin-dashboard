import { Box, Button, TextField } from '@mui/material'
import { Formik } from 'formik'
import { createUserSchema } from './createUserSchema'
import { useTheme } from '@emotion/react'
import { appColors } from '../../theme'
import { useSignupUserMutation } from '../authentication/userApi'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  number: '',
  address: '',
  password: '',
  confirmPassword: '',
}

function NewUser() {
  const theme = useTheme()
  const colors = appColors(theme.palette.mode)
  const navigate = useNavigate()

  const [signupUser, { isLoading }] = useSignupUserMutation()

  async function handleSubmit(values) {
    const data = await signupUser(values)

    if (data?.error) return toast.error(data.error.message)

    if (data?.data.user) {
      toast.success(
        'you signed up successfully please confirm your email and login'
      )
      navigate('/')
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createUserSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display={'grid'}
            gridTemplateColumns={'repeat(4,1fr)'}
            gap={'12px'}
            m={'50px'}
            sx={{
              '& .MuiFormHelperText-root': {
                margin: 0,
                marginTop: '5px',
                textTransform: 'capitalize',
              },
            }}
          >
            <TextField
              id="firstName"
              label="First name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.firstName && errors.firstName}
              helperText={touched.firstName && errors.firstName}
              variant="filled"
              sx={{ gridColumn: 'span 2' }}
              disabled={isLoading}
            />
            <TextField
              id="lastName"
              label="Last name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              error={touched.lastName && errors.lastName}
              helperText={touched.lastName && errors.lastName}
              variant="filled"
              sx={{ gridColumn: 'span 2' }}
              disabled={isLoading}
            />
            <TextField
              id="email"
              label="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && errors.email}
              helperText={touched.email && errors.email}
              variant="filled"
              sx={{ gridColumn: 'span 4' }}
              disabled={isLoading}
            />
            <TextField
              id="number"
              label="Phone number"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.number && errors.number}
              helperText={touched.number && errors.number}
              variant="filled"
              sx={{ gridColumn: 'span 4' }}
              disabled={isLoading}
            />
            <TextField
              id="address"
              label="Address"
              onChange={handleChange}
              onBlur={handleBlur}
              variant="filled"
              sx={{ gridColumn: 'span 4' }}
              disabled={isLoading}
            />
            <TextField
              id="password"
              label="Password"
              type="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && errors.password}
              helperText={touched.password && errors.password}
              variant="filled"
              sx={{ gridColumn: 'span 2' }}
              disabled={isLoading}
            />
            <TextField
              id="confirmPassword"
              label="Confirm password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.confirmPassword && errors.confirmPassword}
              helperText={touched.confirmPassword && errors.confirmPassword}
              variant="filled"
              sx={{ gridColumn: 'span 2' }}
              disabled={isLoading}
            />
            <Button
              variant="contained"
              size="small"
              type="submit"
              sx={{
                backgroundColor: colors.indigo[500],

                '&:hover': {
                  backgroundColor: colors.indigo[600],
                },
                gridColumn: '4 /span 1',
              }}
              disabled={isLoading}
            >
              Create user
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  )
}

export default NewUser
