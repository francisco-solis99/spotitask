import { SimpleGrid } from "@chakra-ui/react"
import { useListsTasksContext } from "../hooks/useListTasksContext"
import { TasksList } from "../types/types"
import List from "./List"

export default function ListsOfLists() {
  const { lists } = useListsTasksContext()


  return (
    <SimpleGrid spacingX={5} spacingY={8} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      {
        lists.length ? (
          lists.map((list: TasksList) => {
            return (
              <List key={`list-${list.id}`} listInfo={list} numTasks={0} />
            )
          })
        ) : (
          <p>No lists founded</p>
        )
      }
    </SimpleGrid>
  )
}
