export interface BtnProps {
  cls?: string, 
  title: string, 
  link?: string,
  onClick?: (evt: React.MouseEvent) => void
}

export interface FormProps {
  children: React.ReactNode,
  value?: string
  onSubmit: (evt: React.FormEvent) => void,
  onChange?: (evt: React.ChangeEvent) => void
}

export interface IPost {
  id: number, 
  content: string, 
  created?: number
}

export interface SinglePostProps {
  id?: number,
  content?: string,
  created?: number,
  onSwitch: () => void,
}

export interface UNP {
  post: IPost | null,
  setPost: React.Dispatch<React.SetStateAction<IPost | null>>,
  method?: 'POST' | 'PUT'
}

export type CloseProps = Partial<BtnProps>

export type SI = React.Dispatch<React.SetStateAction<string | null>>