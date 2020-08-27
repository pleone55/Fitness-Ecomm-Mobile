import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';

import CategoryItem from '../../components/shop/CategoryItem';

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

CategoriesOverviewScreen.navigationOptions = {
    headerTitle: 'All Categories'
}

export default CategoriesOverviewScreen;
