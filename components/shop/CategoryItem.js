import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Colors from '../../constants/Colors';

const CategoryItem = props => {
    let TouchableComponent = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.category}>
            <View style={styles.touchable}>
                <TouchableComponent onPress={props.onViewProducts} useForeground>
                    <View>
                        <View style={styles.imgContainer}>
                            <Image style={styles.image} source={{ uri: props.image }} />
                        </View>
                        <View style={styles.detail}>
                            <Text style={styles.title}>{props.title}</Text>
                        </View>
                        <View style={styles.actions}>
                            <Button color={Colors.primary} title="View Products" onPress={props.onViewProducts} />
                        </View>
                    </View>
                </TouchableComponent>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    category: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 18,
        marginVertical: 4
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '25%',
    },
    detail: {
        alignItems: 'center',
        height: '16%',
        padding: 7
    },
    imgContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    touchable: {
        overflow: 'hidden',
        borderRadius: 10
    }
});

export default CategoryItem
