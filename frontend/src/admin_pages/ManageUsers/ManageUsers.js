import React, { useState } from 'react'
import axios from "axios";
const BASE_URL = 'http://localhost/pdo';
export default function ManageUsers() {

    const [err, setErr] = useState('');
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
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            }
        })




            .then((res) => {
                setErr('')
                console.log(res.data)
            })
            .catch((err) => {
                alert('a')
                setErr(err.response.data.message)
            })
    }
    return (
        <>
            <h2>Danh sách người dùng</h2>
            <button onClick={getUsers} >Click</button>
        </>
    )
}
