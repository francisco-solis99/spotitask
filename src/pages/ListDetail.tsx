import { useParams, useNavigate } from 'react-router-dom';

import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';

import Container from '../components/Container';
import AddListButton from '../components/AddListButton';
import AddButton from '../components/AddButton';
import ListTasks from '../components/Tasks/ListTasks';

import { useListsTasks } from '../hooks/useListsTasks';
import { useListsTasksContext } from '../hooks/useListTasksContext';
import DeleteButtonList from '../components/DeleteButtonList';


export default function ListDetail() {
  const { listId } = useParams()
  const { listByListId: list } = useListsTasks({ listId })
  const { deleteList } = useListsTasksContext()
  const navigate = useNavigate();

  const deleteListAction = () => {
    deleteList({ idList: list.id })
    navigate('/lists')
  }

  return (
    <div>
      <Container>
        <Box maxW='5xl'>
          <Flex align={'center'}>
            <Heading as="h1" size="xl" >{list.name}({list.tasks.length})</Heading>
            <Spacer />
            <DeleteButtonList deleteListCb={deleteListAction} />
          </Flex>
          <Box maxW='5xl' marginBlock="2em">
            <ListTasks tasks={list.tasks} />
          </Box>
          <Flex flexDirection={"column"} gap={'.75em'} style={{ position: "fixed", bottom: "5%", right: "5%" }}>
            <AddButton />
            <AddListButton />
          </Flex>
        </Box>
      </Container>
    </div>
  )
}
