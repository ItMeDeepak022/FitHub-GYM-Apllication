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
import LogOut from './common/login-logout/LogOut'
import Payment from './pages/Payment'
import Sidebar from './common/userdashboard/common/Sidebar'
import Userheader from './common/userdashboard/common/Userheader'
import Rootlayout from './common/userdashboard/Rootlayout'
import Userhome from './common/userdashboard/pages/Userhome'
import Userprofile from './common/userdashboard/pages/Userprofile'
import Subscription from './common/userdashboard/pages/Subscription'
import PaymentHistory from './common/userdashboard/pages/Histroy'
import ProtectedRoute from './ProtectedRoutes'



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
        <Route path='/join-us' element={<JoinCourse />} />

        <Route path='/payment-page' element={<Payment />} />

        {/* -------------------------------------------------------------------------------------------- */}
        {/* User Dashboard Routing Methods */}
        <Route path='/login-page' element={<LogOut />} />

        <Route path="/user" element={<ProtectedRoute><Rootlayout /></ProtectedRoute>}>
          <Route index element={<Userhome />} />

          <Route path="home" element={<Userhome />} />
          <Route path="profile" element={<Userprofile />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="histroy" element={<PaymentHistory />} />


        </Route>


        {/* ------------------------------------------------------------------------------------ */}


      </Route>

    </Routes>
  </BrowserRouter>



)
