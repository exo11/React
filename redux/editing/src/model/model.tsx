export interface IObj {
  id: string, 
  name: string, 
  price: number | string
} 

export interface IEdit {
  id: string, 
  view: boolean, 
  filter: string
}

export interface ItemsProps {
  items: IObj[],
  onEdit: (evt: React.MouseEvent) => void,
  onRemove: (evt: React.MouseEvent) => void
}

export interface BtnProps {
  children: string | React.ReactNode
  cls?: string,
  type?: 'button' | 'submit' | 'reset',
  id?: string,
  onClick?: (evt: React.MouseEvent) => void
}