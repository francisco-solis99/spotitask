// import ListTasks from '../components/Tasks/ListTasks';
import ListTasks from "../components/Tasks/ListTasks";
import AddButton from "../components/AddButton";
import Container from '../components/Container';
import { Box } from '@chakra-ui/react'
import { useTasks } from "../hooks/useTasks";

export default function Tasks() {
  const { tasks } = useTasks({ querySearch: '' });

  return (
    <div>
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
    </div>
  );
}
