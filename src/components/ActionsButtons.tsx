import {
  Flex
} from '@chakra-ui/react'
import AddButton from "../components/AddButton";
import AddListButton from "../components/AddListButton";

export default function ActionsButtons() {
  return (
    <div className='actions__buttons'>
      <Flex flexDirection={{ base: 'row', xl: 'column' }} justifyContent={'center'} gap={'.75em'}>
        <AddButton />
        <AddListButton />
      </Flex>
    </div>
  )
}
