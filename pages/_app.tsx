import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import theme from "../theme/theme";
import { Theme, ThemeProvider } from "../contexts/ThemeContext";
import { MDXProvider } from "@mdx-js/react";
import "../styles/globals.css";
import LayoutContainer from "../components/layout/LayoutContainer";

import { H1, H2, H3, P, Bullet, Spacer } from "../components/mdxComponents";
const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  blockquote: Bullet,
  hr: Spacer,
};

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  const [colorTheme, setColorTheme] = React.useState<Theme>(Theme.blue);
  const toggleColorTheme = (newColorTheme: Theme) => {
    setColorTheme(newColorTheme);
  };

  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <ThemeProvider value={colorTheme}>
        <MDXProvider components={components}>
          <LayoutContainer toggleFunction={toggleColorTheme}>
            <Component {...pageProps} />
          </LayoutContainer>
        </MDXProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
