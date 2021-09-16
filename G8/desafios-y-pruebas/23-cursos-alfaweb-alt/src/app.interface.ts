export interface VForm {
  validate: () => boolean
  reset: () => void
  resetValidation: () => void
}

export interface VDataTableHeader {
  text: string
  value: string
}
