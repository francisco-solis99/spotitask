import { Card, CardHeader, Tag, Heading } from '@chakra-ui/react'
import { TasksList } from '../types/types'

export default function List({ listInfo, numTasks }: { listInfo: TasksList, numTasks: number }) {
  const { name } = listInfo

  return (
    <Card bgGradient='linear(to-r, transparent, green.200)' position={'relative'}>
      <CardHeader>
        <Heading as='h2' size='md'> {name} </Heading>
        <Tag marginBlockStart={'1em'} size={'sm'} variant='solid' colorScheme='teal'>{numTasks ?? 0} tasks</Tag>
      </CardHeader>
    </Card>
  )
}
