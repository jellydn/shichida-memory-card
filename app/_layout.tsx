import { Slot } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function HomeLayout() {
	return (
		<GluestackUIProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<Slot />
			</QueryClientProvider>
		</GluestackUIProvider>
	);
}
