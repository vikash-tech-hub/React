import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './component/Dashboard';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <Navbar />
    <div style={{ padding: '1rem' }}>
      <Outlet />
    </div>
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "dashboard", element: <Dashboard /> }
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
