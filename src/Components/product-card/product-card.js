import React from 'react'
import { useSelector } from 'react-redux';
import useLocalStorage from '../../utils/custom-hooks/use-local-storage';

const ProductCard = (props) => {
    const { id, name, image, price, stock, createDate, category } = props.productData;
    let date = new Date(createDate);
    const formatedData = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
    const nepaleaseCurrency = `Rs ${+price.substring(1) * 125.50}`;
    const [cart, setCart] = useLocalStorage('carts', '');

    const state = useSelector((state) => state.data.cartProducts);

    const openCart = () => {
         [...document.getElementsByClassName('cart-button--js')][0].click();
    }

    const onAddToCart = () => {
        let products = JSON.parse(localStorage.getItem("carts") || "[]");
        products.push(id);
        setCart(products);
        props.cartProducts();
        openCart();
    }

    const isInCart = (id) => {
          const isFound =  state && state.length > 0 && state.some(item => {
            if (item.id == id) {
                return true;
              }else{
                  return false;
              }
          });
          return isFound;
    }

    const abc = isInCart(id);
 
    

    return (
        <div className='rounded-b overflow-hidden cursor-pointer group hover:fw-boxshadow transition duration-300 flex flex-col h-full shadow-lg'>
            <div className='p-2 bg-white'>
                <figure className='mb-4'>
                    <img src={image && process.env.PUBLIC_URL + '/images/fantech.jpg'} alt={image} />
                </figure>

                <div className='flex justify-between md:flex-col'>

                    <p className='md:text-center text-sm md:text-lg font-semibold text-gray-500'>
                        <span className='text-green-500'>{nepaleaseCurrency} </span>
                    </p>
                    <p className='md:text-center text-xs md:text-sm text-gray-800 leading-5 md:leading-6'>
                        Created At: {formatedData}</p>
                    <p className='md:text-center text-xs md:text-sm text-gray-800 leading-5 md:leading-6'>
                        Stock: {stock}</p>

                    <p className='md:text-center text-xs md:text-sm text-gray-800 leading-5 md:leading-6'>
                        Category:
                        {category && category.length > 0 && category.map((c) => `${c},`)}
                    </p>
                </div>
            </div>
            <div className='mt-auto h-full'>
                <p className='p-2 md:py-3.5 md:px-5 fw-product-card-title text-center text-gray-500 group-hover:text-white group-hover:bg-blue-500   transition duration-300 h-full'>
                    {name}
                </p>
            </div>
            {stock > 0 ? (
                <button className={`p-2 md:py-3.5 md:px-5 fw-product-card-title text-center text-white ${isInCart(id) ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500'}`}
                    onClick={() => {
                        onAddToCart();
                    }}>
                    {isInCart(id) ? "Added To Cart" : "Add To Cart"}
                </button>

            ) : (
                <button className='p-2 md:py-3.5 md:px-5 fw-product-card-title text-center text-white bg-gray-500 cursor-not-allowed'>
                    Out of Stock
                </button>
            )}


        </div>
    );
};


export default ProductCard;


