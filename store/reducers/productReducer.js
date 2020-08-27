import SHOP_DATA, { PRODUCTS } from '../../data/dummy-data';
import CATEGORIES from '../../data/dummy-data';

const initialState = {
    availableCategories: CATEGORIES,
    availableProducts: PRODUCTS
}

export default(state = initialState, action) => {
    return state;
}