import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { appColors } from '../../theme'
import { DownloadOutlined } from '@mui/icons-material'
import LineChart from '../chrats/LineChart'

function DashboardLineChart() {
  const theme = useTheme()
  const colors = appColors(theme.palette.mode)

  return (
    <>
      <Box
        mt="25px"
        p="0 30px"
        display="flex "
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
            Revenue Generated
          </Typography>
          <Typography variant="h3" fontWeight="bold" color={colors.green[500]}>
            $59,342.32
          </Typography>
        </Box>
        <Box>
          <IconButton>
            <DownloadOutlined
              sx={{ fontSize: '26px', color: colors.green[500] }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box height="250px" m="-20px 0 0 0">
        <LineChart />
      </Box>
    </>
  )
}

export default DashboardLineChart
