import React from 'react'
import FilterProducts from '../Components/filter-products/filter-products'
import ListedItems from '../Components/listed-items/listed-items'
import Navbar from '../Components/navbar/navbar'

function Products() {
  return (
    <div>
        <Navbar />
        <FilterProducts />
        <ListedItems />
    </div>
  )
}

export default Products