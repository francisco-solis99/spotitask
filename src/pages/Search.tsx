import Container from "../components/Container";
import ListTasks from "../components/Tasks/ListTasks";
import AddButton from "../components/AddButton";
import { Box } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { useTasks } from "../hooks/useTasks";


export default function Search() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState<any>({})
  const { tasks } = useTasks({
    querySearch: search.query ?? '',
    level: search.level ?? 'all',
    priority: search.priority ?? 'all',
    status: search.status ?? 'all'
  });

  useEffect(() => {
    const query = searchParams.get('q') ?? '';
    const level = searchParams.get('level') ?? 'all';
    const priority = searchParams.get('priority') ?? 'all';
    const status = searchParams.get('status') ?? 'all';
    setSearch(() => {
      return {
        query,
        level,
        priority,
        status
      }
    })
  }, [searchParams])


  return (
    <Box marginBlockStart={'4.25em'}>
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
    </Box>
  );
}
