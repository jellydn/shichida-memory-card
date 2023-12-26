import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import AnimatedStyle from "../assets/components/AnimatedStyle";

export default function HomeScreen() {
	const insets = useSafeAreaInsets();

	return (
		<View style={{ ...styles.container, paddingTop: insets.top }}>
			<Text style={{ fontFamily: "CommitMono", fontSize: 30 }}>
				Home Screen
			</Text>
			<AnimatedStyle />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
