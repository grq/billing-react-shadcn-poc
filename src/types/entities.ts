export interface GetVisitsResponse {
  result: {
    encounters: Visit[]
    pagination: {
      'page': number
      'per-page': number
      'total-units': number
      'total-count': number
      'total-pages': number
    }
    payors: string[]
  }
}

export interface Visit {
  client_l_name: string
  client_f_name: string
  clientName: string
  serviceBeginDate: string
  serviceEndDate: string
  units: number
  service: string
  payer: string
  status: string
  elapsedDays: number
}

export interface ServiceRate {
  identifier: { value: string }[]
  code: { coding: { code: string }[] }
}

export interface DynamicRateUnit {
  units: number
  rate: number
  modifier: string
}

export interface DynamicRateData {
  baseRate: number
  rates: DynamicRateUnit[]
}

export type AidboxRpc<T> = {
  method: string
  params: T
}

export interface GetEncountersParams {
  filters: {
    [field: string]: unknown
  },
  sorting: {
    path: string[]
    dir: string
  },
  pagination: {
    'page-num': number
    'per-page': number
  }
}