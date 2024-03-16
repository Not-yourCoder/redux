import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import Counter, { store } from './components/Counter'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import ErrorPage from './components/Error'
import Main from './components/Main'
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
