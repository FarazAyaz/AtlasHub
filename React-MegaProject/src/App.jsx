import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Country from './pages/Country';
import { RouterProvider } from 'react-router-dom';
import AppLayout from './components/Layout/AppLayout';
import ErrorPage from './pages/ErrorPage';
import CountryDetails from './components/Layout/CountryDetails';
const App = () => {
  const router = createBrowserRouter([
     {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage/>,
      children: [{
        
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/Country",
      element: <Country />
    },
    {
      path: "/Country/:id",
      element: <CountryDetails />
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ]}
    ]);
  return (
    <RouterProvider router={router}>  </RouterProvider>
  )
}

export default App
