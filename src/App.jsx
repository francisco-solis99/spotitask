import './App.css';

import ListTasks from './components/Tasks/ListTasks';
import Searcher from './components/Searcher/Searcher';

function App() {
  return (
    <>
    <main className='container'>
      <header>

      </header>
      <Searcher/>
      <ListTasks/>
    </main>
    </>
  );

}

export default App;
