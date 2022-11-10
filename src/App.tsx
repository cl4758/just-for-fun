
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ResumePDF from "./components/pages/ResumePDF";
import Projects from "./components/pages/Projects";
import HeaderBar from './components/HeaderBar';
import SideBar from './components/SideBar';
import { MantineProvider, ColorSchemeProvider, ColorScheme, AppShell } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import RunningProjects from "./components/pages/RunningProjects";


function App() {

  const routes = [{ link: '/', label: 'HOME' },
  { link: 'about', label: 'ABOUT' },
  { link: 'projects', label: 'PROJECTS', links: [{ link: 'projects/running', label: 'RUNNING' }] },
  { link: 'resume', label: 'RESUME' }];

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


  // document.title = "Christine Lai";
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <BrowserRouter>
          <AppShell header={<HeaderBar links={routes} />} aside={<SideBar />} footer={<SideBar />}>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/running" element={<RunningProjects />} />
              <Route path="resume" element={<ResumePDF />} />
            </Routes>

          </AppShell>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
