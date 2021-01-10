import { Flex, Text } from "@chakra-ui/react";
import * as React from "react";

export function Footer() {
	return (
		<Flex direction="column" bg="gray.800">
			<Text padding="20px 0" textStyle="body">
				© Will Theodore 2021
			</Text>
		</Flex>
	);
}
