import { DataTableFilter } from '@/components/data-table'

export const filters: DataTableFilter[] = [{
  title: 'Dates',
  column: 'start',
  type: 'daterange',
  from: 'date-from',
  to: 'date-to'
}, {
  title: 'Status',
  column: 'status',
  type: 'singleselect',
  options: [{
    value: 'Billable',
    label: 'Billable'
  },
  {
    value: 'not-billable',
    label: 'Not Billable'
  }]
}, {
  title: 'Exceptions',
  column: 'visits-type',
  type: 'singleselect',
  options: [{
    value: 'all',
    label: 'All Visits'
  },
  {
    value: 'with-exceptions',
    label: 'Visits with Exceptions'
  },
  {
    value: 'without-exceptions',
    label: 'Visits without Exceptions'
  }]
}, {
  title: 'Payer',
  column: 'payor-service',
  type: 'singleselect',
  options: []
}]