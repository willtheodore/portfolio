import { Flex, chakra, Text } from "@chakra-ui/react";
import * as React from "react";
import ThemeContext from "../contexts/ThemeContext";
import mail from "../assets/mail.svg";

interface MailLineProps {
	children: React.ReactChildren;
}

export default function MailLine({ children }: MailLineProps) {
	const theme = React.useContext(ThemeContext);

	return (
		<Flex
			className="single-line uses-color-theme"
			ml="-200px"
			p="20px 100px 20px 222px"
			direction="row"
			alignItems="center"
			w="70%"
			bg={theme}
		>
			<chakra.img src={mail} h="26px" mr="20px " display="inline" />
			<Text
				as="a"
				href={`mailto:${children}`}
				textStyle="header"
				_hover={{ textDecoration: "underline" }}
			>
				{children}
			</Text>
		</Flex>
	);
}
