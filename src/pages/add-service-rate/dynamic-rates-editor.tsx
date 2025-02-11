import { useCallback, useState } from 'react'
import { CirclePlus, CircleX } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { DynamicRateData, DynamicRateUnit } from '@/types/entities'

export interface DynamicRateEditorProps {
  label: string
  rate: DynamicRateData
  onChange: (rate: DynamicRateData) => void
}

const RateEditor = ({ rate, index, onChange, onRemove }: { rate: DynamicRateUnit, index: number, onChange: (index: number, key: keyof DynamicRateUnit, value: string) => void, onRemove: (index: number) => void }) => {
  return (
    <div className="flex items-center gap-2">
      <Input
        type="number"
        value={rate.units}
        onChange={(e) => onChange(index, 'units', e.target.value)}
        className="w-16 text-center"
      />
      <span>units per</span>
      <Input
        type="number"
        value={rate.rate}
        onChange={(e) => onChange(index, 'rate', e.target.value)}
        className="w-16 text-center"
      />
      <span>with modifier</span>
      <Input
        type="text"
        value={rate.modifier}
        onChange={(e) => onChange(index, 'modifier', e.target.value)}
        className="w-24"
      />
      <Button variant="ghost" size="icon" onClick={() => onRemove(index)}>
        <CircleX />
      </Button>
    </div>
  )
}

const RateExample = ({ rate, index, rates, totalUnits }: { rate: DynamicRateUnit, index: number, rates: DynamicRateUnit[], totalUnits: number }) => {
  const noname = 'unnamed'

  const usedUnits = rates.slice(0, index).reduce((sum, r) => sum + r.units, 0)
  const availableUnits = Math.max(0, totalUnits - usedUnits)
  if (availableUnits <= 0) return null

  const effectiveUnits = Math.min(rate.units, availableUnits)
  const totalPrice = effectiveUnits * rate.rate

  return (
    <div className="inline-block">
      Service: <span className={`font-semibold ${rate.modifier ? 'text-primary' : ''}`}>{rate.modifier || noname}.</span>
      Units: <span className="font-semibold text-primary">{effectiveUnits}.</span>
      Price: <span className="font-semibold text-primary">{totalPrice}.</span>
    </div>
  )
}

// todo - add dynamic rate validation

const DynamicRatesEditor = ({ label, rate, onChange }: DynamicRateEditorProps) => {
  const { baseRate, rates } = rate
  const [totalUnits, setTotalUnits] = useState(100)

  const handleBaseRateChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ baseRate: Number(e.target.value), rates })
  }, [rates, onChange])

  const handleAddRate = useCallback(() => {
    onChange({ baseRate, rates: [...rates, { units: 0, rate: 0, modifier: '' }] })
  }, [rates, baseRate, onChange])

  const handleRateChange = useCallback(
    (index: number, key: keyof DynamicRateUnit, value: string) => {
      const newRates = rates.map((r, i) =>
        i === index ? { ...r, [key]: key === 'units' || key === 'rate' ? Number(value) : value } : r
      )
      onChange({ baseRate, rates: newRates })
    },
    [rates, baseRate, onChange]
  )

  const handleRateRemove = useCallback(
    (index: number) => {
      const newRates = rates.filter((_, i) => i !== index)
      onChange({ baseRate, rates: newRates })
    },
    [rates, baseRate, onChange]
  )

  return (
    <>
      <div className='grid grid-cols-4 gap-4'>
        <div className="flex flex-col gap-2">
          <Label>{rates.length > 0 ? 'Each additional unit per' : label}</Label>
          <Input
            type="number"
            value={baseRate}
            onChange={handleBaseRateChange}
          />
        </div>
        <div></div>
        <div className="flex flex-col gap-2">
          {
            rates.length > 0 ? (
              <>
                <Label>
                  Dynamic <span className="font-semibold text-primary">{label}</span> example. Units:
                </Label>
                <Input
                  type="number"
                  value={totalUnits}
                  onChange={(e) => setTotalUnits(Number(e.target.value))}
                />
              </>
            ) : null
          }
        </div>
        <div></div>
        {
          rates.map((rate, index) => (
            <>
              <div className="flex flex-col col-span-2 gap-2">
                <RateEditor rate={rate} index={index} onChange={handleRateChange} onRemove={handleRateRemove} />
              </div>
              <div className="flex flex-col col-span-2 gap-2">
                <RateExample rate={rate} rates={rates} index={index} totalUnits={totalUnits} />
              </div>
            </>
          ))
        }
        <div className="flex flex-col gap-2 col-span-2">
          <Button variant='ghost-primary' onClick={handleAddRate} className="self-start">
            <CirclePlus />
            Add Dynamic Rate
          </Button>
        </div>
        <div className="flex flex-col gap-2 col-span-2">
          {
            rates.length > 0 ?
              <RateExample
                rate={{
                  modifier: `Basic ${label}`,
                  units: Math.max(0, totalUnits - rates.reduce((sum, r) => sum + r.units, 0)),
                  rate: baseRate
                }}
                rates={rates}
                index={rates.length + 1}
                totalUnits={totalUnits}
              />
              : null
          }
        </div>
        <div></div>
      </div>
    </>
  )
}

export default DynamicRatesEditor