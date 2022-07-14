import { ActionTypes } from "../contants/action-types.js"

 


export const setProducts =(products)=>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload:products,
    }
}

export const selectedProduct = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products,
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
         
    }
}


// export function addToFavorites(movie) {
//     return { type: ActionTypes.ADD_TO_FAVORITES, payload: movie };
// }

// export function removeFromFavorites(movie) {
//     return {
//         type:ActionTypes.REMOVE_FROM_FAVORITES,
//         payload: movie.id,
//     };
// }
 