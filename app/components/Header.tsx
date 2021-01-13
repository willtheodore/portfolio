import { Box, Text } from "@chakra-ui/react";
import * as React from "react";
import ThemeContext from "../contexts/ThemeContext";

interface HeaderProps {
	title: string;
}

export default function Header({ title }: HeaderProps) {
	const theme = React.useContext(ThemeContext);

	return (
		<Box
			className="page-header"
			position="absolute"
			top="25px"
			padding="10px 40px 10px 60px"
			ml="-40px"
			bg="darkGray"
			borderBottom={`5px solid ${theme}`}
			transition="border-color 300ms ease-in-out"
		>
			<Text
				fontFamily="protipo"
				fontWeight="bold"
				fontSize="5vw"
				textTransform="uppercase"
				letterSpacing="7px"
			>
				{title}
			</Text>
		</Box>
	);
}
