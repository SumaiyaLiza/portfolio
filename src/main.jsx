import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './route/router'

ReactDOM.createRoot(document.getElementById('root')).render(

<React.StrictMode>
  <div className='bg-violet-500'>
  <RouterProvider router={router} />
  </div>
  </React.StrictMode>
,
)
