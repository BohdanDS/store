import Order from "../../forms/order/order";
import CartArticles from "../../components/cartArticles/cartArticles";
import './index.less'
import {useSelector} from "react-redux";
import {TApplicationState} from "../../store/aplication-state";
import {cartProduct} from "../../store/reducers/cart";
import {productOnCartSelections} from "../../store/reducers/cart/selectors";

const Cart = () => {

    const articlesInCart = useSelector(productOnCartSelections())

    return (
        <div className='cartContainer'>
            <CartArticles items={articlesInCart}/>
            <Order/>
        </div>
    );
};

export default Cart;