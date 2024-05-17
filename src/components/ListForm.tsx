import { useState } from 'react';
import { Stack, Input, FormLabel, Button } from '@chakra-ui/react'

export default function ListForm({ onCreateList }: { onCreateList: Function }) {
  const [inputName, setInputName] = useState('');

  const handleSubmitListForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.currentTarget))
    const { name } = formData

    onCreateList({
      listInfo: {
        name,
      }
    })
    e.currentTarget?.reset()
    setInputName('');
  }

  return (
    <form key={`list-form`} id={`list-form`} onSubmit={handleSubmitListForm}>
      <Stack spacing={3}>
        <FormLabel>
          <span>List name:</span>
          <Input
            name='name'
            isRequired
            type='text'
            placeholder='Gym...'
            size='sm'
            color='white'
            focusBorderColor='teal.400'
            borderRadius=".5em"
            _placeholder={{ opacity: 0.5, color: 'gray.300' }}
            defaultValue={inputName}
            onChange={(e) => setInputName(e.target.value)} />
        </FormLabel>
        <Button
          type="submit"
          colorScheme="teal"
          variant="solid"
        >
          Add
        </Button>
      </Stack>
    </form>
  )
}
