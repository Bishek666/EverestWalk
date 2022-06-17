import * as constants from "../constants";
import { API_ENDPOINTS } from "../../utils/api/endpoints";

const fetchProductSuccess = products => {
    return {
        type: constants.FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

const fetchProductFailure = products => {
    return {
        type: constants.FETCH_PRODUCTS_FAILURE,
        payload: products
    }
}

const getAllCategories = products => {
    return {
        type: constants.GET_PRODUCTS_CATEGORIES,
        payload: products
    }
}

export const getfilteredProducts = (filterBy, filterValue) => {
    return {
        type: constants.GET_FILTERED_PRODUCTS,
        payloadType: filterBy,
        payload: filterValue,
    }
}

export const cartProducts = () => {
    const cardIds = JSON.parse(localStorage.getItem('carts'));
    return {
        type: constants.CART_PRODUCTS,
        payload: cardIds,
    }
}

export const cartProductsPrice = (price) => {
    return {
        type: constants.CART_PRODUCTS_PRICE,
        payload: price,
    }
}


export const fetchProducts = () => {
    return (dispatch) => {
        fetch(API_ENDPOINTS.PRODUCTS)
            .then(response => response.json())
            .then(products => {
                dispatch(fetchProductSuccess(products.data.product));
                dispatch(getAllCategories(products.data.product));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchProductFailure(errorMsg));
            });
    }
};