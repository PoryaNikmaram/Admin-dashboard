/* eslint-disable react/prop-types */
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import { appColors } from '../theme'

function DashboardBox({ icon, amount, subtitle, progress, precent }) {
  const theme = useTheme()
  const colors = appColors(theme.palette.mode)
  const matches = useMediaQuery('(max-width:900px)')

  return (
    <Box
      gridColumn={`${matches ? 'span 2' : 'span 1'}`}
      gridAutoRows={'50px'}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      sx={{
        backgroundColor: colors.black[400],
        color: colors.black[100],
        borderRadius: '5px',
      }}
    >
      <Box>
        {icon}
        <Typography>{amount}</Typography>
        <Typography>{subtitle}</Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        gap="10px"
      >
        <Box
          sx={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: `radial-gradient(closest-side, ${colors.black[400]} 69%, transparent 70% 100%),conic-gradient(${colors.green[500]} ${progress}%, ${colors.indigo[600]} 0)`,
          }}
        />
        <Typography>{precent}%</Typography>
      </Box>
    </Box>
  )
}

export default DashboardBox
