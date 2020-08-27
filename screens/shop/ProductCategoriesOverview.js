import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';

import CategoryItem from '../../components/shop/CategoryItem';

const ProductCategoriesOverview = props => {
    const categories = useSelector(state => state.products.availableCategories);

    return (
        <FlatList 
            data={categories}
            keyExtractor={item => item.id}
            renderItem={itemData => <CategoryItem 
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                onViewProducts={() => {}}
            />}
        />
    )
};

ProductCategoriesOverview.navigationOptions = {
    headerTitle: 'All Categories'
}

export default ProductCategoriesOverview;
