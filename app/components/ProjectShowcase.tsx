import { Box, chakra, Flex, Grid, Text } from "@chakra-ui/react";
import * as React from "react";
import ThemeContext from "../contexts/ThemeContext";
import chevronRight from "../assets/chevronRight.svg";
import chevronLeft from "../assets/chevronLeft.svg";

interface ProjectShowcaseProps {
	title: string;
	url: string;
	nodes: number;
	children: React.ReactChildren;
}

export default function ProjectShowcase({
	title,
	url,
	nodes,
	children,
}: ProjectShowcaseProps) {
	const theme = React.useContext(ThemeContext);
	const [selectedNode, setSelectedNode] = React.useState<number>(0);
	const [slides, setSlides] = React.useState<React.ReactChildren[] | null>(
		null
	);

	React.useEffect(() => {
		if (children) {
			let arr: React.ReactChildren[] = [];
			React.Children.forEach(children, (child) => {
				arr.push(child);
			});
			setSlides(arr);
		}
	}, [children]);

	const moveForward = () => {
		if (selectedNode < nodes - 1) {
			setSelectedNode(selectedNode + 1);
		}
	};

	const moveBackward = () => {
		if (selectedNode > 0) {
			setSelectedNode(selectedNode - 1);
		}
	};

	const getKeys = (x: number): number[] => {
		let result = [];
		for (let i = 0; i < x; i++) {
			result.push(i);
		}
		return result;
	};
	const keys = getKeys(nodes);

	return (
		<Grid templateRows="auto 5px 1fr" pl="22px">
			<Text textStyle="headerCaps" gridRow="1/2">
				{title}
			</Text>
			<Box
				className="uses-color-theme"
				ml="-100px"
				pr="100px"
				gridRow="2/3"
				backgroundColor={theme}
			/>

			<Grid
				templateRows="20px 1fr 80px"
				templateColumns="60px 1fr 60px"
				gridRow="3/4"
				bg="darkGray"
				pl="100px"
				pr="40px"
				ml="-100px"
			>
				<Grid gridRow="2/3" gridColumn="1/2" placeItems="center">
					{nodes > 1 && (
						<chakra.img
							src={chevronLeft}
							onClick={moveBackward}
							padding="10px"
							borderRadius="md"
							transition="background-color 300ms ease-in-out"
							_hover={{
								cursor: "pointer",
								backgroundColor: theme,
								transition: "background-color 300ms ease-in-out",
							}}
						/>
					)}
				</Grid>

				<Grid gridRow="2/3" gridColumn="3/4" placeItems="center">
					{nodes > 1 && (
						<chakra.img
							src={chevronRight}
							onClick={moveForward}
							padding="10px"
							borderRadius="md"
							transition="background-color 300ms ease-in-out"
							_hover={{
								cursor: "pointer",
								backgroundColor: theme,
								transition: "background-color 300ms ease-in-out",
							}}
						/>
					)}
				</Grid>

				<Flex gridRow="2/3" gridColumn="2/3" alignItems="center">
					{slides && slides[selectedNode]}
				</Flex>

				<Grid templateColumns="60% 40%" gridRow="3/4" gridColumn="2/3">
					<Flex gridColumn="1/2" direction="row" margin="0 auto">
						{nodes > 1 &&
							keys.map((node: number) => (
								<Box
									className="uses-color-theme"
									bg={node === selectedNode ? theme : "lightGray"}
									w="20px"
									h="20px"
									margin="0 2px"
									borderRadius="50%"
									key={node}
								/>
							))}
					</Flex>

					<Flex gridColumn="2/3" direction="column">
						<Box
							className="uses-color-theme"
							h="5px"
							w="30px"
							mb="20px"
							backgroundColor={theme}
						/>
						<chakra.a
							fontWeight="bold"
							textStyle="body"
							target="__blank"
							href={`https://${url}`}
							_hover={{
								textDecoration: `underline ${theme}`,
								cursor: "pointer",
							}}
						>
							{url}
						</chakra.a>
					</Flex>
				</Grid>
			</Grid>
		</Grid>
	);
}

interface ProjectSlideProps {
	photoURL: string;
	children: React.ReactChildren;
}

export function ProjectSlide({ photoURL, children }: ProjectSlideProps) {
	const theme = React.useContext(ThemeContext);

	return (
		<Flex direction="row" alignItems="center">
			<chakra.img
				src={photoURL}
				m="20px"
				resize="both"
				w="calc(60% - 40px)"
				border={`5px solid ${theme}`}
			/>
			<Text textStyle="body" lineHeight="150%">
				{children}
			</Text>
		</Flex>
	);
}
