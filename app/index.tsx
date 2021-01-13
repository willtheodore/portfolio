import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Theme, ThemeProvider } from "./contexts/ThemeContext";
import { MDXProvider } from "@mdx-js/react";

import "./scss/index.scss";
import theme from "./theme/theme";
import Home from "./pages/Home.mdx";
import Resume from "./pages/Resume.mdx";
import Projects from "./pages/Projects.mdx";
import Contact from "./pages/Contact.mdx";
import LayoutContainer from "./components/layout/LayoutContainer";

import { H1, H2, H3, P, Bullet, Spacer } from "./components/mdxComponents";
const components = {
	h1: H1,
	h2: H2,
	h3: H3,
	p: P,
	blockquote: Bullet,
	hr: Spacer,
};

function App() {
	const [colorTheme, setColorTheme] = React.useState<Theme>(Theme.blue);
	const toggleColorTheme = (newColorTheme: Theme) => {
		setColorTheme(newColorTheme);
	};

	return (
		<ChakraProvider theme={extendTheme(theme)}>
			<ThemeProvider value={colorTheme}>
				<MDXProvider components={components}>
					<Router>
						<LayoutContainer toggleFunction={toggleColorTheme}>
							<Switch>
								<Route exact path="/resume" component={Resume} />
								<Route exact path="/projects" component={Projects} />
								<Route exact path="/contact" component={Contact} />
								<Route path="/" component={Home} />
							</Switch>
						</LayoutContainer>
					</Router>
				</MDXProvider>
			</ThemeProvider>
		</ChakraProvider>
	);
}

ReactDOM.render(
	<>
		<App />
	</>,
	document.getElementById("app")
);
