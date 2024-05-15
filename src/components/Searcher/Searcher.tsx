import {
  Input,
  Button
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useDebounce } from "@uidotdev/usehooks";


export default function Searcher() {
  const [query, setQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const [_, setSearchParams] = useSearchParams();

  // console.log('render searcher');
  const debouncedSearchTerm = useDebounce(query, 300);

  useEffect(() => {
    if (location.pathname !== '/search') return;
    setSearchParams({
      q: query
    })
  }, [debouncedSearchTerm])


  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(query);
    //navigate to the search page
    if (location.pathname !== '/search') {
      navigate(`/search?q=${query}`);
      return;
    }
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
