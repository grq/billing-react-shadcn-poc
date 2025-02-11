
import { DataTable, DataTableState, DataTableStateChange } from '../../../components/data-table'

import { columns } from './columns'
import { filters } from './filters'

import { Visit } from '@/types/entities'

interface VisitsTableProps {
  data: Visit[]
  payors: string[]
  state: DataTableState
  isLoading: boolean
  onStateChange: DataTableStateChange
}

const VisitsTable = ({ data, payors, state, isLoading, onStateChange }: VisitsTableProps) => {
  const f = filters.find(f => f.column === 'payor-service')
  if (f) {
    f.options = payors.map(p => ({ value: p, label: p }))
  }
  return (
    <DataTable
      data={data}
      columns={columns}
      state={state}
      isLoading={isLoading}
      onStateChange={onStateChange}
      filters={filters}
    />
  )
}

export default VisitsTable