import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Counter from './components/Counter'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import ErrorPage from './components/Error'
import Main from './components/Todo'
import Test from './components/Test'



const router = createBrowserRouter([{
  path: "/", element: <Home />, errorElement: <ErrorPage />, children: [
    {
      path: "/test",
      element: <Test />
    }
  ]
}, { path: "/counter", element: <Counter /> }, { path: "/main", element: <Main /> }])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)


