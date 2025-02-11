import { Table } from '@tanstack/react-table'
import { CalendarIcon } from 'lucide-react'
import { DateRange } from 'react-day-picker'

import { Calendar } from '../ui/calendar'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'

interface DataTableDateFilterProps<TData> {
  table: Table<TData>
  title?: string
  onChange: (value?: DateRange) => void
  value?: DateRange // todo - generic
}

export function DataTableDateFilter<TData>({ title, value, onChange }: DataTableDateFilterProps<TData>) {

  const handleChange = (newDate: DateRange | undefined) => onChange(newDate)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {title}
          {value?.from && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge variant="secondary" className="rounded-sm px-1 font-normal">
                {value.from.toLocaleDateString()}
                {value.to && ' - '}
                {value.to?.toLocaleDateString()}
              </Badge>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={value?.from}
          selected={value}
          onSelect={handleChange}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  )
}