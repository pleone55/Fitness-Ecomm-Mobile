import React from 'react';
import { FlatList, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../../components/UI/CustomHeaderButton';
import OrderItem from '../../components/shop/OrderItem';

const OrdersScreen = props => {
    const orders = useSelector(state => state.orders.orders);
    return (
        <FlatList 
            data={orders}
            keyExtractor={item => item.id}
            renderItem={itemData => <OrderItem 
                amount={itemData.item.totalAmount}
                date={itemData.item.readableDate}
            />}
        />
    );
};

OrdersScreen.navigationOptions = navigationData => {
    return {
        headerTitle: 'Your Orders',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item 
            title="Menu" 
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => {
                navigationData.navigation.toggleDrawer();
            }}
        />
    </HeaderButtons>
    }
}

export default OrdersScreen;
