import React from 'react';
import { FlatList, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import CATEGORIES from '../../data/dummy-data';
import * as cartActions from '../../store/actions/cartActions';
import CustomHeaderButton from '../../components/UI/CustomHeaderButton';

const ProductOverviewScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    // const displayProducts = PRODUCTS.filter(prod => prod.categoryId.indexOf(catId) >= 0);
    const displayProducts = useSelector(state => state.products.availableProducts.filter(prod => prod.categoryId.indexOf(catId) >= 0));

    const dispatch = useDispatch();

    return (
        <FlatList 
            data={displayProducts}
            keyExtractor={item => item.id}
            renderItem={itemData => <ProductItem 
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
                onViewDetail={() => {
                    props.navigation.navigate({
                        routeName: 'ProductDetail',
                        params: {
                            productId: itemData.item.id,
                            productTitle: itemData.item.title,
                            productPrice: itemData.item.price
                        }
                    });
                }}
                onAddToCart={() => {
                    dispatch(cartActions.addToCart(itemData.item));
                }}
            />}
        />
    )
}

ProductOverviewScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(prod => prod.id === catId);
    return {
        headerTitle: selectedCategory.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item 
                title='Cart' 
                iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} 
                onPress={() => {
                    navigationData.navigation.navigate('CartScreen')
                }}
            />
        </HeaderButtons>
    }
}

export default ProductOverviewScreen;
