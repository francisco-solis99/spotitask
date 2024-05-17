import { useParams } from 'react-router-dom';
import { useTasksContext } from '../hooks/useTasksContext';
import { Box, Heading } from '@chakra-ui/react';
import AddListButton from '../components/AddListButton';
import Container from '../components/Container';

export default function ListDetail() {
  const { listId } = useParams()
  const { getTasksByListId } = useTasksContext()






  return (
    <div>
      <Container>
        <>
          <Heading as="h1" size="xl" >Lists()</Heading>
          <Box maxW='5xl' marginBlock="2em">

          </Box>
          <Box style={{ position: "fixed", bottom: "5%", right: "5%" }}>
            <AddListButton />
          </Box>
        </>
      </Container>
    </div>
  )
}
