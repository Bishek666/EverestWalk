import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state';
import useLocalStorage from '../../../utils/custom-hooks/use-local-storage';

function CartsItem(props) {
    // const cart = useSelector((state) => state.data.cartProducts);
    const dispatch = useDispatch();
    const { cartProducts } = bindActionCreators(actionCreators, dispatch);
    const [cart, setCart] = useLocalStorage('carts', '');


    const onRemoveFromCart = (id) => {
        let products = JSON.parse(localStorage.getItem("carts") || "[]");
        const afterDeletion = products.filter((cart_id) => cart_id !== id);
        setCart(afterDeletion);
        cartProducts();
    }

    const [stock, setStock] = useState(1);

    const incrementHandler = () => {
        (stock < props.product.stock) && setStock((prevStock) => prevStock + 1);
    };

    const decrementHandler = () => {
        (stock > 1) && setStock((prevStock) => prevStock - 1);
    };

    useEffect(() => {
        props.cartProductsPrice(+props.product.price.substring(1) * 125.50 * stock);
    }, [stock])

    return (
        <>
            <div>
                <div>{props.product.name}</div>
                <div>Rs <span className='item-price--js'>{+props.product.price.substring(1) * 125.50 * stock}</span> </div>
            </div>
            <div className="flex items-center">
                <button className='p-2 text-gray-500 hover:text-orange-500 transition-colors duration-300' onClick={decrementHandler}>
                    {' '}
                    -{' '}
                </button>
                <div className='h-8 w-8 min-w-max px-2 flex justify-center items-center bg-chasmagray-alabaster border border-gallerylight leading-none'> {stock} </div>
                <button className='p-2 text-gray-500 hover:text-orange-500 transition-colors duration-300' onClick={incrementHandler}>
                    {' '}
                    +{' '}
                </button>
            </div>
            <button className='p-2 bg-red-500 text-white hover:text-red-200 rounded transition-colors duration-300'
                onClick={() => {
                    onRemoveFromCart(props.product.id);
                }}>
                Delete
            </button>
        </>
    )
}

export default CartsItem