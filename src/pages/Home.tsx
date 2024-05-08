import Container from "../components/Container";
import AddTaskForm from "../components/AddTaskForm";
import ListTasks from "../components/Tasks/ListTasks";
import AddButton from "../components/AddButton";

export default function Home() {
  return (
    <>
      <Container>
        <>
          <AddTaskForm />
          <ListTasks />

          <div style={{ position: "absolute", bottom: "5%", right: "5%" }}>
            <AddButton />
          </div>
        </>
      </Container>
    </>
  );
}
