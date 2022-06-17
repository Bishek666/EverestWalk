import * as constants from "../constants";

const initialState = {
    products: '',
    errorMsg: '',
    productCategories: '',
    filteredProducts: '',
    cartProducts: [],
    cartProductsPrice: 0,
};

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case constants.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload
            };
        case constants.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                errorMsg: action.payload
            };
        case constants.GET_PRODUCTS_CATEGORIES:
            let allCategory = [];
            action.payload && action.payload.length > 0 && action.payload.map((product) => {
                allCategory.push(product?.category[1] && product.category[1])
            })
            let uniqueCategories = allCategory.filter((element, index, array) =>
                array.indexOf(element) === index
            );
            return {
                ...state,
                productCategories: uniqueCategories
            };
        case constants.GET_FILTERED_PRODUCTS:
            let filteredProducts = [];
            let data = [...state.products];
            if (action.payloadType === 'price') {
                filteredProducts = data.sort((a, b) => {
                    const priceA = +a.price.substring(1);
                    const priceB = +b.price.substring(1);
                    if (priceA < priceB) {
                        return action.payload === 'price_up' ? 1 : -1
                    }
                    if (priceA > priceB) {
                        return action.payload === 'price_up' ? -1 : 1
                    }
                })
            }
            if (action.payloadType === 'created') {
                filteredProducts = data.sort((a, b) => {
                    const priceA = a.createDate;
                    const priceB = b.createDate;
                    if (priceA < priceB) {
                        return action.payload === 'created_latest' ? 1 : -1
                    }
                    if (priceA > priceB) {
                        return action.payload === 'created_latest' ? -1 : 1
                    }
                })
            }
            if (action.payloadType === 'category') {
                filteredProducts = data.filter((dataItem) => dataItem.category[1] === action.payload);
            }
            return {
                ...state,
                filteredProducts: filteredProducts
            }
        case constants.CART_PRODUCTS:
            let allProducts = [...state.products];
            let cartProducts = action.payload && action.payload.length && action.payload.map((id) => {
                return allProducts.filter((item) =>
                    item.id === id
                )
            }).flat();
            return {
                ...state,
                cartProducts
            };
        case constants.CART_PRODUCTS_PRICE:
            return {
                ...state,
                cartProductsPrice: state.cartProductsPrice + action.payload
            }
        default: return state;
    }
}

export default reducer;