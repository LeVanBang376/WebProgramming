import { ProductList } from "../Cart/Cart";

var cart_ID = 0;

const Item=({item_id ,name, desc, img, price})=> {
    return (
        <div className="my-3">
            <div className="card"> 
                <a href="#"><img src={img} className="card-img-top" alt="..."/></a>
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


// const Item = ({item_id ,name, desc, img, price}) => {
//     return (
//         <div className="col-sm-6 col-md-5 col-lg-4 item">
//             <div className="box">
//                 <img className="rounded img-fluid product-img" src={img} alt={"product"}/>
//                 <h3 className="name">{name}</h3>
//                 <p className="description">{desc}</p>
//                 <div className="d-flex justify-content-around align-items-center">
//                     <span className="badge rounded-pill bg-danger price">{String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'}</span>
//                     <button className="btn btn-success" type="button" onClick={() => { addItem(item_id ,name, price, img); alert("Đã thêm " + name + " vô giỏ hàng của bạn!") }}>
//                         Thêm vào giỏ
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

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
