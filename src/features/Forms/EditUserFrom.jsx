import { Box, Button, TextField, useTheme } from '@mui/material'
import {
  useEditUserMutation,
  useGetCurrentuserQuery,
} from '../authentication/userApi'
import { appColors } from '../../theme'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'
import { Formik } from 'formik'
import { editUserShema } from './editUserSchema'

function EditUserFrom() {
  const [editUser, { isLoading }] = useEditUserMutation()
  const { data, isLoading: loadingUser } = useGetCurrentuserQuery()

  const theme = useTheme()
  const colors = appColors(theme.palette.mode)
  const navigate = useNavigate()

  console.log(data)

  const user = data.session.user
  const userMeta = data.session.user.user_metadata

  const initialValues = {
    firstName: userMeta.firstName,
    lastName: userMeta.lastName,
    email: user.email,
    number: userMeta.number,
    address: userMeta.address,
  }

  async function handleSubmit(values) {
    const data = await editUser(values)

    if (data?.error) return toast.error(data?.error?.message)

    if (data?.data.user) {
      toast.success('changes made successfuly')
      navigate('/dashboard')
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={editUserShema}
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
              disabled={isLoading || loadingUser}
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
              disabled={isLoading || loadingUser}
            />
            <TextField
              id="email"
              label="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email && errors.email}
              helperText={touched.email && errors.email}
              variant="filled"
              sx={{ gridColumn: 'span 4' }}
              disabled={isLoading || loadingUser}
            />
            <TextField
              id="number"
              label="Phone number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.number}
              error={touched.number && errors.number}
              helperText={touched.number && errors.number}
              variant="filled"
              sx={{ gridColumn: 'span 4' }}
              disabled={isLoading || loadingUser}
            />
            <TextField
              id="address"
              label="Address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
              variant="filled"
              sx={{ gridColumn: 'span 4' }}
              disabled={isLoading || loadingUser}
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
              disabled={isLoading || loadingUser}
            >
              Edit user
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  )
}

export default EditUserFrom
