import { useCallback, useRef, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { AlertCircle, Loader2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import DynamicRatesEditor from './dynamic-rates-editor'
import PlacesOfService from './places-of-service'

import { Button } from '@/components/ui/button'
import { FormFieldValue, IFormField } from '@/components/form/types'
import { FormField } from '@/components/form/form-field'
import { addServiceRate } from '@/api'
import { DynamicRateData } from '@/types/entities'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const copayTypes = [
  { title: 'No copay', value: 'no-copay' },
  { title: 'Copay Type: Per Diem', value: 'per-diem' },
  { title: 'Copay Type: Hourly', value: 'per-hour' },
  { title: 'Copay Type: Percentage', value: 'percentage' }
]

const claimTypes = [
  { title: 'Professional', value: 'professional' },
  { title: 'Institutional', value: 'institutional' }
]

const rollupTypes = [
  { title: 'Roll Up Type: Default', value: 'default' },
  { title: 'Roll Up Type: Per Diem', value: 'per-diem' }
]

const formFields: (IFormField | null)[] = [
  { id: 'evv-identifier', label: 'EVV Identifier', required: true },
  { id: 'event-code', label: 'Event Code' },
  { id: 'effective-date', label: 'Effective Date', type: 'date', required: true },
  null,
  { id: 'service', label: 'Service', required: true },
  { id: 'modifier', label: 'Modifier' },
  { id: 'revcode', label: 'Revcode' },
  { id: 'description', label: 'Description' },
  { id: 'payor', label: 'Payer' },
  { id: 'single-program', label: 'Program' },
  { id: 'member-id', label: 'Member ID' },
  { id: 'tags', label: 'Tags' },
  { id: 'copay-type', label: 'Copay Type', type: 'select', options: copayTypes },
  { id: 'copay-rate', label: 'Copay Rate', type: 'number' },
  null,
  null,
  { id: 'claim-type', label: 'Claim Type', required: true, type: 'select', options: claimTypes },
  { id: 'roll-up-type', label: 'Rollup Type', type: 'select', options: rollupTypes },
  null,
  { id: 'place-of-service', label: 'Place of Service', required: true, type: 'select', options: PlacesOfService }
]

const getRateData = (rate: DynamicRateData) => {
  const { baseRate, rates } = rate
  const BaseModifierName = 'base'
  if (!rates.length) {
    if (baseRate) {
      return {
        'type': 'static-rate',
        'static-rate': baseRate
      }
    } else {
      return {
        'type': 'no'
      }
    }
  } else {
    return {
      'type': 'dynamic-rate',
      'dynamic-rate': {
        'thresholds': rates.map(r => ({
          'units': r.units,
          'rate': r.rate,
          'modifier': [r.modifier]
        })),
        'each-next': {
          'rate': baseRate,
          'modifier': [BaseModifierName]
        }
      }
    }
  }
}

const ServiceRateForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<Record<string, FormFieldValue>>({})
  const [mainRates, setMainRates] = useState<DynamicRateData>({ baseRate: 0, rates: [] })
  const [weekendRates, setWeekendRates] = useState<DynamicRateData>({ baseRate: 0, rates: [] })
  const [holidayRates, setHolidayRates] = useState<DynamicRateData>({ baseRate: 0, rates: [] })
  const [error, setError] = useState('')

  const fieldRefs = useRef<Record<string, { validate: () => boolean }> | null>(null)

  const { mutate, isPending } = useMutation({
    mutationFn: addServiceRate,
    onSuccess: () => {
      setError('')
      navigate('/servicerates')
    },
    onError: (error) => {
      setError(error?.message ?? JSON.stringify(error))
    }
  })

  const handleInputChange = useCallback((id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }, [])

  const validateForm = useCallback(() => {
    let isValid = true
    Object.values(fieldRefs.current || {}).forEach(ref => {
      if (ref && !ref.validate()) {
        isValid = false
      }
    })
    return isValid
  }, [])

  const handleSave = useCallback(() => {
    if (validateForm()) {
      const data = {
        'rate': getRateData(mainRates),
        'weekend-rate': getRateData(weekendRates),
        'holiday-rate': getRateData(holidayRates)
      }
      const tags = (formData['tags'] as string ?? '').split(',')
      const serviceRate = Object.assign({}, formData, { data, tags })
      mutate(serviceRate)
    }
  }, [validateForm, mainRates, formData, holidayRates, weekendRates, mutate])

  const handleCancel = useCallback(() => {
    setFormData({})
  }, [])

  if (!fieldRefs.current) fieldRefs.current = {}

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {
          formFields.map((field, index) =>
            field ? (
              <FormField
                key={field.id}
                field={field}
                value={formData[field.id]}
                onChange={handleInputChange}
                ref={(el: { validate: () => boolean }) => (fieldRefs.current![field.id] = el)}
              />
            ) : (
              <div key={index * -1} className="flex flex-col gap-2"></div>
            )
          )
        }
      </div>

      <div className="mt-10">
        <DynamicRatesEditor label="Rate" rate={mainRates} onChange={setMainRates} />
      </div>

      <div className="mt-10">
        <DynamicRatesEditor label="Weekend rate" rate={weekendRates} onChange={setWeekendRates} />
      </div>

      <div className="mt-10">
        <DynamicRatesEditor label="Holiday rate" rate={holidayRates} onChange={setHolidayRates} />
      </div>

      <div className="mt-6 flex gap-4">
        <Button disabled={isPending} onClick={handleSave}>
          {isPending && <Loader2 className="animate-spin" />}
          Save
        </Button>
        <Button variant="ghost" onClick={handleCancel}>Cancel</Button>
      </div>

      {
        error && (<Alert variant="destructive" className="mt-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error}
          </AlertDescription>
        </Alert>
        )
      }
    </>
  )
}

export default ServiceRateForm