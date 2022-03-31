import Order from "../../forms/order/order";
import CartArticles from "../../components/cartArticles/cartArticles";
import './index.less'
import {Link} from 'react-router-dom'

const Cart = () => {

    return (
        <div className='cartContainer'>
            <Link to={'/my-orders'}>HISTORY</Link>
            <CartArticles/>
            <Order/>
        </div>
    );
};

export default Cart;