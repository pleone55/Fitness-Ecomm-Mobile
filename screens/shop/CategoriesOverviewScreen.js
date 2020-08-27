import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CategoryItem from '../../components/shop/CategoryItem';
import CustomHeaderButton from '../../components/UI/CustomHeaderButton';

const CategoriesOverviewScreen = props => {
    const categories = useSelector(state => state.products.availableCategories);

    return (
        <FlatList 
            data={categories}
            keyExtractor={item => item.id}
            renderItem={itemData => <CategoryItem 
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                onViewProducts={() => {
                    props.navigation.navigate({
                        routeName: 'ProductOverview',
                        params: {
                            categoryId: itemData.item.id,
                            productTitle: itemData.item.title,
                            productPrice: itemData.item.price
                        }
                    })
                }}
            />}
        />
    )
};

CategoriesOverviewScreen.navigationOptions = navigationData => {
    return {
        headerTitle: 'All Categories',
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item 
                title='Cart' 
                iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} 
                onPress={() => {
                    navigationData.navigation.navigate('CartScreen')
                }}
            />
        </HeaderButtons>,
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

export default CategoriesOverviewScreen;
