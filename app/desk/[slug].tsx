import { Text, View } from "@gluestack-ui/themed";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
	FlatList,
	type NativeScrollEvent,
	type NativeSyntheticEvent,
	Pressable,
	StyleSheet,
	useWindowDimensions,
} from "react-native";

import FlashCard from "../../components/FlashCard";

import animalSet from "../../data/set-1-animals.json";
import plantsAndFishSet from "../../data/set-2-plants-and-fish.json";
import humanSet from "../../data/set-3-human.json";
import flagSet1 from "../../data/set-4-flags-1.json";
import flagSet2 from "../../data/set-4-flags-2.json";

type Card = (typeof animalSet)[number];

async function getDeskById(id: string) {
	switch (id) {
		case "1":
			return animalSet;
		case "2":
			return plantsAndFishSet;
		case "3":
			return humanSet;
		case "4":
			return flagSet1;
		case "5":
			return flagSet2;
		default:
			return [];
	}
}
export default function DeskDetailScreen() {
	const { slug } = useLocalSearchParams();
	const { width } = useWindowDimensions();
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ["desk", slug],
		queryFn: () => getDeskById(String(slug)),
	});
	const carouselRef = useRef<FlatList<Card>>(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (!data || currentIndex >= data.length - 1) {
			return;
		}

		const autoplayTimer = setTimeout(() => {
			const nextIndex = currentIndex + 1;
			carouselRef.current?.scrollToIndex({ animated: true, index: nextIndex });
			setCurrentIndex(nextIndex);
		}, 2000);

		return () => clearTimeout(autoplayTimer);
	}, [currentIndex, data]);

	function goToSlide(index: number) {
		carouselRef.current?.scrollToIndex({ animated: true, index });
		setCurrentIndex(index);
	}

	function handleScrollEnd(event: NativeSyntheticEvent<NativeScrollEvent>) {
		setCurrentIndex(Math.round(event.nativeEvent.contentOffset.x / width));
	}

	if (isLoading) {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	}

	if (isSuccess) {
		return (
			<View height="100%" width="100%">
				<FlatList
					data={data}
					getItemLayout={(_data, index) => ({
						index,
						length: width,
						offset: width * index,
					})}
					horizontal={true}
					keyExtractor={(item) => item.title}
					onMomentumScrollEnd={handleScrollEnd}
					pagingEnabled={true}
					ref={carouselRef}
					renderItem={({ item, index }) => (
						<View height="100%" width={width}>
							<FlashCard
								currentPosition={`${index + 1} / ${data.length}`}
								item={{
									picture: item.imageSrc,
									sound: item.mp3,
									title: item.title,
								}}
								active={index === currentIndex}
							/>
						</View>
					)}
					showsHorizontalScrollIndicator={false}
				/>
				{currentIndex > 0 && (
					<Pressable
						accessibilityLabel="Previous card"
						onPress={() => goToSlide(currentIndex - 1)}
						style={[styles.navigationButton, styles.previousButton]}
					>
						<Text size="4xl">‹</Text>
					</Pressable>
				)}
				{currentIndex < data.length - 1 && (
					<Pressable
						accessibilityLabel="Next card"
						onPress={() => goToSlide(currentIndex + 1)}
						style={[styles.navigationButton, styles.nextButton]}
					>
						<Text size="4xl">›</Text>
					</Pressable>
				)}
			</View>
		);
	}

	return (
		<View>
			<Text>Unknown error</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	navigationButton: {
		alignItems: "center",
		backgroundColor: "rgba(255, 255, 255, 0.8)",
		borderRadius: 24,
		height: 48,
		justifyContent: "center",
		position: "absolute",
		top: "45%",
		width: 48,
	},
	nextButton: {
		right: 16,
	},
	previousButton: {
		left: 16,
	},
});
