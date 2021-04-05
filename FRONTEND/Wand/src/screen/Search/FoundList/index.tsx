import React from 'react';
import { Product } from '../../../models/initiaState';
import { Text, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './styles';
import setCostValue2Decimals from '../../../utils/setCostValue2Decimals';

export default function FoundList ({ navigation, foundList }:{navigation:any, foundList:Product[]}) {
  return (
<FlatList
        bounces={false}
        style={styles.listContainer}
        data={foundList}
        numColumns={2}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) =>
        <TouchableOpacity
        style={styles.imageContainer}
        key={item.name}
        testID='foundListImage'
        onPress={() => navigation.navigate('Detail', { productId: item._id })}>
      <Image source={{ uri: item.images.cover }}
      style={styles.image}>
        </Image>
        <Text style={styles.detail}>{item.name}</Text>
        <Text style={styles.cost}>{`${setCostValue2Decimals(item.cost.value)} ${item.cost.currency}`}</Text>
      </TouchableOpacity>
        }>
      </FlatList>
  );
}
