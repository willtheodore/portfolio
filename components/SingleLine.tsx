import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import * as React from "react";

interface SingleLineProps {
	children: React.ReactChildren;
}

export default function SingleLine({ children }: SingleLineProps) {
	const isMobile = useBreakpointValue({ base: true, md: false });

	return (
		<Box
			className={isMobile ? "" : "single-line"}
			w={{ base: "100%", md: "75vw" }}
			mt={{ base: "25vh", md: "35vh" }}
			p={{ base: "20px", md: "40px 50px 40px 222px" }}
			ml={{ base: "", md: "-200px" }}
			bg="darkGray"
		>
			<Text textStyle="body" fontSize="25px">
				{children}
			</Text>
		</Box>
	);
}
