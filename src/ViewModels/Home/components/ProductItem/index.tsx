import { FC } from 'react';
import { Product } from '../../../../shared/interfaces/product';
import { Image, View, Text, Platform } from 'react-native';
import { styles } from './styles';

interface Props {
  product: Product;
}

export const ProductItem: FC<Props> = ({ product }) => {
  const host: string =
    Platform.select({
      android: '10.0.2.2',
      ios: 'localhost',
    }) || 'localhost';

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: product.image.replace('localhost', host) }}
      />
      <View>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </View>
  );
};
