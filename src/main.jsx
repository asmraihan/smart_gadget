import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : '/about',
            element : <About></About>
        }
    ]
    },

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)
