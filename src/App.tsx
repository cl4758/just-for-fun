import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./routes/home";
import About from "./routes/about";
import Resume from "./routes/resume";
import HeaderBar from './components/HeaderBar';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';


function App() {
  const routes = [{ link: '/', label: 'Home', links: [] },
  { link: 'about', label: 'About', links: [] },
  { link: 'resume', label: 'Resume', links: [] }];

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <HeaderBar links={routes} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="resume" element={<Resume />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
