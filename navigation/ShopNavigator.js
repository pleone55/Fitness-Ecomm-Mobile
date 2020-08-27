import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import ProductCategoriesOverview from '../screens/shop/ProductCategoriesOverview';
import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator({
    CategoriesOverview: ProductCategoriesOverview
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
});

export default createAppContainer(ProductsNavigator);