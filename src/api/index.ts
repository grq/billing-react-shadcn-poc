import { DataTableState } from '@/components/data-table'
import { AidboxRpc, GetEncountersParams, GetVisitsResponse, ServiceRate } from '@/types/entities'

export const AIDBOX_API = 'http://localhost:8080'

export const get = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'x-auth-method': 'aspxauth'
      }
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

const post = async <T>(url: string, body: T) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'x-auth-method': 'aspxauth'
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const fetchVisits = async (props: DataTableState): Promise<GetVisitsResponse> => {
  const externalUrl = `${AIDBOX_API}/fhir/Organization/96010/rpc?_format=json&_m=aidbox.billing.rpc/get-encounters`
  const body: AidboxRpc<GetEncountersParams> = {
    method: 'aidbox.billing.rpc/get-encounters',
    params: {
      filters: {},
      sorting: {
        path: [props.sortPath],
        dir: props.sortDir
      },
      pagination: {
        'page-num': props.pageIndex,
        'per-page': props.pageSize
      }
    },
  }

  props.filterValues?.forEach(filter => {
    body.params.filters[filter.id] = filter.value
  })

  return post(externalUrl, body)
}

export const fetchServiceRates = async (): Promise<ServiceRate[]> => {
  const externalUrl = `${AIDBOX_API}/fhir/Organization/96010/rpc?_format=json&_m=billing.rpc/get-rates`
  const body = {
    method: 'billing.rpc/get-rates',
    params: {
      'as-of-date': '2025-02-12'
    }
  }

  const result = await post(externalUrl, body)

  return result.result.rates
}

export const addServiceRate = async (params: unknown): Promise<ServiceRate[]> => {
  const externalUrl = `${AIDBOX_API}/fhir/Organization/96010/rpc?_format=json&_m=aidbox.billing.rpc/save-charge-item-def`
  const body = {
    method: 'aidbox.billing.rpc/save-charge-item-def',
    params
  }

  return post(externalUrl, body)
}

export const fetchUserInfo = async () => {
  const externalUrl = `${AIDBOX_API}/auth/userinfo`

  return get(externalUrl)
}