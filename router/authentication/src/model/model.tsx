export interface IAuth {
  login: string, 
  password: string
}

export interface IUser {
  id: string, 
  login: string, 
  name: string, 
  avatar: string, 
  token: string
}

export interface INews {
  id: string, 
  title: string, 
  image: string, 
  content: string
}

export interface NavProps {
  onSubmit: (evt: React.FormEvent) => void,
  onClick: () => void
}