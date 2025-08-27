import { FC } from "react";
import { View, Text, SectionList } from "react-native";
import { useHomeModel } from "./home.model";
import { ProductItem } from "./components/ProductItem";
import { styles } from "./styles";


export const HomeView: FC<ReturnType<typeof useHomeModel>> = ({
	products,
	fetchNextPage,
}) => {
	return (
		<SectionList
			sections={products}
			data={products}
			renderSectionHeader={({ section: { title } }) => <Text>{title}</Text> }
			renderItem={({ item }) => (
				<ProductItem product={item}/>
			)}
			style={styles.container}
		/>
	);
};