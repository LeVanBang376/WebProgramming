import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Introduction from '../pages/Introduction/Introduction'
import Contact from '../pages/Contact/Contact'
import News from '../pages/News/News'
import NewsDetail from '../pages/News/NewsDetail'
import Login from '../pages/Login/Login'
import Cart from '../pages/Cart/Cart'
import Signup from '../pages/Signup/Signup'
import Information from '../pages/Information/Information'
import Products from '../pages/Products/Products'
import ChangePassword from '../pages/ChangePassword/ChangePassword'
import ChangeInformation from '../pages/ChangeInformation/ChangeInformation'

import AdminHome from '../admin_pages/Home/Home'
import AdminIntroduction from '../admin_pages/Introduction/Introduction'
import ManageUsers from '../admin_pages/ManageUsers/ManageUsers'
import UserDetail from '../admin_pages/UserDetail/UserDetail'
import Checkout from '../pages/Checkout/Checkout'
import AdminContact from '../admin_pages/Contact/Contact'
import ProductInfoAdmin from '../pages/Products/ProductInfoAdmin'
import ProductInfo from '../pages/Products/ProductInfo'
import AdminNewsDetail from '../admin_pages/News/AdminNewsDetail'
import AdminNews from '../admin_pages/News/AdminNews'
export default function Routers() {
    return (
        < Routes >
            {/* User */}
            <Route path="/" element={<Home />} />
            <Route path="/Introduction" element={<Introduction />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/News" element={<News />} />
            <Route path="/News/:id" element={<NewsDetail />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Information" element={<Information />} />
            <Route path="/ChangePassword" element={<ChangePassword />} />
            <Route path="/ChangeInformation" element={<ChangeInformation />} />
            <Route path="/Products/:id" element={<ProductInfo />} />
            {/* Admin */}
            <Route path="/Admin/" element={<AdminHome />} />
            <Route path="/Admin/Introduction" element={<AdminIntroduction />} />
            <Route path="/Admin/Login" element={<Login />} />
            <Route path="/Admin/ManageUsers" element={<ManageUsers />} />
            <Route path="/Admin/UserDetail/:userID" element={<UserDetail />} />
            <Route path="/Admin/Contact" element={<AdminContact />} />
            <Route path="/Admin/Products" element={<Products />} />
            <Route path="/Admin/Products/:id" element={<ProductInfoAdmin />} />
            <Route path="/Admin/UserDetail/:userID" element={<UserDetail />} />
            <Route path="/Admin/News" element={<AdminNews />} />
            <Route path="/Admin/News/:id" element={<AdminNewsDetail />} />
            <Route path="/Admin/Contact" element={<AdminContact />} />
        </Routes >
    )
}