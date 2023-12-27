import { StatusBar } from "expo-status-bar";
import {
	Heading,
	View,
	Box,
	FlatList,
	HStack,
	Avatar,
	AvatarImage,
	VStack,
	Text,
} from "@gluestack-ui/themed";
import { Image } from "expo-image";
import { Link } from "expo-router";

import * as React from "react";

import animalSet from "../data/set-1-animals.json";
import plantsAndFishSet from "../data/set-2-plants-and-fish.json";
import humanSet from "../data/set-3-human.json";
import flagSet1 from "../data/set-4-flags-1.json";
import flagSet2 from "../data/set-4-flags-2.json";
import { Pressable } from "react-native";

type DeskItem = {
	id: number;
	name: string;
	avatar: string;
	desk: unknown[];
	enableFlipCard: boolean;
};

const getRandomImage = (items: DeskItem[]) => {
	const randomIndex = Math.floor(Math.random() * items.length);
	return items[randomIndex].imageSrc;
};

const list = [
	{
		id: 1,
		name: "Animals",
		avatar: getRandomImage(animalSet),
		enableFlipCard: true,
	},
	{
		id: 2,
		name: "Plants & Fish",
		avatar: getRandomImage(plantsAndFishSet),
		enableFlipCard: true,
	},
	{
		id: 3,
		name: "Human",
		avatar: getRandomImage(humanSet),
		enableFlipCard: true,
	},
	{
		id: 4,
		name: "Flag 1",
		avatar: getRandomImage(flagSet1),
		enableFlipCard: true,
	},
	{
		id: 5,
		name: "Flag 2",
		avatar: getRandomImage(flagSet2),
		enableFlipCard: true,
	},
];

const blurhash =
	"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function HomeScreen() {
	return (
		<View p="$4">
			<Heading size="4xl" fontFamily="CommitMono">
				Desk
			</Heading>

			<FlatList
				data={list}
				renderItem={({ item }) => (
					<Link
						asChild
						href={`/desk/${(item as DeskItem).id}?name=${
							(item as DeskItem).name
						}`}
					>
						<Pressable>
							<Box
								borderColor="$borderLight200"
								borderRadius="$lg"
								borderWidth="$1"
								my="$4"
								overflow="hidden"
								$base-mx="$5"
								$dark-bg="$backgroundDark900"
								$dark-borderColor="$borderDark800"
							>
								<HStack>
									<Image
										width={"30%"}
										contentFit="cover"
										placeholder={blurhash}
										source={{
											uri: (item as DeskItem).avatar,
										}}
										alt={(item as DeskItem).name}
										transition={500}
									/>
									<VStack px="$6" pt="$4" pb="$6">
										<Text $dark-color="$textLight200" fontSize="$xs" my="$1.5">
											Desk #{(item as DeskItem).id}
										</Text>
										<Heading $dark-color="$textLight200" size="xl">
											{(item as DeskItem).name}
										</Heading>
									</VStack>
								</HStack>
							</Box>
						</Pressable>
					</Link>
				)}
				keyExtractor={(item) => (item as DeskItem).name}
			/>
			<StatusBar style="auto" />
		</View>
	);
}
