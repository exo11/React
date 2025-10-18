import { type MouseEvent } from "react"

export interface IData {
  date: string, 
  distance: string
}

export interface IElements {
  date: Element | RadioNodeList | null,
  distance: Element | RadioNodeList| null
}

export interface IState {
  inputs: IElements,
  data: IData[]
}

export interface TableProps {
  data: IData[], 
  onDelete: (evt: MouseEvent) => void,
  onEdit: (evt: MouseEvent) => void
}

export interface RowProps {
  data: IData, 
  onDelete: (evt: MouseEvent) => void,
  onEdit: (evt: MouseEvent) => void
}

export interface InputProps {
  label: string, 
  name: string
  pattern: string
}