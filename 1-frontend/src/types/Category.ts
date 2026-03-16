// 1-frontend/src/types/Category.ts

export type CategorySlug = 'roupas' | 'calcados' | 'acessorios' | 'bolsas'

export interface Category {
  id: number
  name: string
  slug: CategorySlug
}
