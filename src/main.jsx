import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Playgroup from './components/Courses_components/Playgroup.jsx'
import Nursery from './components/Courses_components/Nursery.jsx'
import Primary from './components/Courses_components/Primary.jsx'
import Admission from './components/Admission_components/Admission.jsx'
import { Contact } from 'lucide-react'
import ContactUs from './components/Contact.jsx'
import Gallery from './components/Gallery.jsx'

const router = createBrowserRouter([
  {path:'/', element:<Layout/>, 

    children: [
      {path:"",element:<Home/>},
      {path:"about" , element:<About/>},
      {path:"courses/playgroup",element:<Playgroup/>},
      {path:"courses/nursery" , element:<Nursery/>},
      {path:"courses/primary" , element:<Primary/>},
      {path:"admission/process", element:<Admission/>},
      {path:"contact" , element:<ContactUs/>},
      {path:"gallery" , element:<Gallery/>}

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router ={router}/>
  </React.StrictMode>
)
