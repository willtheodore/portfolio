import { Flex, List, ListItem, Box, chakra } from "@chakra-ui/react";
import * as React from "react";
import { Link } from "react-router-dom";
import { parsePath } from "../utils/parsing";

export default function Sidebar() {
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
				<NavLink title="Home" />
				<NavLink title="About" />
				<NavLink title="Resume" />
				<NavLink title="Projects" />
				<NavLink title="Contact" />
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
}

function NavLink({ title }: NavLinkProps) {
	const [isActive, setIsActive] = React.useState<boolean>(false);

	React.useEffect(() => {
		const path = parsePath(document.location);
		setIsActive(
			path[0] === title.toLowerCase() ||
				(title === "Home" && path[0] === undefined)
		);
	}, [document.location]);

	return (
		<ListItem
			display="flex"
			alignItems="center"
			className={isActive ? "" : "drift-right"}
		>
			<chakra.a
				textStyle={isActive ? "navActive" : "nav"}
				href={title === "Home" ? "/" : `./${title.toLowerCase()}`}
			>
				{title}
			</chakra.a>
		</ListItem>
	);
}
