import SHOP_DATA from '../../data/dummy-data';
import CATEGORIES from '../../data/dummy-data';

const initialState = {
    availableCategories: CATEGORIES,
}

export default(state = initialState, action) => {
    return state;
}