import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import Comments from '../../components/Comment/Comments'
import parse from "html-react-parser";

import './style.css'

const BASE_URL = "http://localhost/pdo/"

export default function AdminNewsDetail() {
    const {id} = useParams();
    const [news, setNews] = useState('');

    const getNews = async () => {
        await axios.get(BASE_URL + `news?id=${id}`,{
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
    
    useEffect(() => getNews, [id]);
    
    if (!news) {
        return null;
    }
    console.log(news);

    return (
        <div className='container'>
            <h2 className='title d-flex justify-content-center'>{news.title}</h2>
            <div className='article row'>
            `<img src={news.thumbnail} alt="thumbnail" className='img-fluid'/>`
                {parse(news.content)}
            </div>
            <div className='row justify-content-md-center comment'>
            <Comments 
                id = {id}
            />
            </div>
        </div>
    )
}