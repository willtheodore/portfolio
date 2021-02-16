import { Box, Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import ThemeContext from "../contexts/ThemeContext";

interface HeaderProps {
	title: string;
}

export default function Header({ title }: HeaderProps) {
	const theme = React.useContext(ThemeContext);

	return (
		<Flex
			className="page-header"
			position="absolute"
			top="25px"
			padding={["10px 40px 10px 60px"]}
			mt={{ base: "10vh", lg: "0" }}
			ml="-40px"
			bg="darkGray"
			borderBottom={`5px solid ${theme}`}
			transition="border-color 300ms ease-in-out"
		>
			<Text
				fontFamily="protipo"
				fontWeight="bold"
				fontSize={{ base: "30px", sm: "40px", lg: "60px" }}
				textTransform="uppercase"
				letterSpacing="7px"
			>
				{title}
			</Text>
		</Flex>
	);
}
