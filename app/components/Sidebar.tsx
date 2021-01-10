import { Flex, List, ListItem, Box } from "@chakra-ui/react";
import * as React from "react";
import { ChakraLink as Link } from "./chakra";
import { parsePath } from "../utils/parsing";

export default function Sidebar() {
	const currentLink = React.useState<string>(parsePath(document.location)[0]);

	return (
		<Flex
			className="sidebar"
			w="30%"
			h="100%"
			bg="gray.800"
			alignItems="center"
			position="fixed"
		>
			<List spacing={3} w="60%" p="10%" m="20%">
				<NavLink title="Home" currentLink={currentLink} />
				<NavLink title="About" currentLink={currentLink} />
				<NavLink title="Resume" currentLink={currentLink} />
				<NavLink title="Projects" currentLink={currentLink} />
				<NavLink title="Contact" currentLink={currentLink} />
			</List>
			<Box
				className="sidebar-accent"
				position="fixed"
				bg="blue.500"
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
	const isActive = currentLink[0] === title.toLowerCase();

	return (
		<ListItem
			display="flex"
			alignItems="center"
			className={isActive ? "" : "drift-right"}
		>
			<Link
				textStyle={isActive ? "navActive" : "nav"}
				to={title === "Home" ? "/" : `./${title.toLowerCase()}`}
				onClick={() => currentLink[1](title.toLowerCase())}
			>
				{title}
			</Link>
		</ListItem>
	);
}
