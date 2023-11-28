/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material'

function Header({ title, subTitle }) {
  return (
    <Box p={1}>
      <Typography variant="h1">{title}</Typography>
      <Typography variant="p">{subTitle}</Typography>
    </Box>
  )
}

export default Header
