import {
  Flex,
  List,
  ListItem,
  Box,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import { chakra } from "@chakra-ui/react";
import Link from "next/link";
import { parsePath } from "../utils/parsing";
import ThemeContext from "../contexts/ThemeContext";

export default function Sidebar() {
  let path = "";
  if (process.browser) {
    path = parsePath(document.location)[0];
  }
  const currentLink = React.useState<string>(path);
  const theme = React.useContext(ThemeContext);
  const breakpoint = useBreakpointValue({ base: false, md: true });

  if (breakpoint)
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

  return (
    <List
      display="flex"
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      position="fixed"
      top="0"
      h="10%"
      w="100%"
      bg="darkGray"
      borderBottom={`3px solid ${theme}`}
      zIndex="banner"
    >
      <NavLink title="Home" currentLink={currentLink} />
      <NavLink title="Resume" currentLink={currentLink} />
      <NavLink title="Projects" currentLink={currentLink} />
      <NavLink title="Contact" currentLink={currentLink} />
    </List>
  );
}

interface NavLinkProps {
  title: string;
  currentLink: [string, React.Dispatch<React.SetStateAction<string>>];
}

function NavLink({ title, currentLink }: NavLinkProps) {
  let path: string[] = [];
  if (process.browser) {
    path = parsePath(document.location);
  }

  const isActive =
    currentLink[0] === title.toLowerCase() ||
    (title === "Home" && path[0] === undefined);
  const theme = React.useContext(ThemeContext);

  const breakpoint = useBreakpointValue({ base: false, md: true });

  return (
    <ListItem className={!isActive && breakpoint ? "drift-right" : ""}>
      <Flex direction="column">
        <Link href={title === "Home" ? "/" : `./${title.toLowerCase()}`}>
          <chakra.a
            textStyle={isActive && breakpoint ? "navActive" : "nav"}
            cursor="pointer"
            fontSize={["15px", "15px", "20px", "30px"]}
            onClick={() => currentLink[1](title.toLowerCase())}
            textDecoration={isActive && !breakpoint ? `underline ${theme}` : ""}
          >
            {title}
          </chakra.a>
        </Link>
        {breakpoint && isActive ? (
          <Box ml="10%" w="60%" h="3px" backgroundColor={theme} />
        ) : (
          <Box />
        )}
      </Flex>
    </ListItem>
  );
}
