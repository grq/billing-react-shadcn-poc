import * as React from 'react'
import { Table } from '@tanstack/react-table'
import { useCallback } from 'react'
import { DateRange } from 'react-day-picker'
import { format } from 'date-fns'

import { DataTableDateFilter } from './data-table-filter-date'
import { DataTableMultiselectFilter } from './data-table-filter-multiselect'
import { DataTableSingleselectFilter } from './data-table-filter-singleselect'

import { DataTableFilter } from '.'

export type FilterOption = {
  label: string
  value: string
  icon?: React.ComponentType<{ className?: string }>
}

interface DataTableFilterComponentProps<TData> {
  table: Table<TData>
  filter: DataTableFilter
  value?: unknown
}

export function DataTableFilterComponent<TData>({ table, filter, value }: DataTableFilterComponentProps<TData>) {
  const onFilterChange = useCallback((value: unknown) => {
    if (filter.type === 'daterange') {
      const range = value as DateRange | undefined
      if (filter.from) {
        const from = table.getColumn(filter.from)
        if (from) {
          const val = range && range.from ? format(range.from, 'yyyy-MM-dd') : undefined
          if (val !== from.getFilterValue()) {
            from.setFilterValue(val)
          }
        }
      }
      if (filter.to) {
        const to = table.getColumn(filter.to)
        if (to) {
          const val = range && range.to ? format(range.to, 'yyyy-MM-dd') : undefined
          if (val !== to.getFilterValue()) {
            to.setFilterValue(val)
          }
        }
      }
    } else {
      const column = table.getColumn(filter.column)
      if (column) {
        column.setFilterValue(value)
      }
    }
  }, [filter, table])

  switch (filter.type) {
    case 'daterange': {
      let range: DateRange | undefined
      const fromCol = filter.from ? table.getColumn(filter.from) : undefined
      const from = fromCol ? fromCol.getFilterValue() as string | undefined : undefined
      const toCol = filter.to ? table.getColumn(filter.to) : undefined
      const to = toCol ? toCol.getFilterValue() as string | undefined : undefined
      if (from) {
        range = { from: new Date(from), to: to ? new Date(to) : undefined }
      }
      return <DataTableDateFilter
        table={table}
        title={filter.title}
        value={range}
        onChange={onFilterChange}
      />
    }
    case 'multiselect':
      return <DataTableMultiselectFilter
        enableSearch={filter.enableSearch ?? false}
        columnName={filter.column}
        title={filter.title}
        options={filter.options ?? []}
        value={value as string[] ?? []}
        onChange={onFilterChange}
      />
    case 'singleselect':
      return <DataTableSingleselectFilter
        enableSearch={filter.enableSearch ?? false}
        columnName={filter.column}
        title={filter.title}
        options={filter.options ?? []}
        value={value as string ?? undefined}
        onChange={onFilterChange}
      />
  }
}