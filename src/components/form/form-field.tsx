import { useCallback, forwardRef, useImperativeHandle, useState } from 'react'

import { FormFieldValue, IFormField } from './types'

import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Label } from '@/components/ui/label'

// todo - separated form field types

export const FormField = forwardRef(({ field, value, onChange }: { field: IFormField, value: FormFieldValue, onChange: (id: string, value: string) => void }, ref) => {
  const { id, label, required, options, type = 'text' } = field

  const [valid, setValid] = useState<boolean | null>(null)

  const validate = useCallback((val: FormFieldValue | undefined) => {
    val = val ?? value
    if (required) {
      if (!val) {
        setValid(false)
        return false
      }
    }
    setValid(true)
    return true
  }, [required, value])

  useImperativeHandle(ref, () => ({ validate }))

  const handleInputChange = useCallback((e: React.SyntheticEvent<HTMLInputElement>) => {
    const val = (e.target as HTMLInputElement).value
    validate(val)
    onChange(id, val)
  }, [id, onChange, validate])

  const handleInputBlur = useCallback((e: React.SyntheticEvent<HTMLInputElement>) => {
    const val = (e.target as HTMLInputElement).value
    validate(val)
  }, [validate])

  const handleOpenChange = useCallback((open: boolean) => {
    if (!open) {
      validate(value)
    }
  }, [validate, value])

  const handleValueChange = useCallback((val: string) => {
    validate(val)
    onChange(id, val)
  }, [id, onChange, validate])

  if (type === 'select') {
    return (
      <div className="flex flex-col gap-2">
        <Label className={valid === false ? 'text-red-500' : ''} htmlFor={id}>{label} {required ? '*' : ''}</Label>
        <Select onOpenChange={handleOpenChange} onValueChange={handleValueChange}>
          <SelectTrigger>
            <SelectValue placeholder={`Select a ${label}`} />
          </SelectTrigger>
          <SelectContent>
            {
              options?.map(o => (
                <SelectItem value={o.value.toString()}>{o.title}</SelectItem>
              ))
            }
          </SelectContent>
        </Select>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <Label className={valid === false ? 'text-red-500' : ''} htmlFor={id}>{label} {required ? '*' : ''}</Label>
      <Input
        id={id}
        type={type}
        value={value as string}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        placeholder={`Enter ${label}`}
        aria-invalid={valid === false}
        className={valid === false ? 'border-red-500 focus:ring-red-500' : ''}
      />
    </div>
  )
})