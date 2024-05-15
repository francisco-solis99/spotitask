import Container from "../components/Container";
import ListTasks from "../components/Tasks/ListTasks";
import AddButton from "../components/AddButton";
import { Box } from '@chakra-ui/react'
import { useTasksContext } from "../hooks/useTasksContext";

export default function Home() {
  const { tasks } = useTasksContext();

  console.log(tasks)

  return (
    <>
      <Container>
        <>
          <Box maxW='5xl'>
            <ListTasks tasks={tasks} />
          </Box>
          <Box style={{ position: "fixed", bottom: "5%", right: "5%" }}>
            <AddButton />
          </Box>
        </>
      </Container>
    </>
  );
}
