import { useEffect, useState } from 'react'

import { fetchServiceRates } from '../../../api'
import { ServiceRate } from '../../../types/entities'
import { DataTable, DataTableState, DataTableStateChange } from '../../../components/data-table'

import { columns } from './columns'

import { Spinner } from '@/components/ui/spinner'

export function ServiceRatesTable({ state, onStateChange }: { state: DataTableState, onStateChange: DataTableStateChange }) {
  const [data, setData] = useState<ServiceRate[]>([])
  const [pageIndex] = useState(0)
  const [pageSize] = useState(10)

  useEffect(() => {
    fetchServiceRates().then(setData)
  }, [pageIndex, pageSize])

  return data ? (
    <DataTable
      data={data}
      columns={columns}
      state={state}
      onStateChange={onStateChange}
      filters={[]}
    />
  ) : (
    <Spinner />
  )
}