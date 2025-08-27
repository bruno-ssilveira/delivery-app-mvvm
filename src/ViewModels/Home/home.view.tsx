import { FC } from "react";
import { View, Text, SectionList } from "react-native";
import { useHomeModel } from "./home.model";


export const HomeView: FC<ReturnType<typeof useHomeModel>> = ({ products }) => {
	return (
		<SectionList
			sections={products}
			data={products}
			renderSectionHeader={({ section: { title } }) => <Text>{title}</Text> }
			renderItem={({ item }) => (
				<View>
					<Text>{item.name}</Text>
					
				</View>
			)}
		/>
	);
};