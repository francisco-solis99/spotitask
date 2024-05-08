import ListTasks from './components/Tasks/ListTasks';
import Searcher from './components/Searcher/Searcher';
import Container from './components/Container';
import Menu from './components/Menu';
import AddTaskForm from './components/AddTaskForm';
import './App.css';
/*
  Task
    id: number
    name: string
    done: boolean
    date: date
    level: string(easy, medium, hard)
    list: string(List)
    isPrincipal: boolean

  List
    id: number
    name: string
*/

function App() {
  return (
    <>
      <div className='app__wrapper'>
        <header className='app__header'>
          <Container>
            <Searcher />
          </Container>
        </header>
        <Menu />
        <main className='app__content'>
          <Container>
            <AddTaskForm />
            <ListTasks />
          </Container>
        </main>
      </div>
    </>
  );

}

export default App;
