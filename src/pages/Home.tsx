import Container from "../components/Container";
import ListTasks from "../components/Tasks/ListTasks";
import AddButton from "../components/AddButton";
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Container>
        <>
          <Box maxW='5xl'>
            <ListTasks />
          </Box>
          <Box style={{ position: "fixed", bottom: "5%", right: "5%" }}>
            <AddButton />
          </Box>
        </>
      </Container>
    </>
  );
}
