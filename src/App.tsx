import { Routes, Route } from "react-router-dom";
import { TasksProvider } from "./context/TasksContext";
import { ListsProvider } from "./context/TasksListsContext";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Lists from "./pages/Lists";
import ListDetail from "./pages/ListDetail";
import Search from "./pages/Search";

import Searcher from "./components/Searcher/Searcher";
import Container from "./components/Container";
import Menu from "./components/Menu";

import "./App.css";

function App() {
  return (
    <ListsProvider>
      <TasksProvider>
        <div className="app__wrapper">
          <header className="app__header">
            <Container>
              <Searcher />
            </Container>
          </header>
          <Menu />
          <main className="app__content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/lists" element={<Lists />} />
              <Route path="/lists/:listId" element={<ListDetail />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </main>
        </div>
      </TasksProvider>
    </ListsProvider>
  );
}

export default App;
