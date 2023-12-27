import { View, Button, ButtonText } from "@gluestack-ui/themed";
import Animated, { useSharedValue } from "react-native-reanimated";

export default function AnimatedStyle() {
	const width = useSharedValue(100);

	const handlePress = () => {
		width.value = width.value + 50;
	};

	return (
		<View p="$4" style={{ flex: 1, alignItems: "center" }}>
			<Animated.View
				style={{
					width,
					height: 100,
					backgroundColor: "violet",
				}}
			/>
			<Button mt="$4" onPress={handlePress}>
				<ButtonText>Press me</ButtonText>
			</Button>
		</View>
	);
}
