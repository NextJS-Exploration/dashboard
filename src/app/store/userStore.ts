import { create } from 'zustand'
import { Gender } from '@/app/lib/prisma-client'

type UserData = {
    companyId?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    password: string
    photo: string
    gender: Gender
    address: string
} | null

interface UserState {
  user: UserData
  loading: boolean
  setUser: (user: UserData) => void
  setLoading: (loading: boolean) => void
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user, loading: false }),
  setLoading: (loading) => set({ loading }),
}))