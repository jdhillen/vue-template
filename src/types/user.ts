// =================================================================================================
// ---- User Types ----
// =================================================================================================

export interface User {
  id: number
  name: string
  email: string
  avatar?: string
  createdAt: string
  updatedAt: string
}

export interface UserPreferences {
  theme: Theme
  language: string
  notifications: boolean
}

export type Theme = 'light' | 'dark' | 'auto'