import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform } from 'react-native';

import CategoriesOverviewScreen from '../screens/shop/CategoriesOverviewScreen';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import Colors from '../constants/Colors';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import { Ionicons } from '@expo/vector-icons';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}

const ProductsNavigator = createStackNavigator({
    CategoriesOverview: CategoriesOverviewScreen,
    ProductOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen,
    CartScreen: CartScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => <Ionicons 
            name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} 
            size={23} 
            color={drawerConfig.tintColor}
        />
    },
    defaultNavigationOptions: defaultNavOptions
});

const OrdersNavigator = createStackNavigator({
    OrdersScreen: OrdersScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => <Ionicons 
            name={Platform.OS === 'android' ? 'md-list' : 'ios-list'} 
            size={23} 
            color={drawerConfig.tintColor}
        />
    },
    defaultNavigationOptions: defaultNavOptions
});

const ShopNavigator = createDrawerNavigator({
    Products: ProductsNavigator,
    Orders: OrdersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.primary
    }
})

export default createAppContainer(ShopNavigator);