import { useState } from 'react';
import { CookiesProvider, useCookies } from "react-cookie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./routes/home";
import About from "./components/pages/About";
import ResumePDF from "./components/pages/ResumePDF";
import HeaderBar from './components/HeaderBar';
import SideBar from './components/SideBar';
import { MantineProvider, ColorSchemeProvider, ColorScheme, AppShell } from '@mantine/core';
import { useColorScheme, useLocalStorage } from '@mantine/hooks';


function App() {

  const routes = [{ link: '/', label: 'Home', links: [] },
  { link: 'about', label: 'About', links: [] },
  { link: 'resume', label: 'Resume', links: [] }];

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  // const preferredColorScheme = useColorScheme();
  // const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);

  // const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));


  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <AppShell header={<HeaderBar links={routes} />} aside={<SideBar />} >
          {/* <HeaderBar links={routes} /> */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="resume" element={<ResumePDF />} />
            </Routes>
          </BrowserRouter>
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
