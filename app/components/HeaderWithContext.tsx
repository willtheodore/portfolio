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
			ml="22px"
			mr="50px"
			mb={noMB ? "0" : "10px"}
		>
			<Text gridColumn="1/2" textStyle="header">
				{title}
			</Text>
			<Text
				gridColumn="2/3"
				textStyle="subHeader"
				fontWeight="light"
				textAlign="end"
			>
				{context}
			</Text>
		</Grid>
	);
}
