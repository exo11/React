import { createContext } from 'react'
import { type IUser } from '../model/model'

export const UserContext = createContext<IUser | null>(null)