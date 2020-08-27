import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import ordersReducer from './reducers/ordersReducer';

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    orders: ordersReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;