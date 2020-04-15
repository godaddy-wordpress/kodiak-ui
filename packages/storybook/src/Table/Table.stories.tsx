import * as React from 'react'
import { Text, VisuallyHidden } from '@kodiak-ui/primitives'
import {
  useTable,
  CellProps,
  HeaderProps,
  Table,
  TableHead,
  TableRow,
  TableHeader,
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
      {
        Cell: <VisuallyHidden>Actions</VisuallyHidden>,
        accessor: 'actions',
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
        actions: (
          <Actions onActionSelect={value => alert(`${value} Michael Scott`)} />
        ),
      },
      {
        character: 'Dwight Schrutte',
        portrayedBy: 'Rainn Wilson',
        jobTitle: 'Assistant to the Regional Manager',
        actions: (
          <Actions
            onActionSelect={value => alert(`${value} Dwight Schrutte`)}
          />
        ),
      },
      {
        character: 'Pam Beasley',
        portrayedBy: 'Jenna Fischer',
        jobTitle: 'Receptionist',
        actions: (
          <Actions onActionSelect={value => alert(`${value} Pam Beasley`)} />
        ),
      },
      {
        character: 'Angela Martin',
        portrayedBy: 'Angela Kinsey',
        jobTitle: 'Accountant',
        actions: (
          <Actions onActionSelect={value => alert(`${value} Angela Martin`)} />
        ),
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
      <Text as="h1" sx={{ color: 'muted' }} ref={labelRef} id="Testing">
        Table example
      </Text>

      <Table ref={node => register(node, { describedby: labelRef })}>
        <TableHead>
          <TableRow>
            {headers.map(({ key, ...header }: HeaderProps) => (
              <TableHeader key={key} {...header} />
            ))}
          </TableRow>
        </TableHead>
        <tbody>
          {rows.map(({ id, cells }, index) => (
            <TableRow key={index}>
              {cells.map(({ key, ...cell }: CellProps) => (
                <td key={key} {...cell} />
              ))}
            </TableRow>
          ))}
        </tbody>
      </Table>
    </>
  )
}
