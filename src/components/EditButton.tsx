import TaskForm from './TaskForm';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Button,
} from '@chakra-ui/react'
import { EditIcon } from '../components/icons/EditIcon';
import { Task } from '../types/types';

export default function EditButton({ task, editTaskCb }: { task: Task, editTaskCb: Function }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleEditTask = ({ taskInfo }: { taskInfo: Task }) => {
    editTaskCb({ idTask: task.id, updatedTask: taskInfo });
    onClose()
  };


  return (
    <>
      <IconButton
        size='sm'
        title='Edit task'
        variant='outline'
        isRound={true}
        color={'teal.200'}
        colorScheme='teal.200'
        _hover={{ bg: "rgba(129, 230, 217, 0.12)", svg: { fill: "black" } }}
        aria-label='Edit task'
        icon={<EditIcon />}
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="#2d3748" color="white">
          <DrawerCloseButton />
          <DrawerHeader>Edit the task</DrawerHeader>

          <DrawerBody>
            <TaskForm callback={handleEditTask} mode='edit' task={task} />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

    </>
  )
}
