import { Heading, View } from "@gluestack-ui/themed";
import { Link } from "expo-router";

export default function AboutScreen() {
	return (
		<View p="$4">
			<Heading size="4xl" fontFamily="CommitMono">
				About
			</Heading>
			<Link href="/">Home</Link>
		</View>
	);
}
