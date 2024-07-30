import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'

import Home from './Pages/Home.jsx'
import Browse from './Pages/Browse.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
  , {
    path: "/Browse",
    element: <Browse />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
