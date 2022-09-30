import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./routes/home";
import About from "./routes/about";
import Misc from "./routes/misc";
import HeaderBar from './components/HeaderBar';
import { MantineProvider } from '@mantine/core';


function App() {
  const routes = [{ link: '/', label: 'Home', links: [] },
  { link: 'about', label: 'About', links: [] },
  { link: 'misc', label: 'Misc', links: [] }];

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <HeaderBar links={routes} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="misc" element={<Misc />} />
        </Routes>
      </BrowserRouter>
      {/* <Outlet /> */}
    </MantineProvider>
  );
}

export default App;
