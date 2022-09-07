import { Box, Grid, Text } from "@chakra-ui/react";
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
      <Text
        pl="200px"
        ml="-200px"
        borderBottom={`4px solid ${theme}`}
        display="inline"
        textStyle="headerCaps"
        ref={textRef}
        {...props}
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
      mb={{ base: "20px", lg: "10px" }}
      display="block"
    />
  );
}

export function P(props: MDXProviderProps) {
  return (
    <Text
      display="block"
      textStyle="body"
      ml="22px"
      mr={{ base: "20px", lg: "50px" }}
      {...props}
    />
  );
}

export function Bullet(props: MDXProviderProps) {
  return (
    <Grid templateColumns="20px 1fr" ml="22px" mr={["0", "50px"]} mb="10px">
      <Grid gridColumn="1/2" placeItems="center">
        <Text>•</Text>
      </Grid>
      <Text textStyle="body" {...props} />
    </Grid>
  );
}

export function Spacer(props: MDXProviderProps) {
  return <Box h="30px" display="block" />;
}
