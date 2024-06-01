import { useRef } from "react";
import {
  Box, CircularProgress, CircularProgressLabel, Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Grid,
  Tag,
} from '@chakra-ui/react'

import Container from "../components/Container";
import ListTasks from "../components/Tasks/ListTasks";
import ActionsButtons from "../components/ActionsButtons";

import { useTasks } from "../hooks/useTasks";
import { Task } from "../types/types";

export default function Home() {
  const { tasks } = useTasks({ querySearch: '' });

  const numTasksDone: number = tasks.filter((task: Task) => task.done).length
  const doneTasksPorcentaje = Number(((numTasksDone * 100) / tasks.length).toFixed(1))
  const progressColor = useRef('')

  if (doneTasksPorcentaje <= 20) progressColor.current = 'red'
  else if (doneTasksPorcentaje > 20 && doneTasksPorcentaje < 60) progressColor.current = 'yellow'
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
                  {numTasksDone}
                </Tag>
              </StatNumber>
              <StatHelpText></StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Tasks Progress</StatLabel>
              <CircularProgress size='80px' thickness='7px' value={doneTasksPorcentaje} color={`${progressColor.current}.400`}>
                <CircularProgressLabel fontSize={'1rem'}>{doneTasksPorcentaje}%</CircularProgressLabel>
              </CircularProgress>
            </Stat>
          </Grid>

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
