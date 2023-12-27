import { Slot } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

export default function HomeLayout() {
	return (
		<GluestackUIProvider config={config}>
			<Slot />
		</GluestackUIProvider>
	);
}
