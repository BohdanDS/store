import Order from "../../forms/order/order";
import CartArticles from "../../components/cartArticles/cartArticles";
import './index.less'
import Notification from "../../components/notification/notification";
import {useSelector} from "react-redux";
import {TApplicationState} from "../../store/aplication-state";
import {cartProduct} from "../../store/reducers/cart";

const Cart = () => {

    const articlesInCart = useSelector<TApplicationState, cartProduct[]>(state => state.cart.products)

    return (
        <div className='cartContainer'>
            <CartArticles items={articlesInCart}/>
            <Order/>
            <Notification/>
        </div>
    );
};

export default Cart;