import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Home'
import Layout from './common/Layout'
import AboutGYM from './common/about-gym/AboutGYM'
import ProgramsPages from './common/program/ProgramPages'
import Nutrition from './common/nutrisions/Nutrision'
import RecipeDetailsPages from './common/recipe-details/RecipeDetailsPages'
import ContactNow from './common/contact-section/ContactNow'
import ScrollToTop from './pages/ScrollTop'
import JoinCourse from './pages/JoinCourse'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>

      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutGYM />} />
        <Route path='/program-pages' element={<ProgramsPages />} />
        <Route path='/nutrition' element={<Nutrition />} />
        <Route path='/recipe/:id' element={<RecipeDetailsPages />} />
        <Route path='/contact-now' element={<ContactNow />} />
        <Route path='/join-us' element={<JoinCourse/>} />

      </Route>

    </Routes>
  </BrowserRouter>



)
