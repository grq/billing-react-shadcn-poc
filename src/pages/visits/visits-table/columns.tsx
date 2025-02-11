/* eslint-disable @typescript-eslint/no-explicit-any */

import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { DataTableColumn } from '@/components/data-table'
import { Visit } from '@/types/entities'


export const columns: DataTableColumn<Visit>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'member_id',
    header: 'Member Id'
  },
  {
    accessorKey: 'client-name',
    header: 'Client Name',
    cell: ({ row }) => {
      return `${row.original['client_l_name'] || ''}${row.original['client_l_name'] && row.original['client_f_name'] ? ', ' : ''}${row.original['client_f_name'] || ''}`
    }
  },
  {
    id: 'date-from',
    accessorKey: 'service_start_date',
    sortingKey: 'start-date',
    header: 'Service Begin Date',
    cell: ({ row, column }) => {
      const field = new Date(row.getValue(column.id))
      return (<div>{field.toDateString()}</div>)
    }
  },
  {
    id: 'visits-type',
    accessorKey: 'service_end_date',
    sortingKey: 'end-date',
    header: 'Service End Date',
    cell: ({ row, column }) => {
      const field = new Date(row.getValue(column.id))
      return (<div>{field.toDateString()}</div>)
    }
  },
  {
    id: 'date-to',
    accessorKey: 'units',
    header: 'Units'
  },
  {
    accessorKey: 'service',
    header: 'Service'
  },
  {
    id: 'payor-service',
    accessorKey: 'payor_id',
    sortingKey: 'payor',
    header: 'Payer'
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row, column }) => {
      const status = row.getValue(column.id) as string ?? ''
      const Map = {
        'not-billable': {
          variant: 'error',
          label: 'Not Billable'
        },
        'Billable': {
          variant: 'success',
          label: 'Billable'
        },
        'Approved': {
          variant: 'success',
          label: 'Approved'
        }
      }
      const item = Map[status as keyof typeof Map]

      if (!item) {
        return null
      }

      return (
        <Badge variant={item.variant as any}>{item.label}</Badge>
      )
    }
  },
  {
    accessorKey: 'elapsed-days',
    header: 'Elapsed Days'
  }
]
