import * as React from 'react'
import { Column } from '@tanstack/react-table'
import { PlusCircle } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList
} from '@/components/ui/command'
import {
  Popover, PopoverContent, PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'

export type FilterOption = {
  label: string
  value: string
  icon?: React.ComponentType<{ className?: string }>
}

interface DataTableSingleselectFilterProps<TData, TValue> {
  columnName: string
  column?: Column<TData, TValue>
  title?: string
  options: FilterOption[]
  enableSearch?: boolean
  onChange: (value?: string) => void
  value: string // todo - generic
}

export function DataTableSingleselectFilter<TData, TValue>({ title, options, enableSearch, onChange, value }: DataTableSingleselectFilterProps<TData, TValue>) {

  const handleSelect = (newValue: string) => onChange(newValue !== value ? newValue : undefined)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <PlusCircle className="mr-2 h-4 w-4" />
          {title}
          {value && <Separator orientation="vertical" className="mx-2 h-4" />}
          <Badge variant="secondary" className="rounded-sm px-1 font-normal">
            {value}
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          {enableSearch && <CommandInput placeholder={title} />}
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                return (
                  <CommandItem key={option.value} onSelect={() => handleSelect(option.value)} className={cn({ 'bg-primary/10': option.value === value })}>
                    {option.icon && (
                      <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{option.label}</span>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}