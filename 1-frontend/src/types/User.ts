// 1-frontend/src/types/User.ts

// Literal Type — só aceita "ADMIN" ou "CUSTOMER"
export type Role = 'ADMIN' | 'CUSTOMER'

export interface Address {
  street: string
  number: string
  city: string
  state: string
  zipCode: string
}

export interface User {
  id: number
  username: string
  email: string
  role: Role
  address?: Address
}
