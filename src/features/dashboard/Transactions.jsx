import { Box, Typography, useTheme } from '@mui/material'
import { appColors } from '../../theme'
import { mockTransactions } from '../../Data/data'

function Transactions() {
  const theme = useTheme()
  const colors = appColors(theme.palette.mode)
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        colors={colors.grey[100]}
        borderBottom={`1px solid ${colors.grey[500]}`}
        p="15px"
      >
        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
          Recent Transactions
        </Typography>
      </Box>
      {mockTransactions.map((transaction, i) => (
        <Box
          key={`${transaction.txId}-${i}`}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`1px solid ${colors.grey[500]}`}
          p="15px"
        >
          <Box>
            <Typography color={colors.green[500]} variant="h5" fontWeight="600">
              {transaction.txId}
            </Typography>
            <Typography color={colors.grey[100]}>{transaction.user}</Typography>
          </Box>
          <Box color={colors.grey[100]}>{transaction.date}</Box>
          <Box
            backgroundColor={colors.green[500]}
            p="5px 10px"
            borderRadius="4px"
          >
            ${transaction.cost}
          </Box>
        </Box>
      ))}
    </>
  )
}

export default Transactions
