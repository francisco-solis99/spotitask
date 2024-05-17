import Container from "../components/Container";
import ListTasks from "../components/Tasks/ListTasks";
import AddButton from "../components/AddButton";
import { Box } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
// import { useTasksContext } from "../hooks/useTasksContext";


export default function Search() {
  // const { tasks } = useTasksContext();

  const [search, setSearch] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q') ?? '';
    return query;
  })
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const qParam = searchParams.get('q')

    if (qParam === undefined || qParam === null) return;
    setSearch(qParam)
  }, [searchParams])


  return (
    <>
      <Container>
        <>
          <Box maxW='5xl'>
            <ListTasks querySearch={search} />
          </Box>
          <Box style={{ position: "fixed", bottom: "5%", right: "5%" }}>
            <AddButton />
          </Box>
        </>
      </Container>
    </>
  );
}
