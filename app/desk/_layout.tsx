import { ArrowLeftIcon, Icon } from "@gluestack-ui/themed";
import { Stack, Link, useLocalSearchParams } from "expo-router";

export default function Layout() {
	const { slug } = useLocalSearchParams();

	return (
		<Stack
			screenOptions={{
				title: `Desk #${slug}`,
				headerLeft: () => (
					<Link href="/">
						<Icon as={ArrowLeftIcon} m="$2" w="$4" h="$4" />
					</Link>
				),
			}}
		/>
	);
}
