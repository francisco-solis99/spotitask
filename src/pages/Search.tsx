import Container from "../components/Container";
import ListTasks from "../components/Tasks/ListTasks";
import AddButton from "../components/AddButton";
import { Box } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { useTasks } from "../hooks/useTasks";
// import { useTasksContext } from "../hooks/useTasksContext";


export default function Search() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q') ?? '';
    return query;
  })
  const { tasks } = useTasks({ querySearch: search });

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
            <ListTasks tasks={tasks} />
          </Box>
          <Box style={{ position: "fixed", bottom: "5%", right: "5%" }}>
            <AddButton />
          </Box>
        </>
      </Container>
    </>
  );
}
