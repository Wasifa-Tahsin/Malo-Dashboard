import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root.jsx';
import HomeLayout from './components/Layout/HomeLayout.jsx';
import EditProfile from './components/ui/EditProfile.jsx';
import ChangePassword from './components/ui/ChangePassword.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import AboutUs from './components/ui/AboutUs.jsx';
import TermsCondition from './components/ui/TermsCondition.jsx';
import PrivacyPolicy from './components/ui/PrivacyPolicy.jsx';
import PostEvent from './components/Menus/PostEvent.jsx';
import AddVoucher from './components/Menus/AddVoucher.jsx';
import AddNews from './components/Menus/AddNews.jsx';
import AddPost from './components/Menus/AddPost.jsx';
import Notificatons from './components/ui/Notificatons.jsx';
import AdPromotional from './components/Menus/AdPromotional.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomeLayout },
      {
        path:'/dashboard',
        Component:Dashboard
      },
      {
        path:'/vouchers',
        Component:AddVoucher
      },
      {
        path:'/news',
        Component:AddNews
      },
      {
        path:'/posts',
        Component:AddPost
      },
      {
        path:'/events',
        Component:PostEvent
      },
      {
        path:'/ads',
        Component:AdPromotional
      },
      {
        path:'/notifications',
        Component:Notificatons
      },
      { path: '/profile', Component: EditProfile },
      {
        path:'/changePassword',
        Component:ChangePassword
      },
      {
        path:'/about-us',
        Component:AboutUs
      },
      {
        path:'/terms',
        Component:TermsCondition
      },
      {
        path:'/privacy',
        Component:PrivacyPolicy
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
