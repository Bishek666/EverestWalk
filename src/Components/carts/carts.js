import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import CartItem from './cart-item/cart-item';


function Carts() {
    const state = useSelector((state) => state.data);

    const dispatch = useDispatch();


    const { cartProducts, cartProductsPrice } = bindActionCreators(actionCreators, dispatch);


    const allCartItems = [...document.getElementsByClassName('item-price--js')];
    let totalPrice = 0;

    for (let i = 0; i < allCartItems.length; i++) {
        totalPrice += +allCartItems[i].innerHTML;
    }

    useEffect(() => {
        cartProducts();
    }, [])

    return (
        <div>
            <div className="divide-y-2 divide-emerald-500">
                {state.cartProducts && state.cartProducts.length > 0 ? state.cartProducts.map((product, index) => (
                    <div key={`cart-${index}`} className="px-2 py-4 flex justify-between">
                        <CartItem product={product} cartProductsPrice={cartProductsPrice} />
                    </div>
                )): ""}
            </div>
            <div>
                Total Price : Rs {totalPrice}
            </div>
        </div>
    )
}

export default Carts