import { Center, Heading, Text, View } from "@gluestack-ui/themed";
import { Audio } from "expo-av";
import { Image } from "expo-image";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

import { blurhash } from "../utils/blurhash";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

async function playSound(uri: string) {
	console.log("Loading sound", uri);
	const { sound } = await Audio.Sound.createAsync({
		uri,
	});
	console.log("Playing sound", uri);
	await sound.playAsync();
}
function capitalizeFirstLetter(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
function capitalizeEachWord(str: string) {
	const words = str.split(" ");
	const capitalizedWords = words.map((word) => capitalizeFirstLetter(word));
	return capitalizedWords.join(" ");
}

const FlashCard = ({
	item,
	active,
}: {
	item: { picture: string; sound: string; title: string };
	active: boolean;
}) => {
	const [isFlip, setIsFlip] = useState(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: Only play sound when active changes
	useEffect(() => {
		if (active) {
			playSound(item.sound);
			setTimeout(() => {
				setIsFlip(true);
			}, 800);
		}
	}, [active]);

	return (
		<View width={"100%"} height={"100%"}>
			{active && (
				<Stack.Screen
					options={{
						title: capitalizeEachWord(item.title),
						headerRight: () => <Text>Info</Text>,
					}}
				/>
			)}
			{isFlip ? (
				<Center width={"100%"} height={"100%"}>
					<Heading fontFamily="CommitMono" textAlign="center" size="5xl">
						{capitalizeFirstLetter(item.title)}
					</Heading>
				</Center>
			) : (
				<Image
					placeholder={blurhash}
					source={{
						uri: item.picture,
					}}
					alt={item.title}
					style={{ width: screenWidth, height: screenHeight }}
				/>
			)}
		</View>
	);
};

export default FlashCard;
