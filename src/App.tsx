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
import { Box } from "@chakra-ui/react";
// import { useRef } from "react";
import useToggle from "./hooks/useToggle";

function App() {
  const { elementToToggle, openElement, closeElement } = useToggle()

  return (
    <ListsProvider>
      <TasksProvider>
        <div className="app__wrapper">
          <header className="app__header">
            <Container>
              <div className="header__wrapper">
                <button onClick={openElement} className="menu__open">
                  <svg width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" /></svg>
                </button>
                <Box className="searcher__wrapper">
                  <Searcher />
                </Box>
              </div>
            </Container>
          </header>
          <Menu ref={elementToToggle} closeCb={closeElement} />
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
