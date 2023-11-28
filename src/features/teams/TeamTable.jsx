import { mockDataTeam } from '../../Data/data'

import { DataGrid } from '@mui/x-data-grid'
import { useTheme } from '@emotion/react'
import { appColors } from '../../theme'
import { Box, Typography } from '@mui/material'
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from '@mui/icons-material'

function TeamTAble() {
  const theme = useTheme()
  const colors = appColors(theme.palette.mode)

  const columns = [
    { field: 'id', headerName: 'ID', width: 45 },
    { field: 'name', headerName: 'FullName', flex: 1 },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
      disableColumnMenu: true,
      sortable: false,
    },
    { field: 'age', headerName: 'Age', flex: 0.5 },
    {
      field: 'phone',
      headerName: 'Phone',
      flex: 1,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: 'access',
      headerName: 'Access',
      disableColumnMenu: true,
      sortable: false,
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="100%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === 'admin'
                ? colors.green[600]
                : access === 'manager'
                ? colors.green[700]
                : colors.green[700]
            }
            borderRadius="4px"
            sx={{
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: colors.green[500],
              },
            }}
          >
            {access === 'admin' && <AdminPanelSettingsOutlined />}
            {access === 'manager' && <SecurityOutlined />}
            {access === 'user' && <LockOpenOutlined />}
            <Typography noWrap color={colors.grey[100]} sx={{ ml: '5px' }}>
              {access}
            </Typography>
          </Box>
        )
      },
    },
  ]

  return (
    <DataGrid
      autoHeight
      rows={mockDataTeam}
      columns={columns}
      initialState={{
        pagination: { paginationModel: { pageSize: 8 } },
      }}
      pageSizeOptions={[8]}
      sx={{
        color: colors.grey[100],
        '&.MuiDataGrid-root': {
          margin: '50px',
          border: 'none',
        },
        '& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-cell:focus-within':
          {
            outline: 'none',
          },
        '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus': {
          outline: 'none',
        },
        '& .MuiDataGrid-columnHeaders': {
          backgroundColor: colors.black[400],
        },
        '& .MuiDataGrid-footerContainer': {
          backgroundColor: colors.black[400],
        },
        '& .MuiDataGrid-cell': {
          borderBottom: 'none',
        },
      }}
    ></DataGrid>
  )
}

export default TeamTAble
