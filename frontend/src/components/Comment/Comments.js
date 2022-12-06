import React, { useState, useEffect } from "react";
import { Button, Comment, Form } from 'semantic-ui-react'
import { useLocation } from 'react-router-dom';
import CommentItem from "./CommentItem";
import axios, { all } from 'axios'
import "./styles.css"

const BASE_URL = "http://localhost/pdo/"

const allUser = {
    "data": [
        {
            "user_id": 25,
            "username": "minhlang",
            "fullname": "Lang Ung",
            "gender": "Nam",
            "dateofbirth": "2022-12-31",
            "phone_number": "01010101",
            "email": "asc@dcd.com",
            "address": "123",
            "avatar": "https://www.f-cdn.com/assets/freightlancer/en-CUSTOM/assets/freightlancer/cargo-category-detail-pages/testimonials-default-avatar.png?image-optimizer=force&width=50%201x,%20https://www.f-cdn.com/assets/freightlancer/en-CUSTOM/assets/freightlancer/cargo-ca"
        },
        {
            "user_id": 3,
            "username": "kiet6",
            "fullname": "Kiệt 6",
            "gender": "Nam",
            "dateofbirth": "2002-10-09",
            "phone_number": "0963987344",
            "email": "tuankiet091002@gmail.com",
            "address": "Bến Tre",
            "avatar": "https://static.wikia.nocookie.net/camp-halfblood-fanon/images/c/ca/Unknown.jpeg/revision/latest?cb=20200614091044"
        }
    ]
}

const Comments = (props) => {
    let { id } = props;
    const initialState = { user_id: '', news_id: '', content: '', rate: '', created_at: '', updated_at: '' };
    const [form, setForm] = useState(initialState);
    const [err, setErr] = useState('');
    const [comments, setComments] = useState('');

    /////////////////////GET COMMENT///////////////////////////////

    const getComments = async () => {
        await axios.get(BASE_URL + `newscmt?id=${id}`, {
            crossDomain: true,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then((res) => {
            setComments(res.data.data);
        })
            .catch((err) => console.log(err))
    };

    useEffect(
        () => getComments, []);

    if (!comments) {
        return null;
    }

    ///////////////////////ADD COMMENT//////////////////////////////////////////

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(BASE_URL + 'newscmt', form, {
            crossDomain: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                setErr('')
            })
            .catch((err) => {
                setErr(err.response.data.message)
            })
    }

    /////////////////////////////////////////////////////////////////
    return (
        <Comment.Group>
            {
                comments.length <= 0 ? <p>No Comments</p> :
                    comments.map(child =>
                        allUser.data.filter(function (el) {
                            return el.user_id == child.user_id
                        }).length > 0 ?
                            (
                                < CommentItem
                                    key={child.id}
                                    author={
                                        allUser.data.filter(function (el) {
                                            return el.user_id == child.user_id
                                        })[0].fullname
                                    }
                                    imgUrl={
                                        allUser.data.filter(function (el) {
                                            return el.user_id == child.user_id
                                        })[0].avatar
                                    }
                                    content={child.content}
                                    date={child.updated_at}
                                />
                            ) : (
                                console.log("nothing"))

                    )
            }

            <form onSubmit={handleSubmit}>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3">Hãy viết suy nghĩ của bạn</label>
                    <input type="text" id="form3Example3" className="form-control form-control-lg"
                        placeholder="" name="content" value={form.content} onChange={handleChange} />
                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                    <Button content='Add Comment' type="submit" className="btn btn-primary btn-lg" icon='edit' primary />
                </div>

            </form>
        </Comment.Group>
    )
}
export default Comments