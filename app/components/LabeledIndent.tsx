import { Grid, Text } from "@chakra-ui/react";
import * as React from "react";

interface LabeledIndentProps {
	title: string;
	children: React.ReactPropTypes;
}

export default function LabeledIndent({ title, children }: LabeledIndentProps) {
	return (
		<Grid
			templateColumns="25% 1fr"
			templateRows="auto auto"
			alignItems="baseline"
			ml="22px"
			mr="50px"
			mb={{ base: "30px", lg: "10px" }}
		>
			<Text
				gridRow={{ base: "1/2", lg: "1/3" }}
				gridColumn={{ base: "1/3", lg: "1/2" }}
				mb={{ base: "10px", lg: "0" }}
				textStyle="body"
				as="em"
			>
				{title}
			</Text>
			<Text
				gridRow={{ base: "2/3", lg: "1/3" }}
				gridColumn={{ base: "1/3", lg: "2/3" }}
				textStyle="body"
			>
				{children}
			</Text>
		</Grid>
	);
}
