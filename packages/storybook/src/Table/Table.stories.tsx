import * as React from 'react'
import { Box, VisuallyHidden } from '@kodiak-ui/primitives'
import {
  useTable,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableData,
} from '@kodiak-ui/table'
import {
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import DeleteIcon from '@material-ui/icons/Delete'
import FileCopyIcon from '@material-ui/icons/FileCopy'

export default { title: 'Table' }

type Data = {
  id: number
  character: string
  portrayedBy: string
  jobTitle: string
}

function Actions({
  onActionSelect,
}: {
  onActionSelect: (value: string) => void
}) {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSelect = (value: string) => {
    onActionSelect && onActionSelect(value)
    handleClose()
  }

  return (
    <>
      <Tooltip title="Actions">
        <IconButton aria-label="actions" onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleSelect('Duplicate')}>
          <ListItemIcon>
            <FileCopyIcon />
          </ListItemIcon>
          <ListItemText primary="Duplicate" />
        </MenuItem>
        <MenuItem onClick={() => handleSelect('Delete')}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Delete" />
        </MenuItem>
      </Menu>
    </>
  )
}

export function AutoLayout() {
  const columns = React.useMemo(
    () => [
      {
        Cell: 'Character',
        accessor: 'character', // accessor is the "key" in the data
      },
      {
        Cell: 'Portrayed by',
        accessor: 'portrayedBy',
      },
      {
        Cell: 'Job title',
        accessor: 'jobTitle',
      },
      {
        Cell: 'Complex',
        accessor: 'complexSample',
      },
      {
        Cell: <VisuallyHidden>Actions</VisuallyHidden>,
        accessor: 'actions',
        width: '100px',
      },
    ],
    [],
  )

  const data = React.useMemo(
    () =>
      [
        {
          id: 1,
          character: 'Michael Scott',
          portrayedBy: 'Steve Carrel',
          jobTitle: 'Regional manager',
        },
        {
          id: 2,
          character: 'Dwight Schrutte',
          portrayedBy: 'Rainn Wilson',
          jobTitle: 'Assistant to the Regional Manager',
        },
        {
          id: 3,
          character: 'Pam Beasley',
          portrayedBy: 'Jenna Fischer',
          jobTitle: 'Receptionist',
        },
        {
          id: 4,
          character: 'Angela Martin',
          portrayedBy: 'Angela Kinsey',
          jobTitle: 'Accountant',
        },
      ].map(dataRow => ({
        ...dataRow,
        actions: <Actions onActionSelect={() => null}></Actions>,
        complexSample: (props: { rowData: Data }) => {
          return (
            <Box>
              {props.rowData.character} - {props.rowData.portrayedBy}
            </Box>
          )
        },
      })),
    [],
  )

  const { headers, rows, getTableProps } = useTable<Data>({
    columns,
    data,
  })

  return (
    <>
      <Table {...getTableProps()}>
        <TableHead>
          <TableRow>
            {headers.map(({ key, column, ...header }) => (
              <TableHeader
                key={key}
                {...header}
                sx={{ width: column?.width }}
              />
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ key, cells, rowData }) => (
            <TableRow
              key={key}
              sx={{
                bg: rowData.jobTitle === 'Receptionist' ? 'green.1' : 'white',
              }}
            >
              {
                //eslint-disable-next-line @typescript-eslint/no-unused-vars
                cells.map(({ key, rowData, ...cell }) => {
                  return (
                    <TableData
                      key={key}
                      {...cell}
                      sx={{
                        width: cell.column?.width,
                      }}
                    />
                  )
                })
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export function FixedLayout() {
  const columns = React.useMemo(
    () => [
      {
        Cell: 'Character',
        accessor: 'character', // accessor is the "key" in the data
      },
      {
        Cell: 'Portrayed by',
        accessor: 'portrayedBy',
      },
      {
        Cell: 'Job title',
        accessor: 'jobTitle',
      },
      {
        Cell: 'Complex',
        accessor: 'complexSample',
      },
      {
        Cell: <VisuallyHidden>Actions</VisuallyHidden>,
        accessor: 'actions',
        width: '100px',
      },
    ],
    [],
  )

  const data = React.useMemo(
    () =>
      [
        {
          id: 1,
          character: 'Michael Scott',
          portrayedBy: 'Steve Carrel',
          jobTitle: 'Regional manager',
        },
        {
          id: 2,
          character: 'Dwight Schrutte',
          portrayedBy: 'Rainn Wilson',
          jobTitle: 'Assistant to the Regional Manager',
        },
        {
          id: 3,
          character: 'Pam Beasley',
          portrayedBy: 'Jenna Fischer',
          jobTitle: 'Receptionist',
        },
        {
          id: 4,
          character: 'Angela Martin',
          portrayedBy: 'Angela Kinsey',
          jobTitle: 'Accountant',
        },
      ].map(dataRow => ({
        ...dataRow,
        actions: <Actions onActionSelect={() => null}></Actions>,
        complexSample: (props: { rowData: Data }) => {
          return (
            <Box>
              {props.rowData.character} - {props.rowData.portrayedBy}
            </Box>
          )
        },
      })),
    [],
  )

  const { headers, rows, getTableProps } = useTable<Data>({
    columns,
    data,
    tableLayout: 'fixed',
  })

  return (
    <>
      <Table {...getTableProps()}>
        <TableHead>
          <TableRow>
            {headers.map(({ key, column, ...header }) => (
              <TableHeader
                key={key}
                {...header}
                sx={{ width: column?.width }}
              />
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ key, cells, rowData }) => (
            <TableRow
              key={key}
              sx={{
                bg: rowData.jobTitle === 'Receptionist' ? 'green.1' : 'white',
              }}
            >
              {
                //eslint-disable-next-line @typescript-eslint/no-unused-vars
                cells.map(({ key, rowData, ...cell }) => {
                  return (
                    <TableData
                      key={key}
                      {...cell}
                      sx={{
                        width: cell.column?.width,
                      }}
                    />
                  )
                })
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export function SelectableRows() {
  const columns = React.useMemo(
    () => [
      {
        Cell: 'Character',
        accessor: 'character', // accessor is the "key" in the data
      },
      {
        Cell: 'Portrayed by',
        accessor: 'portrayedBy',
      },
      {
        Cell: 'Job title',
        accessor: 'jobTitle',
      },
      {
        Cell: 'Complex',
        accessor: 'complexSample',
      },
      {
        Cell: <VisuallyHidden>Actions</VisuallyHidden>,
        accessor: 'actions',
        width: '80px',
      },
    ],
    [],
  )

  const data = React.useMemo(
    () =>
      [
        {
          id: 1,
          character: 'Michael Scott',
          portrayedBy: 'Steve Carrel',
          jobTitle: 'Regional manager',
        },
        {
          id: 2,
          character: 'Dwight Schrutte',
          portrayedBy: 'Rainn Wilson',
          jobTitle: 'Assistant to the Regional Manager',
        },
        {
          id: 3,
          character: 'Pam Beasley',
          portrayedBy: 'Jenna Fischer',
          jobTitle: 'Receptionist',
        },
        {
          id: 4,
          character: 'Angela Martin',
          portrayedBy: 'Angela Kinsey',
          jobTitle: 'Accountant',
        },
      ].map(dataRow => ({
        ...dataRow,
        actions: <Actions onActionSelect={() => null}></Actions>,
        complexSample: (props: { rowData: Data }) => {
          return (
            <Box>
              {props.rowData.character} - {props.rowData.portrayedBy}
            </Box>
          )
        },
      })),
    [],
  )

  const { headers, rows, flatSelectedRows, getTableProps } = useTable<Data>({
    columns,
    data,
    tableLayout: 'fixed',
    selectable: true,
    initialSelectedIds: [2],
  })

  console.log(flatSelectedRows)

  return (
    <Table {...getTableProps()}>
      <TableHead>
        <TableRow>
          {headers?.map(({ key, column, ...header }) => (
            <TableHeader key={key} {...header} />
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(({ key, cells, rowData }) => (
          <TableRow key={key}>
            {
              //eslint-disable-next-line @typescript-eslint/no-unused-vars
              cells.map(({ key, rowData, ...cell }) => {
                return <TableData key={key} {...cell} />
              })
            }
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
