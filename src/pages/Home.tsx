import {
  Box,
} from '@chakra-ui/react'

import Container from "../components/Container";
import ListTasks from "../components/Tasks/ListTasks";
import ActionsButtons from "../components/ActionsButtons";

import { useTasks } from "../hooks/useTasks";
import { Task } from "../types/types";
import Stadistics from "../components/Stadistics";

export default function Home() {
  const { tasks } = useTasks({ querySearch: '' });
  const numTasksDone = tasks.filter((task: Task) => task.done).length;

  return (
    <>
      <Container>
        <Box maxW='5xl'>
          {/* Statdistics */}
          <Stadistics total={tasks.length} rest={numTasksDone} />

          {/* Tasks */}
          <Box marginBlock={'2em'}>
            <ListTasks tasks={tasks} />
          </Box>

          {/* Buttons actions */}
          <ActionsButtons />
        </Box>
      </Container>
    </>
  );
}
