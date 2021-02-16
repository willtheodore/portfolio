import { Box, Flex, Text } from "@chakra-ui/react";
import ThemeContext, { Theme } from "../contexts/ThemeContext";
import * as React from "react";

interface ThemeSelectorProps {
	toggleTheme: (value: Theme) => void;
}

export default function ThemeSelector({ toggleTheme }: ThemeSelectorProps) {
	const [isActive, setIsActive] = React.useState<boolean>(false);

	const handleClick = () => {
		if (!isActive) {
			setIsActive(true);
		}
	};

	return (
		<Flex
			padding="5px 10px"
			className="gray-bg-hover"
			position="absolute"
			top="20px"
			right="40px"
			zIndex="docked"
			direction="row"
			alignItems="top"
			borderRadius="md"
			onClick={handleClick}
		>
			<Text textAlign="right" textStyle="smallCaps" mr="10px" mt="5px">
				Change Theme
			</Text>
			<ThemeSelectorCircle
				color={Theme.blue}
				mr="-40px"
				activeState={[isActive, setIsActive]}
				toggleTheme={toggleTheme}
			/>
			<ThemeSelectorCircle
				color={Theme.red}
				mr="-40px"
				mt={isActive ? "50px" : ""}
				activeState={[isActive, setIsActive]}
				toggleTheme={toggleTheme}
			/>
			<ThemeSelectorCircle
				color={Theme.purple}
				mr="-40px"
				mt={isActive ? "100px" : ""}
				activeState={[isActive, setIsActive]}
				toggleTheme={toggleTheme}
			/>
			<ThemeSelectorCircle
				color={Theme.green}
				mt={isActive ? "150px" : ""}
				activeState={[isActive, setIsActive]}
				toggleTheme={toggleTheme}
			/>
		</Flex>
	);
}

interface ThemeCircleSelectorProps {
	color: Theme;
	activeState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
	toggleTheme: (value: Theme) => void;
	mt?: string;
	mr?: string;
}

function ThemeSelectorCircle({
	color,
	mt,
	mr,
	activeState,
	toggleTheme,
}: ThemeCircleSelectorProps) {
	const theme = React.useContext(ThemeContext);
	const [isActive, setIsActive] = activeState;

	const handleClick = () => {
		if (isActive) {
			toggleTheme(color);
			setIsActive(false);
		}
	};

	return (
		<Box
			className="drift-down"
			onClick={handleClick}
			mt={mt}
			mr={mr}
			zIndex={theme === color ? "stackTop" : "stackBottom"}
			h="40px"
			w="40px"
			borderRadius="50%"
			bg={color}
			border="2px solid white"
		/>
	);
}
