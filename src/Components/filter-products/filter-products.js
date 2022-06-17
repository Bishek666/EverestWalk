import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../../state/index"

function FilterProducts() {
    const allCategory = useSelector((state) => state.data.productCategories);

    const dispatch = useDispatch();

    const { getfilteredProducts } = bindActionCreators(actionCreators, dispatch);


    return (
        <div className='grid gap-3 md:gap-5 lg:gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
            <div>
                <p className='p-2 md:py-3.5 md:px-5 text-center text-gray-500 w-auto'>
                    Price
                </p>
                <button className='p-2 md:py-3.5 md:px-5 text-center text-gray-900 bg-gray-200 rounded hover:bg-gray-400 w-2/4'
                    onClick={() => {
                        getfilteredProducts('price', 'price_down')
                    }}>
                    Price Low
                </button>
                <button className='p-2 md:py-3.5 md:px-5 text-center text-gray-900 bg-gray-200 rounded hover:bg-gray-400 w-2/4'
                    onClick={() => {
                        getfilteredProducts('price', 'price_up')
                    }}>
                    Price High
                </button>
            </div>
            <div>
                <p className='p-2 md:py-3.5 md:px-5 text-center text-gray-500 w-auto'>
                    Creation Time
                </p>
                <button className='p-2 md:py-3.5 md:px-5 text-center text-gray-900 bg-gray-200 rounded hover:bg-gray-400 w-2/4'>
                    Latest
                </button>
                <button className='p-2 md:py-3.5 md:px-5 text-center text-gray-900 bg-gray-200 rounded hover:bg-gray-400 w-2/4'>
                    Oldest
                </button>
            </div>
            <div>
                <p className='p-2 md:py-3.5 md:px-5 text-center text-gray-500 w-auto'>
                    Category
                </p>
                {allCategory && allCategory.length > 0 && allCategory.map((category) => (
                    <button key={category} className='p-2 md:py-3.5 md:px-5 text-center text-gray-900 bg-gray-200 rounded hover:bg-gray-400 w-2/4'
                        onClick={() => {
                            getfilteredProducts('category', category)
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default FilterProducts