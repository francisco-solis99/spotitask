import { useState, useEffect } from 'react';
import { Task, TasksList } from "../types/types";
import { Stack, Input, FormLabel, Button, Select, Switch } from '@chakra-ui/react'
import { useListsTasksContext } from '../hooks/useListTasksContext';

export default function TaskForm({ mode = 'add', task, callback }: { mode: 'edit' | 'add', task: Task | null, callback: Function }) {
  const isEditMode = mode === 'edit';
  const [inputName, setInputName] = useState(isEditMode ? task?.name : '');
  const [dateFormated, setDateFormated] = useState('')
  const { lists } = useListsTasksContext()


  useEffect(() => {
    if (!isEditMode || !task) return;
    const dateToRender = task?.date ? new Date(task.date?.toString()) : new Date();
    const year = dateToRender.getFullYear();
    const month = String(dateToRender.getMonth() + 1).padStart(2, '0'); // Add leading zero for single digit months
    const day = String(dateToRender.getDate()).padStart(2, '0'); // Add leading zero for single digit days
    const formatedDate = `${year}-${month}-${day}`
    setDateFormated(formatedDate)
  }, [])





  const handleSubmiTaskForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.currentTarget))
    const { name, date, level, list, priority } = formData
    console.log({ list })
    const dateTask = date === '' ? new Date().toLocaleDateString('en') : new Date(date.toString()).toLocaleDateString();
    const isPrincipal = priority === ''
    callback({
      taskInfo: {
        name,
        date: dateTask,
        level,
        list,
        isPrincipal: isPrincipal
      }
    })
    e.currentTarget?.reset()
    setInputName('');
  }

  return (
    <form key={`task-form-${mode}`} id={`task-form-${mode}`} onSubmit={handleSubmiTaskForm}>
      <Stack spacing={3}>
        <FormLabel>
          <span>Task name:</span>
          <Input
            name='name'
            isRequired
            type='text'
            placeholder='Workout...'
            size='sm'
            color='white'
            focusBorderColor='teal.400'
            borderRadius=".5em"
            _placeholder={{ opacity: 0.5, color: 'gray.300' }}
            defaultValue={inputName}
            onChange={(e) => setInputName(e.target.value)} />
        </FormLabel>
        <FormLabel>
          <span>Task date</span>
          <Input
            defaultValue={dateFormated}
            name='date'
            type='date'
            placeholder='Select Date and Time'
            size='sm'
            focusBorderColor='teal.400'
            _placeholder={{ opacity: 0.5, color: 'gray.300' }}
            color='white'
            borderRadius=".5em" />
        </FormLabel>
        <FormLabel>
          <span>Task level</span>
          <Select
            defaultValue={isEditMode ? task?.level : ''}
            name='level'
            size='sm'
            borderRadius=".5em"
            focusBorderColor='teal.400'
          >
            <option style={{ color: 'black' }} defaultValue='' disabled>Select level</option>
            <option style={{ color: 'black' }} defaultValue='easy'>Easy</option>
            <option style={{ color: 'black' }} defaultValue='medium'>Medium</option>
            <option style={{ color: 'black' }} defaultValue='hard'>Hard</option>
          </Select>
        </FormLabel>
        <FormLabel>
          <span>Task list</span>
          <Select
            defaultValue={isEditMode ? task?.list : ''}
            name='list'
            size='sm'
            borderRadius=".5em"
            focusBorderColor='teal.400'
          >
            <option style={{ color: 'black' }} defaultValue='' disabled>Select list</option>
            {
              lists.map((list: TasksList) => {
                return (
                  <option key={`opt-list-${list.id}`} style={{ color: 'black' }} defaultValue={list.id}>{list.name}</option>
                )
              })
            }
          </Select>
        </FormLabel>
        <FormLabel>
          <span>It is priority?</span>
          <Switch
            defaultChecked={isEditMode ? task?.isPrincipal : false}
            name='priority'
            style={{ marginLeft: '0.75em' }}
            colorScheme='teal'
            id='priority' />
        </FormLabel>
        <Button
          type="submit"
          colorScheme="teal"
          variant="solid"
        >
          {isEditMode ? 'Edit' : 'Add'}
        </Button>
      </Stack>
    </form>
  )
}
