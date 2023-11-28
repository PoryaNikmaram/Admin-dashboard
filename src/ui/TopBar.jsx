import { Box, InputBase } from '@mui/material'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useTheme } from '@emotion/react'
import { useContext } from 'react'
import { AppThemeContext, appColors } from '../theme'
import { Link } from 'react-router-dom'
import { useSignoutUserMutation } from '../features/authentication/userApi'
import { Logout } from '@mui/icons-material'
import toast from 'react-hot-toast'

function TopBar() {
  const theme = useTheme()
  const colors = appColors(theme.palette.mode)
  const { mode, toggleDarkMode } = useContext(AppThemeContext)
  const [signoutUser, { isLoading }] = useSignoutUserMutation()

  async function handleLogout() {
    const data = await signoutUser()

    if (data?.error) return toast.error(data.error.message)
  }

  return (
    <Box display="flex" justifyContent="space-between" width="100%" p={2}>
      <Box
        backgroundColor={colors.black[400]}
        borderRadius="3px"
        paddingLeft="12px"
      >
        <InputBase placeholder="search" />
        <IconButton type="button">
          <SearchIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton onClick={toggleDarkMode}>
          {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        <Link to="/user">
          <IconButton>
            <PersonIcon />
          </IconButton>
        </Link>
        <IconButton onClick={handleLogout} disabled={isLoading}>
          <Logout />
        </IconButton>
      </Box>
    </Box>
  )
}

export default TopBar
