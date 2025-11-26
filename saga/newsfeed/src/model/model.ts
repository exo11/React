export interface INews {
  id: number, 
  text: string,
  date: number,
  comments: {count: number},
  likes: {count: number},
  reposts: {count: number},
  views: {count: number}
}

export interface IState {
  requestId: number,
  news: INews[], 
  loading: boolean,
  error: Error | null,
  end: boolean
}

export interface IAction {
  type: string,
  payload: IState
}