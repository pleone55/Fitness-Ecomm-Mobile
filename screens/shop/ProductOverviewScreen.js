import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

import CATEGORIES from '../../data/dummy-data';

const ProductOverviewScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    // const displayProducts = PRODUCTS.filter(prod => prod.categoryId.indexOf(catId) >= 0);
    const displayProducts = useSelector(state => state.products.availableProducts.filter(prod => prod.categoryId.indexOf(catId) >= 0));

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
                onAddToCart={() => {}}
            />}
        />
    )
}

ProductOverviewScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(prod => prod.id === catId);
    return {
        headerTitle: selectedCategory.title
    }
}

export default ProductOverviewScreen;
