export type Task = {
    id: number
    name: string
    done: boolean
    date?: Date
    level?: string
    list?: TasksList[]
    isPrincipal?: boolean
}

export type TasksList = {
  id: number
  name: string
}