import { mockDataInvoices } from '../../Data/data'

import { DataGrid } from '@mui/x-data-grid'
import { useTheme } from '@emotion/react'
import { appColors } from '../../theme'
import { Typography } from '@mui/material'

function InvoicesTable() {
  const theme = useTheme()
  const colors = appColors(theme.palette.mode)

  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: ({ row: { cost } }) => (
        <Typography color={colors.green[500]}>${cost}</Typography>
      ),
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1,
    },
  ]

  return (
    <DataGrid
      autoHeight
      rows={mockDataInvoices}
      columns={columns}
      initialState={{
        pagination: { paginationModel: { pageSize: 8 } },
      }}
      pageSizeOptions={[8]}
      checkboxSelection
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
        '& .MuiCheckbox-root': {
          color: `${colors.green[200]}`,
        },
      }}
    ></DataGrid>
  )
}

export default InvoicesTable
