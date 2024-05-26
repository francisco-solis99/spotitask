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
  Box
} from '@chakra-ui/react'
import { RemoveIcon } from '../components/icons/RemoveIcon';


export default function DeleteListButton({ deleteListCb }: { deleteListCb: Function }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleDeleteList = () => {
    deleteListCb();
    onClose()
  };


  return (
    <>
      <Button
        leftIcon={<RemoveIcon />}
        bg={'transparent'}
        color={'red.300'}
        variant="ghost"
        _hover={{ color: 'red.500' }}
        title="Delete list"
        onClick={onOpen}
      >Delete
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px)'
        />
        <ModalContent>
          <Box bg="#2d3748" color={'#fff'}>

            <ModalHeader>Remove List</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>Are you sure to remove the list and the tasks inside?</p>
            </ModalBody>

            <ModalFooter>
              <Button
                variant='outline'
                color={'red.400'}
                border={'1px solid'}
                borderColor={'red.400'}
                mr={3}
                onClick={onClose}
                _hover={{ bg: "rgba(255, 87, 51, 0.12)" }}
              >
                Cancel
              </Button>
              <Button
                variant='outline'
                color={'teal.400'}
                border={'1px solid'}
                borderColor={'teal.400'}
                onClick={handleDeleteList}
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
