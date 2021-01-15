import { Flex, chakra, Text, useBreakpointValue } from "@chakra-ui/react";
import * as React from "react";
import ThemeContext from "../contexts/ThemeContext";
import mail from "../assets/mail.svg";

interface MailLineProps {
	children: React.ReactChildren;
}

export default function MailLine({ children }: MailLineProps) {
	const theme = React.useContext(ThemeContext);
	const isMobile = useBreakpointValue({ base: true, md: false });

	return (
		<Flex
			className={`${!isMobile && "single-line"} uses-color-theme`}
			display="inline-block"
			ml={{ base: "", md: "-200px" }}
			p={{ base: "20px", md: "20px 100px 20px 222px" }}
			direction="row"
			w={isMobile ? "100%" : ""}
			alignItems="center"
			bg={theme}
		>
			<chakra.img
				src={mail}
				h={{ base: "20px", md: "2vw" }}
				mr="20px "
				display="inline"
			/>
			<Text
				as="a"
				href={`mailto:${children}`}
				textStyle="header"
				fontSize={{ base: "20px", md: "2vw" }}
				_hover={{ textDecoration: "underline" }}
			>
				{children}
			</Text>
		</Flex>
	);
}
