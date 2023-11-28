import { useState } from 'react'
import { useSigninUserMutation } from '../authentication/userApi'
import { useTheme } from '@emotion/react'
import { appColors } from '../../theme'
import toast from 'react-hot-toast'
import { Box, Button, TextField, Typography } from '@mui/material'
import AnimatedBackground from '../../ui/AnimatedBackground'
import { useNavigate } from 'react-router'

function LoginForm() {
  const [email, setEmail] = useState('wicisa6762@cumzle.com')
  const [password, setPassword] = useState('2011380Pn')
  const navigate = useNavigate()

  const [signinUser, { isLoading }] = useSigninUserMutation()
  const theme = useTheme()
  const colors = appColors(theme.palette.mode)

  async function handleLogin() {
    if (!email || !password) return

    const data = await signinUser({ email, password })

    if (data?.error) return toast.error(data.error.message)

    if (data?.data.user) {
      navigate('/dashboard')
    }
  }

  return (
    <Box
      display={'flex'}
      height={'100vh'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{
        backgroundColor: '#4e54c8',
        width: '100%',
        height: '100vh',
      }}
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={'12px'}
        p={'1.5rem'}
        width={'400px'}
        height={'270px'}
        zIndex={10}
        sx={{
          backgroundColor: colors.indigo[800],
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <Typography
          sx={{
            fontSize: '25px',
          }}
        >
          Login
        </Typography>

        <TextField
          variant="filled"
          label="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          fullWidth
        />
        <TextField
          variant="filled"
          label="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <Button
          fullWidth
          onClick={handleLogin}
          p={1}
          disabled={isLoading}
          sx={{
            backgroundColor: colors.indigo[600],
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',

            '&:hover': {
              opacity: 0.9,
              transform: 'Scale(0.97)',
              backgroundColor: colors.indigo[600],
            },
          }}
        >
          Login
        </Button>
      </Box>

      {/* animated background component feel free to remove it ;) */}
      <AnimatedBackground />
    </Box>
  )
}

export default LoginForm
