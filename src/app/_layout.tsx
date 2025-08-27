import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";


const client = new QueryClient();

export default function Layout() {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#0F172A' }}>
			<QueryClientProvider client={client}>
				<Stack screenOptions={{ headerShown: false }}/>
			</QueryClientProvider>
		</SafeAreaView>
	)
}