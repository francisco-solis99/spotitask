export type Task = {
    id: number
    name: string
    done: boolean
    date?: string
    level?: string
    list?: number
    isPrincipal?: boolean
}

export type TasksList = {
  id: number
  name: string
  // tasksIds: number[]
}