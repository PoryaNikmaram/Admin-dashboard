import { Box, Typography, useTheme } from '@mui/material'
import { appColors } from '../../theme'

function Campaign() {
  const theme = useTheme()
  const colors = appColors(theme.palette.mode)
  return (
    <>
      <Typography variant="h5" fontWeight="600">
        Campaign
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
        <Box
          sx={{
            width: '125px',
            height: '125px',
            borderRadius: '50%',
            background: `radial-gradient(closest-side, ${
              colors.black[400]
            } 69%, transparent 70% 100%),conic-gradient(${
              colors.green[500]
            } ${25}%, ${colors.indigo[600]} 0)`,
          }}
        />
        <Typography variant="h5" color={colors.green[500]} sx={{ mt: '15px' }}>
          $48,352 revenue generated
        </Typography>
        <Typography>Includes extra misc expenditures and costs</Typography>
      </Box>
    </>
  )
}

export default Campaign
