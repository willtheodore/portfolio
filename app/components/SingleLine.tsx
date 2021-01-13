import { Box, Text } from "@chakra-ui/react";
import * as React from "react";

interface SingleLineProps {
	children: React.ReactChildren;
}

export default function SingleLine({ children }: SingleLineProps) {
	return (
		<Box
			className="single-line"
			w="75vw"
			mt="35vh"
			p="40px 50px 40px 222px"
			ml="-200px"
			bg="darkGray"
		>
			<Text textStyle="body" fontSize="25px">
				{children}
			</Text>
		</Box>
	);
}
