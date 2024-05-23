import { Card, CardHeader, Tag, Heading, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { TasksList } from '../types/types'

export default function List({ listInfo, numTasks }: { listInfo: TasksList, numTasks: number }) {
  const { name } = listInfo

  return (
    <LinkBox>
      <Card bgGradient='linear(to-r, transparent, green.200)' position={'relative'}>
        <CardHeader>
          <Heading as='h2' size='md'>
            <LinkOverlay as={Link} to={`/lists/${name.toLowerCase()}`}>
              {name}
            </LinkOverlay>
          </Heading>
          <Tag marginBlockStart={'1em'} size={'sm'} variant='solid' colorScheme='teal'>{numTasks ?? 0} tasks</Tag>
        </CardHeader>
      </Card>
    </LinkBox>
  )
}
