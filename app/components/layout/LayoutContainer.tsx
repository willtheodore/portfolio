import { Box, Grid } from "@chakra-ui/react";
import * as React from "react";
import { Footer } from "../chakra";

import Sidebar from "../Sidebar";

interface LayoutContainerProps {
	children: JSX.Element;
}

export default function LayoutContainer({ children }: LayoutContainerProps) {
	return (
		<Grid h="100%" w="100%" templateColumns="30% 1fr">
			<Sidebar />
			<Grid templateRows="1fr auto" gridColumn="2/3">
				<Box bg="gray.700" gridRow="1/2" pl="6vw" ml="-6vw" h="100%">
					{children}
				</Box>
				<Footer gridRow="2/3" />
			</Grid>
		</Grid>
	);
}
