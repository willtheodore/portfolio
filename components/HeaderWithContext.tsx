import { Grid, Text } from "@chakra-ui/react";
import * as React from "react";

interface HeaderWithContextProps {
	title: string;
	context: string;
	noMB: boolean;
}

export function HeaderWithContext({
	title,
	context,
	noMB,
}: HeaderWithContextProps) {
	return (
		<Grid
			templateColumns="1fr 1fr"
			templateRows="auto auto"
			alignItems="baseline"
			ml="22px"
			mr="50px"
			mb={noMB ? "0" : "10px"}
		>
			<Text
				gridColumn={{ base: "1/3", lg: "1/2" }}
				gridRows={{ base: "1/2", lg: "1/3" }}
				textStyle="header"
			>
				{title}
			</Text>
			<Text
				gridColumn={{ base: "1/3", lg: "2/3" }}
				gridRows={{ base: "2/3", lg: "1/3" }}
				textStyle="subHeader"
				fontWeight="light"
				textAlign={{ base: "start", lg: "end" }}
			>
				{context}
			</Text>
		</Grid>
	);
}
