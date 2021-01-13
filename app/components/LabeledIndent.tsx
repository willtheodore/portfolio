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
			alignItems="baseline"
			ml="22px"
			mr="50px"
			mb="10px"
		>
			<Text gridColumn="1/2" textStyle="body" as="em">
				{title}
			</Text>
			<Text gridColumn="2/3" textStyle="body">
				{children}
			</Text>
		</Grid>
	);
}
