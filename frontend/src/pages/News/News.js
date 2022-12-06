import React, {useState, useEffect} from 'react'
import NewsItem from './NewsItem';
import axios from 'axios'
import './style.css'

const BASE_URL = "http://localhost/pdo/"
export default function News() {
    const [news, setNews] = useState('');
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
            <div className='container'>
                <div className='row'>
                    {
                        news.map((child)=>
                            <div className="col-md-4">
                            <NewsItem
                                key = {child.id}
                                id = {child.id}
                                author='Author 1'
                                date='01/01/2022'
                                title={child.title}
                                imgUrl={child.thumbnail}
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