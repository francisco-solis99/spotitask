import { useParams } from 'react-router-dom';

import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react';

import Container from '../components/Container';
import AddListButton from '../components/AddListButton';
import AddButton from '../components/AddButton';
import ListTasks from '../components/Tasks/ListTasks';
import { RemoveIcon } from '../components/icons/RemoveIcon';

import { useListsTasks } from '../hooks/useListsTasks';


export default function ListDetail() {
  const { listId } = useParams()
  const { listByListId: list } = useListsTasks({ listId })

  return (
    <div>
      <Container>
        <Box maxW='5xl'>
          <Flex align={'center'}>
            <Heading as="h1" size="xl" >{list.name}({list.tasks.length})</Heading>
            <Spacer />
            <Button
              leftIcon={<RemoveIcon />}
              bg={'transparent'}
              color={'red.300'}
              variant="ghost"
              _hover={{ color: 'red.500' }}
              title="Delete list"
            >Delete
            </Button>
          </Flex>
          <Box maxW='5xl' marginBlock="2em">
            <ListTasks tasks={list.tasks} />
          </Box>
          <Box style={{ position: "fixed", bottom: "5%", right: "5%" }}>
            <AddListButton />
            <AddButton />
          </Box>
        </Box>
      </Container>
    </div>
  )
}
