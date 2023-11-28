import { Box, useMediaQuery } from '@mui/material'
import { useTheme } from '@emotion/react'
import { appColors } from '../../theme'
import RatingBoxes from './RatingBoxes'
import DashboardLineChart from './DashboardLineChart'
import DashboardBarChart from './DashboardBarChart'
import Transactions from './Transactions'
import Campaign from './Campaign'

function DashboardLayout() {
  const matches = useMediaQuery('(max-width:900px)')
  const theme = useTheme()
  const colors = appColors(theme.palette.mode)

  return (
    <Box
      display={'grid'}
      flexDirection={'column'}
      gridTemplateColumns={'repeat(12,1fr)'}
      gridTemplateRows={'repeat(5,1fr)'}
      gap="12px"
      height={matches ? '200vh' : '100vh'}
      margin={'20px'}
    >
      <Box
        display={'grid'}
        gridTemplateColumns={'repeat(4,1fr)'}
        gridColumn={'span 12'}
        gridRow={'span 1'}
        gap="12px"
      >
        <RatingBoxes />
      </Box>
      <Box
        gridColumn={`${matches ? 'span 12' : 'span 8'}`}
        gridRow={'span 1'}
        backgroundColor={colors.black[400]}
      >
        <DashboardLineChart />
      </Box>
      <Box
        gridColumn={`${matches ? 'span 12' : 'span 4'}`}
        gridRow={'span 1'}
        backgroundColor={colors.black[400]}
        overflow="auto"
      >
        <Transactions />
      </Box>
      <Box
        gridColumn={`${matches ? 'span 12' : 'span 6'}`}
        gridRow={'span 1'}
        backgroundColor={colors.black[400]}
        p="30px"
      >
        <Campaign />
      </Box>
      <Box
        gridColumn={`${matches ? 'span 12' : 'span 6'}`}
        gridRow={'span 1'}
        backgroundColor={colors.black[400]}
      >
        <DashboardBarChart />
      </Box>
    </Box>
  )
}

export default DashboardLayout
