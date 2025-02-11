import type { ColumnFiltersState, Table } from '@tanstack/react-table'
import { X } from 'lucide-react'


import { DataTableFilterComponent } from './data-table-filter'

import { DataTableFilter } from '.'

import { Button } from '@/components/ui/button'
import { DataTableViewOptions } from '@/components/data-table/data-table-view-options'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  filters: DataTableFilter[]
  filterValues?: ColumnFiltersState
}

export function DataTableToolbar<TData>({ table, filters, filterValues }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between pl-2 pr-2">
      <div className="flex flex-1 items-center space-x-2">
        {
          filters.map(filter => {
            const value = filterValues?.find(v => v.id === filter.column)
            return (<DataTableFilterComponent key={filter.column} table={table} filter={filter} value={value?.value} />)
          })
        }
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}