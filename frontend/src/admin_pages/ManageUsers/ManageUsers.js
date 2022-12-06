import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import './styles.css'
const BASE_URL = 'http://localhost/pdo';
export default function ManageUsers() {

    const userInfo = { user_id: '', username: '', fullname: '', phone_number: '', address: '', avatar: '', gender: '', dateofbirth: '', email: '' };
    const [list, setList] = useState([])
    const [err, setErr] = useState('');
    const [userID, setUserID] = useState()


    const getUsers = async (e) => {
        await axios.get(BASE_URL + '/user/getall', {
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

    const deleteUser = async (e) => {
        await axios.delete(BASE_URL + '/auth/kill', {
            crossDomain: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`,
            },
            data: { id: userID }
        })
            .then((res) => { alert("Success!!") })
            .catch((err) => {
                setErr(err.response.data.message)
            })
    }

    React.useEffect(() => {
        deleteUser()
    }, [userID])

    return (
        <div className='container-fluid pt-5 pb-5'>
            <h2>Danh sách người dùng</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tên đăng nhập</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((userInfo) => (
                        <tr>
                            <th scope="row">{userInfo.user_id}</th>
                            <td><Link to="/Admin/UserDetail/17" state={userInfo} className='colour'>{userInfo.username}</Link></td>
                            <td>
                                <button type="button" class="btn btn-danger" onClick={() => {
                                    setUserID(userInfo.user_id)
                                }}>Xóa</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
