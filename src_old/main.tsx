import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../src/pages/home';
import Contact from '../src/pages/contact';
import Projects from './pages/projects';
import Sponsors from '../src/pages/sponsors';
import Team from '../src/pages/team';
import Achievements from './pages/achievements';
import NoPage from '../src/pages/nopage';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="team" element={<Team />} />
        <Route path="awards" element={<Achievements />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
