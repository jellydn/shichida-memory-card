import { StyleSheet, Text, View } from "react-native";

import { Link } from "expo-router";

export default function AboutScreen() {
	return (
		<View style={styles.container}>
			<Text style={{ fontFamily: "CommitMono", fontSize: 30 }}>
				About Screen
			</Text>
			<Link href="/">Home</Link>
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
