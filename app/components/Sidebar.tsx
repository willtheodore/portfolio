import { Flex, List, ListItem, Box, Grid } from "@chakra-ui/react";
import * as React from "react";
import { ChakraLink as Link } from "./chakra";
import { parsePath } from "../utils/parsing";
import ThemeContext from "../contexts/ThemeContext";

export default function Sidebar() {
	const currentLink = React.useState<string>(parsePath(document.location)[0]);
	const theme = React.useContext(ThemeContext);

	return (
		<Grid
			templateColumns="1fr 3fr 1fr"
			templateRows="1fr auto 1fr"
			className="sidebar"
			w="30%"
			h="100%"
			bg="darkGray"
			position="fixed"
			zIndex="banner"
		>
			<List spacing={3} gridRow="2/3" gridColumn="2/3">
				<NavLink title="Home" currentLink={currentLink} />
				<NavLink title="Resume" currentLink={currentLink} />
				<NavLink title="Projects" currentLink={currentLink} />
				<NavLink title="Contact" currentLink={currentLink} />
			</List>
			<Box
				className="sidebar-accent uses-color-theme"
				position="fixed"
				bg={theme}
				w="30%"
				h="100%"
			/>
		</Grid>
	);
}

interface NavLinkProps {
	title: string;
	currentLink: [string, React.Dispatch<React.SetStateAction<string>>];
}

function NavLink({ title, currentLink }: NavLinkProps) {
	const path = parsePath(document.location);
	const isActive =
		currentLink[0] === title.toLowerCase() ||
		(title === "Home" && path[0] === undefined);
	const theme = React.useContext(ThemeContext);

	return (
		<ListItem className={isActive ? "" : "drift-right"}>
			<Flex direction="column">
				<Link
					textStyle={isActive ? "navActive" : "nav"}
					fontSize={["15px", "15px", "20px", "30px"]}
					to={title === "Home" ? "/" : `./${title.toLowerCase()}`}
					onClick={() => currentLink[1](title.toLowerCase())}
				>
					{title}
				</Link>
				{isActive ? (
					<Box ml="10%" w="60%" h="3px" backgroundColor={theme} />
				) : (
					<Box />
				)}
			</Flex>
		</ListItem>
	);
}
