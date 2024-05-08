import { Routes, Route } from "react-router-dom";
import { TasksProvider } from "./context/TasksContext";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Lists from "./pages/Lists";

import Searcher from "./components/Searcher/Searcher";
import Container from "./components/Container";
import Menu from "./components/Menu";

import "./App.css";

function App() {
  return (
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
          </Routes>
        </main>
      </div>
    </TasksProvider>
  );
}

export default App;
