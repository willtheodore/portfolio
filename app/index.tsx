import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Theme, ThemeProvider } from "./contexts/ThemeContext";
import { MDXProvider } from "@mdx-js/react";

import "./scss/index.scss";
import theme from "./theme/theme";
const Home = React.lazy(() => import("./pages/Home.mdx"));
const Resume = React.lazy(() => import("./pages/Resume.mdx"));
const Projects = React.lazy(() => import("./pages/Projects.mdx"));
const Contact = React.lazy(() => import("./pages/Contact.mdx"));
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
					<React.Suspense fallback={<div className="fallback"></div>}>
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
					</React.Suspense>
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
