import React, { useEffect, useState } from 'react'
import ProductCard from '../product-card/product-card'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { bindActionCreators } from 'redux'
import { actionCreators } from "../../state/index"


function ListedItems() {
    const state = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const { fetchProducts, cartProducts } = bindActionCreators(actionCreators, dispatch);

    const allProducts = state.filteredProducts && state.filteredProducts.length > 0 ? state.filteredProducts : state.products;

    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <>
            <div className='grid gap-3 md:gap-5 lg:gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
                {allProducts && allProducts.length > 0 && allProducts.map((product) => {
                    return <ProductCard key={product.id} productData={product} cartProducts={cartProducts} />
                })}
            </div>
          

        </>
    )
}

export default ListedItems