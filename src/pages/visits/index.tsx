import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useCallback, useEffect, useState } from 'react'
import { ColumnFiltersState } from '@tanstack/react-table'

import VisitsTable from '@/pages/visits/visits-table'
import { PageTitle } from '@/components/page-title'
import { fetchVisits } from '@/api'
import { DataTableState } from '@/components/data-table'
import { GetVisitsResponse } from '@/types/entities'

const getStateFromParams = (searchParams: URLSearchParams): DataTableState => {
  const filterValues: ColumnFiltersState = []
  const filters = ['status', 'visits-type', 'payor-service', 'date-from', 'date-to']
  filters.forEach(id => {
    const value = searchParams.get(id)
    if (value) {
      filterValues.push({ id, value: value })
    }
  })
  return {
    pageIndex: Number(searchParams.get('pageIndex') ?? 0),
    pageSize: Number(searchParams.get('pageSize') ?? 10),
    pageCount: 1,
    sortPath: searchParams.get('sort-path') ?? 'start-date',
    sortDir: searchParams.get('sort-dir') ?? 'desc',
    filterValues: filterValues.length ? filterValues : undefined
  }
}

const CacheTime = 1_60_1000

const VisitsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [tableState, setTableState] = useState<DataTableState>(getStateFromParams(searchParams))

  const { data, isFetching, error } = useQuery<GetVisitsResponse, Error>({
    queryKey: [
      'visits',
      tableState.pageIndex,
      tableState.pageSize,
      tableState.sortPath,
      tableState.sortDir,
      ...tableState.filterValues?.map(f => `${f.id}=${f.value}`) || []
    ],
    queryFn: () => fetchVisits(tableState),
    staleTime: CacheTime,
    placeholderData: () => ({
      result: {
        encounters: [],
        pagination: {
          'page': 0,
          'per-page': 10,
          'total-units': 0,
          'total-count': 0,
          'total-pages': 1
        },
        payors: []
      }
    })
  })

  useEffect(() => {
    if (!isFetching && data?.result.pagination) {
      setTableState(prev => ({
        ...prev,
        pageIndex: data.result.pagination.page,
        pageSize: data.result.pagination['per-page'],
        pageCount: data.result.pagination['total-pages']
      }))
    }
  }, [isFetching, data?.result.pagination])

  useEffect(() => {
    const setUrlParams = (newParams: URLSearchParams, newState: object, accept: string[] = []): void => {
      Object.entries(newState).forEach(([key, value]) => {
        const accepted = !accept.length || accept.includes(key)
        if (accepted && value !== undefined) {
          newParams.set(key, String(value))
        }
      })
    }

    const urlParams = new URLSearchParams()
    setUrlParams(urlParams, tableState, ['pageIndex', 'pageSize', 'sortPath', 'sortDir'])

    const filters: Record<string, unknown> = {}
    if (tableState.filterValues) {
      tableState.filterValues.forEach(f => {
        filters[f.id] = f.value
      })
    }
    setUrlParams(urlParams, filters, [])

    setSearchParams(urlParams)
  }, [tableState, setSearchParams])

  const handleStateChange = useCallback((newState: Partial<DataTableState>) => {
    setTableState(prev => ({
      ...prev,
      ...newState
    }))
  }, [])

  return (
    <>
      <PageTitle path={[['Billing'], ['Visits', '/visits']]} />
      <VisitsTable
        data={data?.result.encounters || []}
        payors={data?.result.payors || []}
        state={tableState}
        isLoading={isFetching}
        onStateChange={handleStateChange}
      />
      {/* {isFetching ?
        <Spinner /> :
      } */}
      {error && <p className="text-red-500">Error loading visits.</p>}
    </>
  )
}

export default VisitsPage