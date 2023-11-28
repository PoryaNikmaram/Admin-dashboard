import { Outlet } from 'react-router'
import SideBar from './SideBar'
import TopBar from './TopBar'
import { Box } from '@mui/material'

function AppLayout() {
  return (
    <Box display="flex">
      <SideBar />
      <Box width="100%">
        <TopBar />
        <Outlet />
      </Box>
    </Box>
  )
}

export default AppLayout
