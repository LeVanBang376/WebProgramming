import React, {useState, useEffect} from 'react'
import AdminNewsItem from './AdminNewsItem'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './style.css'

const BASE_URL = "http://localhost/pdo/"
export default function AdminNews() {

    const userInfo = { user_id: '', username: '', fullname: '', phone_number: '', address: '', avatar: '', gender: '', dateofbirth: '', email: '' };
    const [allUser, setList] = useState([])
    const [err, setErr] = useState('');
    const [userID, setUserID] = useState('')

    const getUsers = async (e) => {
        await axios.get(BASE_URL + '/user/getall', {
            // headers: {
            //     "Content-Type": "application/json",
            //     "Access-Control-Allow-Origin": "*",

            // }
            crossDomain: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`,
            }
        })
            .then((res) => {
                setErr('')
                setList(res.data.data)
            })
            .catch((err) => {
                setErr(err.response.data.message)
            })
    }

    React.useEffect(() => {
        getUsers()
    })
/////////////////////////////////////////////////
    const [news, setNews] = useState('');
    const navigate = useNavigate();
    const getNews = async () => {
        await axios.get(BASE_URL + 'news/getall',{
            crossDomain: true,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then((res) => {
            setNews(res.data.data);
        })
        .catch((err) => console.log(err))
    };
    
    useEffect(
        () => getNews, []);
    
    if (!news) {
        return null;
    }
    
    console.log(news);
    return (
        <div className='News'>
            <div class="slider">
                <p class="text-center fs-1">Tin tức</p>
            </div>

            <div className='adminNews'>
                <button onClick={() => navigate(`/News/edit`)}>ADD NEWS</button>
            </div>

            <div className='container'>
                <div className='row'>
                    {
                        news.map((child)=>
                            <div className="col-md-4">
                            <AdminNewsItem
                                key = {child.id}
                                id = {child.id}
                                author='Author 1'
                                date='01/01/2022'
                                title={child.title}
                                description={child.thumbnail}
                                imgUrl='https://traxanhkhongdo.com.vn/wp-content/uploads/2017/09/tra-xanh-dong-chai-1.png'
                                newsUrl='https://traxanhkhongdo.com.vn/tin-tuc/tra-xanh-dong-chai-co-giu-duoc-tinh-chat-cua-tra-tuoi-khong/'
                            />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
