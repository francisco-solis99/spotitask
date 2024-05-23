import Container from "../components/Container";
import ListTasks from "../components/Tasks/ListTasks";
import AddButton from "../components/AddButton";
import {
  Box, Flex, CircularProgress, CircularProgressLabel, Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Grid,
  Tag,
} from '@chakra-ui/react'
import { useTasks } from "../hooks/useTasks";
import { useEffect, useRef, useState } from "react";
import { Task } from "../types/types";
import AddListButton from "../components/AddListButton";

export default function Home() {
  const { tasks } = useTasks({ querySearch: '' });
  const [doneTasksValue, setDoneTasksValue] = useState<number>(0)
  const doneTasksPorcentaje = useRef(0)
  const progressColor = useRef('')

  useEffect(() => {
    console.log({ tasks })
    const numTasksDone = tasks.filter((task: Task) => task.done).length
    setDoneTasksValue(() => numTasksDone)
  }, [tasks])

  doneTasksPorcentaje.current = Number(((doneTasksValue * 100) / tasks.length).toFixed(1))
  if (doneTasksPorcentaje.current <= 20) progressColor.current = 'red'
  else if (doneTasksPorcentaje.current > 20 && doneTasksPorcentaje.current < 60) progressColor.current = 'yellow'
  else progressColor.current = 'green'



  return (
    <>
      <Container>
        <Box maxW='5xl'>
          {/* Statdistics */}
          <Grid templateColumns='repeat(3, 1fr)' justifyItems={'center'} alignItems={'center'} gap={6}>
            <Stat>
              <StatLabel>Total Tasks</StatLabel>
              <StatNumber textAlign={'center'}>
                <Tag marginBlockStart={'.25em'} size={'lg'} variant='solid' colorScheme='teal'>
                  {tasks.length}
                </Tag>
              </StatNumber>
              <StatHelpText></StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Tasks Done</StatLabel>
              <StatNumber textAlign={'center'}>
                <Tag marginBlockStart={'.25em'} size={'lg'} variant='solid' colorScheme='green'>
                  {doneTasksValue}
                </Tag>
              </StatNumber>
              <StatHelpText></StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Tasks Progress</StatLabel>
              <CircularProgress size='80px' thickness='7px' value={doneTasksPorcentaje.current} color={`${progressColor.current}.400`}>
                <CircularProgressLabel fontSize={'1rem'}>{doneTasksPorcentaje.current}%</CircularProgressLabel>
              </CircularProgress>
            </Stat>
          </Grid>

          {/* Tasks */}
          <Box marginBlock={'2em'}>
            <ListTasks tasks={tasks} />
          </Box>

          {/* Buttons actions */}
          <Flex flexDirection={"column"} gap={'.75em'} style={{ position: "fixed", bottom: "5%", right: "5%" }}>
            <AddButton />
            <AddListButton />
          </Flex>
        </Box>
      </Container>
    </>
  );
}
