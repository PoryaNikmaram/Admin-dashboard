import { Box, Typography } from '@mui/material'
import BarChart from '../chrats/BarChart'

function DashboardBarChart() {
  return (
    <>
      <Typography
        variant="h5"
        fontWeight="600"
        sx={{ padding: '30px 30px 0 30px' }}
      >
        Sales Quantity
      </Typography>
      <Box height="250px" mt="-20px">
        <BarChart />
      </Box>
    </>
  )
}

export default DashboardBarChart
