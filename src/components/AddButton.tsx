import { useTasksContext } from '../hooks/useTasksContext';
import TaskForm from './TaskForm';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box
} from '@chakra-ui/react'
import { CreateIcon } from "./icons/CreateIcon";
import { Task } from '../types/types';

export default function AddButton() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { addTask } = useTasksContext();
  // console.log('render add Task form');

  const handleSubmitCreateTask = ({ taskInfo }: { taskInfo: Task }) => {
    console.log({ taskInfo });
    addTask({ ...taskInfo });
    onClose()
  };

  return (
    <>
      <Button
        leftIcon={<CreateIcon />}
        colorScheme="teal"
        variant="solid"
        title="Create a new task"
        onClick={onOpen}
      >
        Create
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px)'
        />
        <ModalContent>
          <Box bg="#2d3748" p=".75em" color={'#fff'}>
            <ModalHeader>Create a new task</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <TaskForm callback={handleSubmitCreateTask} mode='add' task={null} />
            </ModalBody>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}
