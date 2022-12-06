import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './PIAstyle.css'
const BASE_URL = "http://localhost/pdo";

const ProductInfo = () => {
    var initialState = {id: '', title: '', price: '', description: '', thumbnail: '',  discount: ''};
    const navigate = useNavigate();
    const [form, setForm] = useState(initialState);
    const [err, setErr] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      await axios.put(BASE_URL + '/auth/login', form, {
          crossDomain: true,
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('profile')).token
          }
      })
          .then((res) => {
              setErr('')
              localStorage.setItem('profile', JSON.stringify(res.data.data));
              if (res.data.data.role === 'user')
                  navigate('/')
              else navigate('/Admin/')
          })
          .catch((err) => {
              setErr(err.response.data.message)
          })
      }
  
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const [data, setData] = useState(null);
    const { id } = useParams();
    
    const getProduct = async () => {
        await axios.get(`${BASE_URL}/product?id=${id}`,
        {
            crossDomain: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then((res) => {
            setData(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        getProduct();
    }, []);

    if (!data) return null;
    console.log(data);

    return (
        <div className="app">
        { 
          <form onSubmit={handleSubmit}>
            <div className="details" key={data.id}>
              <div className="big-img">
                <img src={data.thumbnail} alt=""/>
              </div>


              <div className="box">
                <div className="row">
                  <label htmlFor="title">Title</label>
                  <input class="form-control" id="title" type="text" value={form.tile} name="title" onChange={handleChange} />
                  
                  <label htmlFor="price">Price</label>
                  <input class="form-control" id='price' type='text' value={form.price} onChange={handleChange} />
                </div>
                {/* <p>{data.description}</p> */}
                <textarea class="form-control" value={form.description} onChange={handleChange} />
                <button className="cart" type="submit">Xác nhận</button>

              </div>
            </div>
          </form>
        }
      </div>

    )
}
export default ProductInfo;