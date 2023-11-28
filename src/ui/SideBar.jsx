import { useState } from 'react'
import { useTheme } from '@emotion/react'

import { appColors } from '../theme'

import { Sidebar, Menu, sidebarClasses } from 'react-pro-sidebar'
import {
  Avatar,
  Box,
  IconButton,
  Typography,
  useMediaQuery,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined'
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import Item from './Item'
import { HomeOutlined } from '@mui/icons-material'
import { useGetCurrentuserQuery } from '../features/authentication/userApi'

function SideBar() {
  const { data, isLoading } = useGetCurrentuserQuery()

  const matches = useMediaQuery('(max-width:900px)')
  const [active, setActive] = useState('Dashboard')
  const [isCollapsed, setIsCollapsed] = useState(matches ? true : false)
  const theme = useTheme()
  const colors = appColors(theme.palette.mode)

  return (
    <Sidebar
      collapsed={isCollapsed}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: colors.black[400],
          color: colors.grey[100],
          minHeight: '100vh',
        },
      }}
    >
      <Menu
        menuItemStyles={{
          button: ({ active }) => {
            return {
              color: active ? colors.indigo[400] : colors.grey[100],
              '&:hover': {
                color: colors.indigo[400],
                backgroundColor: 'transparent',
              },
            }
          },
        }}
      >
        <Box display="flex" justifyContent="space-between" p={2}>
          <Typography
            variant="h2"
            color={colors.grey[100]}
            sx={{
              display: isCollapsed ? 'none' : 'flex',
            }}
          >
            Admins
          </Typography>
          <IconButton onClick={() => setIsCollapsed((collapse) => !collapse)}>
            <MenuIcon sx={{ marginLeft: '5px' }} />
          </IconButton>
        </Box>
        {!isCollapsed && (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            p={1}
            gap="7px"
            textAlign="center"
          >
            <Avatar sx={{ width: 55, height: 55 }} />
            <Typography
              variant="h4"
              sx={{
                fontWeight: '600',
                color: colors.grey[100],
                textTransform: 'uppercase',
              }}
            >
              {data.session.user.user_metadata.firstName}
            </Typography>
            <Typography
              variant="p"
              sx={{ color: colors.green[400], fontSize: '10px' }}
            >
              VP Fancy Admin
            </Typography>
          </Box>
        )}

        <Item
          title="Dashboard"
          to="/dashboard"
          icon={<HomeOutlined />}
          active={active}
          setActive={setActive}
        />

        <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{ m: '15px 0 5px 20px' }}
        >
          Data
        </Typography>
        <Item
          title="Manage Team"
          to="/team"
          icon={<GroupOutlinedIcon />}
          active={active}
          setActive={setActive}
        />
        <Item
          title="Contacts Information"
          to="/contacts"
          icon={<ContactsOutlinedIcon />}
          active={active}
          setActive={setActive}
        />
        <Item
          title="Invoices Balances"
          to="/invoices"
          icon={<CreditCardOutlinedIcon />}
          active={active}
          setActive={setActive}
        />

        <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{ m: '15px 0 5px 20px' }}
        >
          Pages
        </Typography>
        <Item
          title="Profile Form"
          to="/form"
          icon={<PersonOutlineOutlinedIcon />}
          active={active}
          setActive={setActive}
        />
        <Item
          title="Calendar"
          to="/calendar"
          icon={<CalendarTodayOutlinedIcon />}
          active={active}
          setActive={setActive}
        />
        <Item
          title="FAQ Page"
          to="/faq"
          icon={<LiveHelpOutlinedIcon />}
          active={active}
          setActive={setActive}
        />

        <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{ m: '15px 0 5px 20px' }}
        >
          Charts
        </Typography>
        <Item
          title="Bar Chart"
          to="/bar"
          icon={<LeaderboardOutlinedIcon />}
          active={active}
          setActive={setActive}
        />
        <Item
          title="Pie Chart"
          to="/pie"
          icon={<PieChartOutlineOutlinedIcon />}
          active={active}
          setActive={setActive}
        />
        <Item
          title="Line Chart"
          to="/line"
          icon={<TrendingUpOutlinedIcon />}
          active={active}
          setActive={setActive}
        />
      </Menu>
    </Sidebar>
  )
}

export default SideBar
