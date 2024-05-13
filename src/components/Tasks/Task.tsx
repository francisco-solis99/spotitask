import React, { useRef, useState } from 'react';
import { useTasksContext } from '../../hooks/useTasksContext';
import { type Task } from '../../types/types'
import { Card, CardBody, Stack, ButtonGroup, Flex, Spacer, Checkbox, IconButton, Badge, Tag } from '@chakra-ui/react'
import { StarIcon } from '../icons/StarIcon';
import DeleteButton from '../DeleteButton';
import EditButton from '../EditButton';


const COLOR_LEVEL = {
  'easy': 'green',
  'medium': 'yellow',
  'hard': 'red'
} as const

export default function Task({ id, name, level, list, isPrincipal, date, done = false }: Task) {
  const { editTask } = useTasksContext();
  const [isDone, setIsDone] = useState(done);
  const [isPriority, setIsPriority] = useState(isPrincipal)
  const colorLevelRef = useRef('')



  const handleEditTask = (updatedInfo: {}) => {
    console.log(updatedInfo);
    const updatedTask = {
      id,
      name,
      done,
      date,
      level,
      list,
      isPrincipal,
      ...updatedInfo
    };
    editTask({ idTask: id, updatedTask });
  }

  const handleDoneTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDone(() => e.target.checked);
    handleEditTask({ done: e.target.checked })
  };

  const handleTogglePriorityTask = () => {
    handleEditTask({ isPrincipal: !isPriority })
    setIsPriority(prev => !prev);
  }

  return (
    <li>
      <article style={{ display: 'flex', gap: '1em' }}>
        <Card
          variant='outline'
          style={{ background: 'transparent', width: '100%', color: 'white' }}
        >
          <CardBody>
            <Stack spacing={'.8em'}>
              <Flex minWidth='max-content' alignItems='center'>
                <Stack direction={['column', 'row']} spacing='2em'>
                  {/* <label htmlFor={`task-${id}`}>
                    <input type="checkbox" id={`task-${id}`} onChange={handleDoneTask} checked={isDone} />
                  </label> */}
                  <Checkbox size='md' borderColor='teal.200' colorScheme='teal' onChange={handleDoneTask} checked={isDone} >
                    <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{name}</span>
                  </Checkbox>
                </Stack>
                <Spacer />
                <IconButton
                  title='Priorize task'
                  variant='outline'
                  isRound={true}
                  color={'teal.200'}
                  colorScheme='teal.200'
                  _hover={{ bg: "rgba(129, 230, 217, 0.12)", svg: { fill: "black" } }}
                  aria-label='Priorize task'
                  icon={<StarIcon style={{ fill: isPrincipal ? 'currentColor' : 'none' }} />}
                  onClick={handleTogglePriorityTask}
                />
              </Flex>
              <Flex minWidth='max-content' alignItems='center'>
                <Flex gap='2'>
                  <Tag size='sm' variant='outline' colorScheme='teal'>
                    {date}
                  </Tag>
                  <Badge variant='subtle' colorScheme={colorLevelRef.current}>
                    {level ?? 'easy'}
                  </Badge>
                </Flex>
                <Spacer />
                <ButtonGroup gap='1'>
                  <EditButton task={{ id, name, level, list, isPrincipal, date, done }} />
                  <DeleteButton id={id} />
                </ButtonGroup>
              </Flex>
            </Stack>
          </CardBody>
        </Card>
      </article>
    </li >
  );
}
