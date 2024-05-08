import {
  Input,
  Button
} from '@chakra-ui/react';
import React, { useState } from 'react';


export default function Searcher() {
  const [query, setQuery] = useState('');
  console.log('render searcher');
  // TODO: UseEffect to change the url when we have pages using query params

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(query);
  };

  const handleChangeInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  return (
    <form onSubmit={handleSearch}>
      <div className='searcher__wrapper'>
        {/* <FormLabel>Search your todos</FormLabel> */}
        <Input type='text' value={query} onChange={handleChangeInputSearch} />
        <Button colorScheme='teal' variant='solid' title='Search' type='submit'>
          <span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L16.6569 16.6569M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          {/* <span>Search</span> */}
        </Button>
      </div>
    </form >
  );
}
