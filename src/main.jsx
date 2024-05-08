import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { TasksProvider } from './context/TasksContext';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <TasksProvider>
        <App />
      </TasksProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
