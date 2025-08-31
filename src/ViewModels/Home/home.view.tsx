import { FC } from 'react';
import { View, Text, SectionList } from 'react-native';
import { useHomeModel } from './home.model';
import { ProductItem } from './components/ProductItem';
import { styles } from './styles';
import { Header } from './components/Header/index';

export const HomeView: FC<ReturnType<typeof useHomeModel>> = ({
  products,
  fetchNextPage,
  isFetching,
  hasNextPage,
  isFetchingNextPage,
  handleCategory,
  selectedCategory,
}) => {
  return (
    <SectionList
      sections={products}
      keyExtractor={(item) => `product-${item.id}`}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.title}>{title}</Text>
      )}
      renderItem={({ item }) => <ProductItem product={item} />}
      style={styles.container}
      ListHeaderComponent={
        <Header
          handleCategory={handleCategory}
          selectedCategory={selectedCategory ?? ''}
        />
      }
      onEndReached={() => {
        if (hasNextPage && !isFetchingNextPage) fetchNextPage();
      }}
    />
  );
};
