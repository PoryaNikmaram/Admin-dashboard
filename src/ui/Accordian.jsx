/* eslint-disable react/prop-types */
import { ExpandMore } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  useTheme,
} from '@mui/material'
import { appColors } from '../theme'

function Accordian({ title, details }) {
  const theme = useTheme()
  const colors = appColors(theme.palette.mode)
  return (
    <Accordion
      sx={{
        backgroundColor: colors.black[400],
      }}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color={colors.indigo[400]} variant="h5">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{details}</Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default Accordian
