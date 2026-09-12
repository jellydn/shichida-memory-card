import { Center, Heading, Text, View } from "@gluestack-ui/themed";
import { useAudioPlayer } from "expo-audio";
import { Image } from "expo-image";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";

import { blurhash } from "../utils/blurhash";

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
	currentPosition,
}: {
	item: { picture: string; sound: string; title: string };
	active: boolean;
	currentPosition: string;
}) => {
	const { height, width } = useWindowDimensions();
	const player = useAudioPlayer(active ? item.sound : null);
	const [isFlip, setIsFlip] = useState(false);

	useEffect(() => {
		if (!active) {
			return;
		}

		player.seekTo(0);
		player.play();
		const flipTimer = setTimeout(() => {
			setIsFlip(true);
		}, 1400);

		return () => clearTimeout(flipTimer);
	}, [active, player]);

	return (
		<View width={"100%"} height={"100%"}>
			{active && (
				<Stack.Screen
					options={{
						title: capitalizeEachWord(item.title),
						headerRight: () => <Text>{currentPosition}</Text>,
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
					style={{ width, height }}
				/>
			)}
		</View>
	);
};

export default FlashCard;
