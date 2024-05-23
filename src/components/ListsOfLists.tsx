import { SimpleGrid } from "@chakra-ui/react"
import List from "./List"
import { useListsTasks } from "../hooks/useListsTasks"


export default function ListsOfLists() {
  const { lists } = useListsTasks({})

  return (
    <SimpleGrid spacingX={5} spacingY={8} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      {
        lists.length ? (
          lists.map((list: any) => {
            return (
              <List key={`list-${list.id}`} listInfo={list} numTasks={list.tasks.length} />
            )
          })
        ) : (
          <p>No lists created yet</p>
        )
      }
    </SimpleGrid>
  )
}
