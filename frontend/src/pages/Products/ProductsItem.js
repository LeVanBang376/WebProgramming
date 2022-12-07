import { ProductList } from "../Cart/Cart";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

var cart_ID = 0;
const BASE_URL = 'http://localhost/pdo';
const Item = (props) => {
    let { item_id, name, price, disc, img, desc } = props
    const navigate = useNavigate();
    // const isAdmin = (JSON.parse(localStorage.getItem('profile')).role);\
    var str = '';
    const isAdmin = JSON.parse(localStorage.getItem('profile'));
    if (isAdmin) {
        if (isAdmin.role === 'admin') {
            str = '/Admin/Products/' + item_id;
        }
        else {
            str = '/Products/' + item_id;
        }
    }
    else {
        str = '/Products/' + item_id;
    }

    const handleDelete = async () => {
        await axios.delete(BASE_URL + '/product?id=' + String(item_id), {
            crossDomain: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`,
            }
        })
            .then((res) => alert("Xóa thành công, load lại trang để cập nhập"))
            .catch((err) => alert("Lỗi"))
    }
    return (
        <div className="my-3">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." role="button" onClick={() => navigate(str)} />
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{name}</h5>
                        <p>Giảm giá {disc}%</p>
                    </div>
                    <p className="text-decoration-line-through">{String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <p>{String(Number(price) * (100 - Number(disc)) / 100).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'}</p>
                        {isAdmin ? [isAdmin.role === "user" ? (<button className="btn btn-success" type="button" onClick={() => { addItem(item_id, name, price, img); alert("Đã thêm " + name + " vô giỏ hàng của bạn!") }}>
                            Thêm vào giỏ
                        </button>) : (<button className="btn btn-danger" type="button" onClick={handleDelete}>
                            Xóa
                        </button>)] : (<button className="btn btn-success" type="button" onClick={() => { alert("Bạn hãy đăng nhập để mua đồ bằng giỏ hàng") }}>
                            Thêm vào giỏ
                        </button>)}

                    </div>
                </div>
            </div>
        </div>
    );
}


function addItem(item_id, name, price, img) {
    //adding item to cart
    var temp = {
        "id": cart_ID,
        "item_id": item_id,
        "image": img,
        "name": name,
        "price": price,
        "qty": 1
    }
    var exist = false;

    ProductList.forEach(function (item) {
        if (item["name"] === name) {
            item["qty"] += 1;
            exist = true;
        }
    });

    if (!exist) {
        ProductList.push(temp);
        cart_ID += 1;
    }
}


export default Item;
