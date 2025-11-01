import { Routes, Route } from 'react-router';
import Root from './components/Root/Root.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import AdPromotional from './components/Menus/AdPromotional.jsx'
import AddNews from './components/Menus/AddNews.jsx'
import AddPost from './components/Menus/AddPost.jsx'
import AddVoucher from './components/Menus/AddVoucher.jsx'
import PostEvent from './components/Menus/PostEvent.jsx'
import EditProfile from './components/ui/EditProfile.jsx'
import ChangePassword from './components/ui/ChangePassword.jsx'
import AboutUs from './components/ui/AboutUs.jsx'
import TermsCondition from './components/ui/TermsCondition.jsx'
import PrivacyPolicy from './components/ui/PrivacyPolicy.jsx'
import Notificatons from './components/ui/Notificatons.jsx'
import ErrorPage from './components/ui/ErrorPage.jsx';
import UserManagement from './components/UserManagement/UserManagement.jsx';
import OrderManagement from './components/OrderManagement/OrderManagement.jsx';
import Categories from './components/Categories/Categories.jsx';
import Approval from './components/Approval/Approval.jsx';
import Support from './components/HelpSupport/Support';
import FAQ from './components/HelpSupport/FAQ.jsx';
function App() {
  return (
    <Routes>
      {/* Root layout */}
      <Route path="/" element={<Root />}>
      
        {/* Default page */}
        <Route index element={<Dashboard />} />
        

        {/* Or other nested routes */}
        <Route path="*" element={<ErrorPage/>}></Route>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UserManagement/>} />
        <Route path="/orders" element={<OrderManagement/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/notifications" element={<Notificatons />} />
        <Route path="/ads" element={<AdPromotional/>} />
        <Route path="/news" element={<AddNews/>} />
        <Route path="/posts" element={<AddPost/>} />
        <Route path="/vouchers" element={<AddVoucher/>} />
        <Route path="/events" element={<PostEvent/>} />
        <Route path="/approval" element={<Approval/>} />
        <Route path="settings/profile" element={<EditProfile/>} />
        <Route path="settings/changePassword" element={<ChangePassword/>} />
        <Route path="settings/terms" element={<TermsCondition/>} />
        <Route path="settings/about-us" element={<AboutUs/>} />
        <Route path="settings/privacy" element={<PrivacyPolicy/>} />
       
        <Route path="/help" element={<Support/>} />
        <Route path="/faq" element={<FAQ/>} />
        {/* Add more nested routes later, like: */}
        {/* <Route path="profile" element={<EditProfile />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
