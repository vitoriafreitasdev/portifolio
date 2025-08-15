import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Home from './routes/Home.jsx'
import App from './App.jsx'
import AboutMe from './routes/AboutMe.jsx'
import Contacts from './routes/Contacts.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/sobremim",
        element: <AboutMe/>
      },
      {
        path: "/contatos",
        element: <Contacts/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
