import { ADD_TO_CART, REMOVE_FROM_CART, ADD_ORDER } from '../types';

import CartItem from '../../models/cart';

const initialState = {
    items: {},
    totalAmount: 0
}

export default(state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;

            if(state.items[addedProduct.id]) {
                //already have item in the card
                const updatedCartItem = new CartItem(state.items[addedProduct.id].quantity + 1, prodPrice, prodTitle, state.items[addedProduct.id].sum + prodPrice );
                return {
                    ...state,
                    items: {...state.items, [addedProduct.id]: updatedCartItem},
                    totalAmount: state.totalAmount + prodPrice
                }
            } else {
                const newCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
                return {
                    ...state,
                    //add a dynamic property setting the product id to the newCartItem being added
                    items: {...state.items, [addedProduct.id]: newCartItem},
                    totalAmount: state.totalAmount + prodPrice
                }
            }
        case REMOVE_FROM_CART:
            const selectedCartItem = state.items[action.id];
            const currentQty = selectedCartItem.quantity;
            let updatedCartItems;
            //need to reduce quantity
            if(currentQty > 1){
                const updatedCartItem = new CartItem(
                    selectedCartItem.quantity - 1, 
                    selectedCartItem.price, 
                    selectedCartItem.title, 
                    selectedCartItem.sum - selectedCartItem.price
                );
                updatedCartItems = {...state.items, [action.id]: updatedCartItem};
            } else {
                updatedCartItems = {...state.items};
                delete updatedCartItems[action.id];
            }
            return {
                ...state,
                items: updatedCartItems,
                totalAmount: state.totalAmount - selectedCartItem.price
            }
            case ADD_ORDER:
                return initialState;
        default:
            return state;
    }
};