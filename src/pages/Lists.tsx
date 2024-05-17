// import ListTasks from '../components/Tasks/ListTasks';
import ListsOfLists from "../components/ListsOfLists";
import AddListButton from "../components/AddListButton";
import Container from '../components/Container';
import { Box, Heading } from '@chakra-ui/react'

export default function Lists() {
  return (
    <div>
      <Container>
        <>
          <Heading as="h1" size="xl" >Lists</Heading>
          <Box maxW='5xl' marginBlock="2em">
            <ListsOfLists />
          </Box>
          <Box style={{ position: "fixed", bottom: "5%", right: "5%" }}>
            <AddListButton />
          </Box>
        </>
      </Container>
    </div>
  );
}
