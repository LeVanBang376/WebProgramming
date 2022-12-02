import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Introduction from '../pages/Introduction/Introduction'
import Contact from '../pages/Contact/Contact'
import News from '../pages/News/News'
import Login from '../pages/Login/Login'
import Cart from '../pages/Cart/Cart'
import Signup from '../pages/Signup/Signup'
export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Introduction" element={<Introduction />} />
            <Route path="/News" element={<News />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Signup" element={<Signup />} />
        </Routes>
    )
}