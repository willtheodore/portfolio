import { Flex, List, ListItem, Box } from "@chakra-ui/react";
import * as React from "react";
import { ChakraLink as Link } from "./chakra";
import { parsePath } from "../utils/parsing";
import ThemeContext from "../contexts/ThemeContext";

export default function Sidebar() {
	const currentLink = React.useState<string>(parsePath(document.location)[0]);
	const theme = React.useContext(ThemeContext);

	return (
		<Flex
			className="sidebar"
			w="30%"
			h="100%"
			bg="darkGray"
			alignItems="center"
			position="fixed"
			zIndex="banner"
		>
			<List spacing={3} w="60%" p="10%" m="20%">
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
		</Flex>
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
					to={title === "Home" ? "/" : `./${title.toLowerCase()}`}
					onClick={() => currentLink[1](title.toLowerCase())}
				>
					{title}
				</Link>
				{isActive ? (
					<Box ml="10%" w="80%" h="3px" backgroundColor={theme} />
				) : (
					<Box />
				)}
			</Flex>
		</ListItem>
	);
}
