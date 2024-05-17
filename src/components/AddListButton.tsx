import { useListsTasksContext } from '../hooks/useListTasksContext';
import ListForm from './ListForm';
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
import { TasksList } from '../types/types';

export default function AddListButton() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { addList } = useListsTasksContext();

  const handleSubmitCreateList = ({ listInfo }: { listInfo: TasksList }) => {
    console.log({ listInfo });
    addList({ ...listInfo });
    onClose()
  };

  return (
    <>
      <Button
        leftIcon={<CreateIcon />}
        colorScheme="green"
        bg={"green.500"}
        variant="solid"
        title="Create a new list"
        onClick={onOpen}
      >
        Add List
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px)'
        />
        <ModalContent>
          <Box bg="#2d3748" p=".75em" color={'#fff'}>
            <ModalHeader>Create a new list</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ListForm onCreateList={handleSubmitCreateList} />
            </ModalBody>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}
