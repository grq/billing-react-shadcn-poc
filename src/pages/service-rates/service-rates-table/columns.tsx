/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnDef } from '@tanstack/react-table'

import { Checkbox } from '@/components/ui/checkbox'
import { ServiceRate } from '@/types/entities'

export const columns: ColumnDef<ServiceRate>[] = [
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
    id: 'identifier',
    accessorKey: 'evv-identifier',
    header: 'EVV Identifier',
    cell: ({ row }) => {
      const dat = row.original['identifier']
      return dat[0]?.value ?? ''
    }
  },
  {
    accessorKey: 'event-code',
    header: 'Event Code',
    cell: ({ row }) => {
      const dat = row.original['code']
      return dat.coding[0]?.code ?? ''
    }
  },
  {
    accessorKey: 'effectiveDate',
    header: 'Effective Date'
  },
  {
    accessorKey: 'service',
    header: 'Service',
    cell: ({ row }) => {
      const dat = row.original['code']
      return dat.coding[0]?.code ?? ''
    }
  },
  {
    accessorKey: 'rate',
    header: 'Rate'
  },
  {
    accessorKey: 'copay-rate',
    header: 'Copay',
    cell: () => '$ 0.00'
  },
  {
    accessorKey: 'description',
    header: 'Description'
  }
]
