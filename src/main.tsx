// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Ostinato from './pages/Ostinato/Ostinato';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Synergy from './pages/Synergy/Synergy';
import Work from './pages/Work/Work';
import { StrictMode } from 'react';
import ScreenTime from './pages/ScreenTime/ScreenTime';
import YumGoods from './pages/YumGoods/YumGoods';
import MalinRoad from './pages/MalinRoad/MalinRoad';
import Lines from './pages/Lines/Lines';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'synergy',
    element: <Synergy />,
  },
  {
    path: 'ostinato',
    element: <Ostinato />,
  },
  {
    path: 'work',
    element: <Work />,
  },
  {
    path: 'screentime',
    element: <ScreenTime />,
  },
  {
    path: 'yumgoods',
    element: <YumGoods />,
  },
  {
    path: 'malinroad',
    element: <MalinRoad />,
  },
  {
    path: 'lines',
    element: <Lines />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
