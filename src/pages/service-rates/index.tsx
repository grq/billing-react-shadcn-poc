import { useNavigate, useSearchParams } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { ColumnFiltersState } from '@tanstack/react-table'

import { ServiceRatesTable } from './service-rates-table'

import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button'
import { DataTableState } from '@/components/data-table'

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

const ServiceRatesPage = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [state, setState] = useState<DataTableState>(getStateFromParams(searchParams))

  const onClickAddRate = () => {
    navigate('/addservicerate')
  }

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
    setUrlParams(urlParams, state, ['pageIndex', 'pageSize', 'sortPath', 'sortDir'])

    const filters: Record<string, unknown> = {}
    if (state.filterValues) {
      state.filterValues.forEach(f => {
        filters[f.id] = f.value
      })
    }
    setUrlParams(urlParams, filters, [])

    setSearchParams(urlParams)
  }, [state, setSearchParams])

  const handleStateChange = useCallback((newState: Partial<DataTableState>) => {
    setState(prev => ({
      ...prev,
      ...newState
    }))
  }, [])

  return (
    <>
      <PageTitle path={[['Billing'], ['Settings'], ['Service rates', '/servicerates']]} />
      <div className='flex m-5'>
        <Button onClick={onClickAddRate} className='ml-auto'>
          <Plus />
          Add Rate
        </Button>
      </div>
      <ServiceRatesTable
        state={state}
        onStateChange={handleStateChange}
      />
    </>
  )
}

export default ServiceRatesPage
