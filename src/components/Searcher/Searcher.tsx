import {
  Input,
  Button,
  Select,
  Flex,
  FormLabel,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams, useMatch } from 'react-router-dom';
import { useDebounce } from "@uidotdev/usehooks";
import useSearch from '../../hooks/useSearch';


export default function Searcher() {
  const match = useMatch('/search')
  const navigate = useNavigate();
  const [_, setSearchParams] = useSearchParams();

  const { query, level, priority, status, updateLevel, updateQuery, updatePriority, updateStatus } = useSearch({
    initialQuery: '',
    initialLevel: 'all',
    initialPriority: 'all',
    initialStatus: 'all'
  })

  const debouncedSearchTerm = useDebounce(query, 300);

  useEffect(() => {
    if (!match) return;

    setSearchParams({
      q: query,
      level: level,
      priority: priority,
      status: status
    })
  }, [debouncedSearchTerm, level, priority, status])

  const handleChangeLevel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateLevel(e.target.value)
  }

  const handleChangePriority = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updatePriority(e.target.value)
  }

  const handleChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateStatus(e.target.value)
  }


  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(query);
    //navigate to the search page
    if (!match) {
      navigate(`/search?q=${query}&level=${level}&priority=${priority}&status=${status}`);
      return;
    }
  };

  const handleChangeInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => updateQuery(e.target.value);

  return (
    <form onSubmit={handleSearch}>
      <div className='searcher__wrapper'>
        {/* <FormLabel>Search your todos</FormLabel> */}
        <Flex align={'center'} justifyContent={'space-between'} border={'1px solid white'} borderRadius={'0.5em'} borderRight={'0'}>
          <Input type='text' value={query} border={'0'} onChange={handleChangeInputSearch} placeholder='Search' />

          <Button colorScheme='teal' variant='solid' title='Search' type='submit'>
            <span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L16.6569 16.6569M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {/* <span>Search</span> */}
          </Button>
        </Flex>

        {/* Search Filters */}
        {
          match && (
            <Flex marginBlock={'1em'} gap={'1em'}>
              <FormLabel>
                <span>Level</span>
                <Select
                  name='level'
                  size='sm'
                  borderRadius=".5em"
                  focusBorderColor='teal.400'
                  marginBlockStart={'.15em'}
                  onChange={handleChangeLevel}
                >
                  <option style={{ color: 'black' }} defaultValue='' disabled>Select level</option>
                  <option style={{ color: 'black' }} value='all'>All leveles</option>
                  <option style={{ color: 'black' }} value='easy'>Easy</option>
                  <option style={{ color: 'black' }} value='medium'>Medium</option>
                  <option style={{ color: 'black' }} value='hard'>Hard</option>
                </Select>
              </FormLabel>
              <FormLabel>
                <span>Priority</span>
                <Select
                  name='priority'
                  size='sm'
                  borderRadius=".5em"
                  focusBorderColor='teal.400'
                  marginBlockStart={'.15em'}
                  onChange={handleChangePriority}
                >
                  <option style={{ color: 'black' }} defaultValue='' disabled>Select priority</option>
                  <option style={{ color: 'black' }} value='all'>All priorities</option>
                  <option style={{ color: 'black' }} value='yes'>With Priority</option>
                  <option style={{ color: 'black' }} value='no'>No priority</option>
                </Select>
              </FormLabel>
              <FormLabel>
                <span>Status</span>
                <Select
                  name='status'
                  size='sm'
                  borderRadius=".5em"
                  focusBorderColor='teal.400'
                  marginBlockStart={'.15em'}
                  onChange={handleChangeStatus}
                >
                  <option style={{ color: 'black' }} defaultValue='' disabled>Select status</option>
                  <option style={{ color: 'black' }} value='all'>All status</option>
                  <option style={{ color: 'black' }} value='yes'>Done</option>
                  <option style={{ color: 'black' }} value='no'>Undone</option>
                </Select>
              </FormLabel>
            </Flex>
          )
        }

      </div>
    </form >
  );
}
