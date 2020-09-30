import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Board from './components/Board';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if(theme === 'light') {
      setTheme('dark');
      document.querySelector('span.material-icons').innerHTML = 'wb_sunny';
    } else {
      setTheme('light')
      document.querySelector('span.material-icons').innerHTML = 'brightness_2';
    }
  }
  
  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
      <DndProvider backend={HTML5Backend}>
        <span className="material-icons toggleTheme" onClick={toggleTheme}>
          brightness_2
        </span>
        <Header />
        <Board />
        
        <GlobalStyle />
      </DndProvider>
    </ThemeProvider>
  );
}

export default App;
