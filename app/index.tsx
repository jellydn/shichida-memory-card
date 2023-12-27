import { StatusBar } from "expo-status-bar";
import { Heading, View } from "@gluestack-ui/themed";
import { Link } from "expo-router";

import AnimatedStyle from "../components/AnimatedStyle";

export default function HomeScreen() {
	return (
		<View p="$4">
			<Heading size="4xl" fontFamily="CommitMono">
				Home
			</Heading>
			<AnimatedStyle />
			<Link href="/about">About</Link>
			<StatusBar style="auto" />
		</View>
	);
}
