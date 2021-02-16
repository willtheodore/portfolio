import { Box, Grid, useBreakpointValue } from "@chakra-ui/react";
import * as React from "react";
import { Theme } from "../../contexts/ThemeContext";
import { Footer } from "../chakra";

import Sidebar from "../Sidebar";
import ThemeSelector from "../ThemeSelector";

interface LayoutContainerProps {
  children: JSX.Element;
  toggleFunction: (value: Theme) => void;
}

export default function LayoutContainer({
  children,
  toggleFunction,
}: LayoutContainerProps) {
  const isNotMobile = useBreakpointValue({ base: false, md: true });

  return (
    <div id="app">
      <Grid h="100%" w="100%" templateColumns={isNotMobile ? `30% 1fr` : "1fr"}>
        <Sidebar />
        {isNotMobile && <ThemeSelector toggleTheme={toggleFunction} />}
        <Grid templateRows="1fr auto" gridColumn={isNotMobile ? "2/3" : ""}>
          <Box bg="lightGray" gridRow="1/2" pl="6vw" ml="-6vw" h="100%">
            {children}
          </Box>
          <Footer gridRow="2/3" />
        </Grid>
      </Grid>
    </div>
  );
}