import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'

import { Spinner } from '../ui/spinner'

import { DataTablePagination } from './data-table-pagination'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableToolbar } from './data-table-toolbar'
import { FilterOption } from './data-table-filter-singleselect'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export interface DataTableFilter {
  title: string
  column: string
  type: 'daterange' | 'singleselect' | 'multiselect'
  enableSearch?: boolean
  options?: FilterOption[]
  from?: string
  to?: string
  queryKey?: string[]
}

export interface DataTablePagination {
  page: number
  perPage: number
  totalUnits: number
  totalCount: number
  totalPages: number
}

export interface DataTableState {
  pageIndex: number
  pageSize: number
  pageCount: number
  sortPath: string
  sortDir: string
  pagination?: DataTablePagination
  filterValues?: ColumnFiltersState
}

export type DataTableStateChange = (newState: Partial<DataTableState>) => void

export type DataTableColumn<TData, TValue = unknown> = ColumnDef<TData, TValue> & {
  accessorKey?: string
  sortingKey?: string
}

interface DataTableProps<TData, TValue = unknown> {
  columns: DataTableColumn<TData, TValue>[]
  data: TData[]
  filters?: DataTableFilter[]
  state: Partial<DataTableState>
  isLoading?: boolean
  onStateChange: DataTableStateChange
}

export function DataTable<TData, TValue>({ columns, data, filters, state, isLoading, onStateChange }: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState({
    pageIndex: state.pageIndex ?? 1,
    pageSize: state.pageSize ?? 0
  })
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(state.filterValues ?? [])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  columns.forEach(column => {
    if (!column.header || typeof column.header === 'string') {
      const label = column.header ?? ''
      column.header = ({ column: col }) => {
        return (<DataTableColumnHeader column={col} title={label} />)
      }
    }
  })

  const table = useReactTable({
    data,
    columns,
    manualPagination: true,
    manualSorting: true,
    manualFiltering: true,
    pageCount: state.pageCount,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: updater => {
      const newSorting = typeof updater === 'function' ? updater(sorting) : updater
      setSorting(newSorting)
      let sortPath = newSorting[0]?.id
      if (sortPath) {
        const col = columns.find((c: DataTableColumn<TData, TValue>) => c.accessorKey === sortPath)
        sortPath = col?.sortingKey ?? sortPath
      }

      onStateChange({
        sortPath: sortPath,
        sortDir: newSorting[0]?.desc ? 'desc' : 'asc'
      })
    },
    onPaginationChange: updater => {
      const newPagination = typeof updater === 'function' ? updater(pagination) : updater
      setPagination(newPagination)
      onStateChange({
        pageIndex: newPagination.pageIndex,
        pageSize: newPagination.pageSize
      })
    },
    onColumnFiltersChange: (updater) => {
      const newValues = typeof updater === 'function' ? updater(columnFilters) : updater
      const filterValues = newValues
      setColumnFilters(filterValues)
      onStateChange({ ...state, filterValues })
    },
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues()
  })

  return (
    <div className="space-y-4">
      <DataTableToolbar table={table} filters={filters ?? []} filterValues={state.filterValues} />
      {

        isLoading ?
          <div className="absolute flex justify-center items-center h-40 w-full">
            <Spinner className="w-10 h-10" />
          </div> : null
      }
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          {<TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          }
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  )
}