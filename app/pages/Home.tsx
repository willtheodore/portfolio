import { Box, chakra, Flex, Heading } from "@chakra-ui/react";
import * as React from "react";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import resume from "../assets/resume.pdf";

export default function Home() {
	const topPad = window.innerHeight - 96;

	return (
		<Flex direction="column" pt={topPad} pl={5} pb={topPad}>
			<Heading textStyle="headline">Will Theodore</Heading>
		</Flex>
	);
}
