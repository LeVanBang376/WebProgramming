import { ProductList } from "../Cart/Cart";
import { useNavigate } from 'react-router-dom';

var cart_ID = 0;

const Item=({item_id ,name, desc, img, price})=> {
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
    return (
        <div className="my-3">
            <div className="card"> 
                <img src={img} className="card-img-top" alt="..." role="button" onClick={()=>navigate(str)}/>
                <div className="card-body"> 
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{desc}</p>
                    <div className="d-flex justify-content-around align-items-center">
                        <span>{String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'}</span>
                        <button className="btn btn-success" type="button" onClick={() => { addItem(item_id ,name, price, img); alert("Đã thêm " + name + " vô giỏ hàng của bạn!") }}>
                            Thêm vào giỏ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


function addItem(item_id ,name, price, img) {
    //adding item to cart
    var temp = {
        "id": cart_ID,
        "item_id": item_id,
        "image": img,
        "name": name,
        "price": price,
        "qty": 1
    }
    var exist =  false;

    ProductList.forEach(function(item) {
        if (item["name"] === name) {
            item["qty"] += 1;
            exist = true;
        }
    });
    
    if (!exist) {
        ProductList.push(temp);
        cart_ID+= 1;
    }
}


export default Item;
