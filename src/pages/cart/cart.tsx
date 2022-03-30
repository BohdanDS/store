import Order from "../../forms/order/order";
import CartArticles from "../../components/cartArticles/cartArticles";
import './index.less'

const Cart = () => {

    return (
        <div className='cartContainer'>
            <CartArticles/>
            <Order/>
        </div>
    );
};

export default Cart;