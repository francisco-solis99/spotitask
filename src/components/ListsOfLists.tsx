import { SimpleGrid, Skeleton } from '@chakra-ui/react'
import List from "./List"
import { useListsTasks } from "../hooks/useListsTasks"


export default function ListsOfLists() {
  const { lists, loading } = useListsTasks({})
  return (
    <SimpleGrid spacingX={5} spacingY={8} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      {
        loading && (
          <>
            <Skeleton isLoaded={!loading}>
              <List listInfo={{ id: 0, name: 'Skeleton0' }} numTasks={0} />
            </Skeleton>
            <Skeleton isLoaded={!loading}>
              <List listInfo={{ id: 1, name: 'Skeleton1' }} numTasks={0} />
            </Skeleton>
            <Skeleton isLoaded={!loading}>
              <List listInfo={{ id: 2, name: 'Skeleton2' }} numTasks={0} />
            </Skeleton>
            <Skeleton isLoaded={!loading}>
              <List listInfo={{ id: 3, name: 'Skeleton3' }} numTasks={0} />
            </Skeleton>
          </>
        )
      }
      {
        !loading && lists.length === 0 && <p>No lists created yet</p>
      }
      {
        lists.length > 0 && (
          lists.map((list: any) => {
            return (
              <List key={`list-${list.id}`} listInfo={list} numTasks={list.tasks.length} />
            )
          })
        )
      }
    </SimpleGrid>
  )
}
