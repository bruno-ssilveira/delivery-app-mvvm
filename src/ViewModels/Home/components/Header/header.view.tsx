import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { useHeaderModel } from './header.model';
import { FC } from 'react';
import { HeaderProps } from '.';

interface Props extends HeaderProps {
  model: ReturnType<typeof useHeaderModel>;
}

export const HeaderView: FC<Props> = ({
  model,
  handleCategory,
  selectedCategory,
}) => {
  return (
    <View
      style={{
        width: '100%',
        paddingLeft: 16,
      }}
    >
      <ScrollView horizontal>
        {model.categories?.map((category) => (
          <TouchableOpacity
            onPress={() => handleCategory(category)}
            style={{
              backgroundColor: '#1E293B',
              padding: 8,
              paddingRight: 16,
              paddingHorizontal: 16,
              borderColor: '#1E293B',
              borderWidth: 1,
              borderRadius: 6,
              marginRight: 16,
            }}
            key={category}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
