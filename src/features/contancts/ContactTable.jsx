import { mockDataContacts } from '../../Data/data'

import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useTheme } from '@emotion/react'
import { appColors } from '../../theme'

function ContactTable() {
  const theme = useTheme()
  const colors = appColors(theme.palette.mode)

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'registrarId', headerName: 'Registrar ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
      flex: 0.5,
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
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
      field: 'address',
      headerName: 'Address',
      flex: 1,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: 'city',
      headerName: 'City',
      disableColumnMenu: true,
    },
    {
      field: 'zipCode',
      headerName: 'Zip Code',
      disableColumnMenu: true,
    },
  ]
  return (
    <DataGrid
      autoHeight
      rows={mockDataContacts}
      columns={columns}
      initialState={{
        pagination: { paginationModel: { pageSize: 8 } },
      }}
      pageSizeOptions={[8]}
      slots={{
        toolbar: GridToolbar,
      }}
      slotProps={{
        toolbar: {
          printOptions: { disableToolbarButton: true },
          csvOptions: { disableToolbarButton: true },
        },
      }}
      disableDensitySelector
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

export default ContactTable
