import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Components/HomePage/homepage.jsx';
import Homepage from './Components/HomePage/homepage.jsx';
import Contact from './Components/Contact/Contact.jsx'
import About from './Components/About/About.jsx'
import Projects from './Components/Projects/Projects.jsx'
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom';

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Homepage/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="projects" element={<Projects/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router = {route}/>
  </React.StrictMode>,
)
