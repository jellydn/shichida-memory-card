import { useLocalSearchParams } from "expo-router";

import { Text } from "react-native";

export default function DeskScreen() {
	const { slug } = useLocalSearchParams();

	return <Text>Desk : {slug}</Text>;
}
