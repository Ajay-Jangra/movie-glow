import { ActionTypes } from "../contants/action-types";
const initialProducts = {
    products:[],
 };
 
 

// const initialFav = {
//     fav:[{}],
// };

// export const favoritesReducer = (state = initialFav, action) => {
//     switch (action.type) {
//         case ActionTypes.ADD_TO_FAVORITES:{
//             const fav=[];
//             fav.puah({rate:action.payload});
//             return {
//                 ...state, fav,
//             }
//         };
//         case ActionTypes.REMOVE_FROM_FAVORITES:
//             return {
                
//             };
//         default:
//             return state;
//     }
// };

 

 // action = {type,payload };
export const productReducer = (state = initialProducts, {type,payload})=>{
    // console.log(initialState);
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state ,products:payload} ;
    
        default:
            return state;
    }
 }

export const selectedProductReducer = (state = {}, { type, payload }) => {
    // console.log(initialState);
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return  {};
        default:
            return state;
    }
}


 
 
 
