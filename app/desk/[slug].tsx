import { useLocalSearchParams } from "expo-router";

import { View, Heading } from "@gluestack-ui/themed";

export default function DeskDetailScreen() {
	const { slug } = useLocalSearchParams();
	return (
		<View p="$4">
			<Heading size="4xl" fontFamily="CommitMono">
				Slug: {slug}
			</Heading>
		</View>
	);
}
