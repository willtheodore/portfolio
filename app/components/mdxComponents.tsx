import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { MDXProviderProps } from "@mdx-js/react";
import * as React from "react";
import ThemeContext from "../contexts/ThemeContext";

export function H1(props: MDXProviderProps) {
	const theme = React.useContext(ThemeContext);
	const textRef = React.useRef<HTMLParagraphElement>(null);
	const [width, setWidth] = React.useState<number | null>(null);

	React.useEffect(() => {
		if (textRef.current) {
			setWidth(textRef.current.offsetWidth);
		}
	}, [textRef.current]);

	return (
		<Box margin="50px 30px 20px 22px">
			<Text display="inline" textStyle="headerCaps" ref={textRef} {...props} />
			<Box
				className="uses-color-theme"
				ml={width ? -100 : 0}
				w={width ? width + 100 : 0}
				h="5px"
				backgroundColor={theme}
			/>
		</Box>
	);
}

export function H2(props: MDXProviderProps) {
	return <Text textStyle="header" {...props} ml="22px" />;
}

export function H3(props: MDXProviderProps) {
	return (
		<Text
			as="em"
			textStyle="subHeader"
			{...props}
			ml="22px"
			mb="20px"
			display="block"
		/>
	);
}

export function P(props: MDXProviderProps) {
	return (
		<Text display="block" textStyle="body" ml="22px" mr="50px" {...props} />
	);
}

export function Bullet(props: MDXProviderProps) {
	return (
		<Grid templateColumns="20px 1fr" ml="22px" mr="50px" mb="10px">
			<Grid gridColumn="1/2" placeItems="center">
				<Text>•</Text>
			</Grid>
			<Text textStyle="body" {...props} />
		</Grid>
	);
}

export function Spacer(props: MDXProviderProps) {
	return <Box h="50px" display="block" />;
}