import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  ModalFooter,
  IconButton,
  Box
} from '@chakra-ui/react'
import { RemoveIcon } from '../components/icons/RemoveIcon';


export default function DeleteButton({ id, deleteTaskCb }: { id: number, deleteTaskCb: Function }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleDeleteTask = () => {
    deleteTaskCb({ idTask: id });
    onClose()
  };


  return (
    <>
      <IconButton
        size='sm'
        title='Delete task'
        variant='outline'
        isRound={true}
        color={'teal.200'}
        colorScheme='teal.200'
        _hover={{ bg: "rgba(129, 230, 217, 0.12)", svg: { fill: "black" } }}
        aria-label='Delete task'
        icon={<RemoveIcon />}
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px)'
        />
        <ModalContent>
          <Box bg="#2d3748" color={'#fff'}>

            <ModalHeader>Remove Task</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>Are you sure to remove the task?</p>
            </ModalBody>

            <ModalFooter>
              <Button
                variant='outline'
                colorScheme='red'
                mr={3}
                onClick={onClose}
                _hover={{ bg: "rgba(255, 87, 51, 0.12)" }}
              >
                Cancel
              </Button>
              <Button
                variant='outline'
                colorScheme='teal'
                onClick={handleDeleteTask}
                _hover={{ bg: "rgba(0, 128, 128, 0.12)" }}
              >
                Yes
              </Button>
            </ModalFooter>
          </Box>
        </ModalContent>
      </Modal>

    </>
  )
}
