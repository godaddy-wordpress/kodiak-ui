import * as React from 'react'
import {
  useTable,
  CellProps,
  HeaderProps,
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

export function Initial() {
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
    ],
    [],
  )

  const data = React.useMemo(
    () => [
      {
        character: 'Michael Scott',
        portrayedBy: 'Steve Carrel',
        jobTitle: 'Regional manager',
      },
      {
        character: 'Dwight Schrutte',
        portrayedBy: 'Rainn Wilson',
        jobTitle: 'Assistant to the Regional Manager',
      },
      {
        character: 'Pam Beasley',
        portrayedBy: 'Jenna Fischer',
        jobTitle: 'Receptionist',
      },
      {
        character: 'Angela Martin',
        portrayedBy: 'Angela Kinsey',
        jobTitle: 'Accountant',
      },
    ],
    [],
  )

  const { register, headers, rows } = useTable<{
    character: string
    portrayedBy: string
  }>({
    columns,
    data,
  })

  const labelRef = React.useRef<HTMLHeadingElement>(null)

  return (
    <>
      <h1 ref={labelRef} id="Testing">
        Table example
      </h1>

      <Table ref={node => register(node, { describedby: labelRef })}>
        <TableHead>
          <TableRow>
            {headers.map(({ key, ...header }: HeaderProps) => (
              <TableHeader key={key} {...header} />
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ key, cells }) => (
            <TableRow key={key}>
              {cells.map(({ key, ...cell }: CellProps) => (
                <TableData key={key} {...cell} />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
