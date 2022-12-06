import React from "react";
import { useNavigate } from "react-router-dom";
import newimage from '../../assets/images/newimage.png'

import './style.css'

const NewsItem=(props)=> {
    let { id, title, description, imgUrl, newsUrl, author, date } = props;
    const navigate = useNavigate();
    return (
        <div className="my-3">
            <div className="card"> <img src={!imgUrl ? newimage : imgUrl} className="card-img-top newimage" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <span className="badge rounded-pill text-bg-secondary">
                        By {!author ? "Unknown" : author}
                    </span>
                    <p className="card-text">
                        <small className="text-muted">
                            {new Date(date).toGMTString()}
                        </small>
                    </p>

                    <button onClick={() => navigate(`/News/${id}`)}>READ MORE</button>
                </div>
            </div>
        </div>
    );
  
}

export default NewsItem;
