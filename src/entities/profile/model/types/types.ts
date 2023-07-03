import { type Country, type Currency } from "@shared/constants/common"

export interface ProfileType {
  name: string
  surname: string
  age: number
  currency: Currency
  country: Country
  city: string
  username: string
  avatar: string
}

export interface ProfileScheme {
  data?: ProfileType
  isLoading?: boolean
  readonly?: boolean
  error?: string
}
