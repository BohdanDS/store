import Order from "../../forms/order/order";
import CartArticles from "../../components/cartArticles/cartArticles";
import './index.less'
import Notification from "../../components/notification/notification";

const Cart = () => {

    return (
        <div className='cartContainer'>
            <CartArticles/>
            <Order/>
            <Notification/>
        </div>
    );
};

export default Cart;