export type FormFieldValue = string | number | undefined

export interface IFormField {
  id: string
  label: string
  required?: boolean
  type?: 'date' | 'text' | 'select' | 'number'
  options?: { title: string, value: string | number }[]
}