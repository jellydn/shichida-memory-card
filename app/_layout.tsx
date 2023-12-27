import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";

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
