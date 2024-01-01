import { Text, View } from "@gluestack-ui/themed";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import Carousel from "react-native-swiper";

import FlashCard from "../../components/FlashCard";

import { useState } from "react";
import animalSet from "../../data/set-1-animals.json";
import plantsAndFishSet from "../../data/set-2-plants-and-fish.json";
import humanSet from "../../data/set-3-human.json";
import flagSet1 from "../../data/set-4-flags-1.json";
import flagSet2 from "../../data/set-4-flags-2.json";

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
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ["desk", slug],
		queryFn: () => getDeskById(String(slug)),
	});
	const [currentIndex, setCurrentIndex] = useState(0);

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
				<Carousel
					autoplay={true}
					loop={false}
					autoplayTimeout={2}
					showsButtons={true}
					showsPagination={false}
					onMomentumScrollEnd={async (_e, state, _context) => {
						console.log("index:", state.index);
						setCurrentIndex(state.index + 1);
					}}
				>
					{data.map((item, index) => (
						<FlashCard
							key={item.title}
							currentPosition={`${index + 1} / ${data.length}`}
							item={{
								picture: item.imageSrc,
								sound: item.mp3,
								title: item.title,
							}}
							active={index === currentIndex}
						/>
					))}
				</Carousel>
			</View>
		);
	}

	return (
		<View>
			<Text>Unknown error</Text>
		</View>
	);
}
