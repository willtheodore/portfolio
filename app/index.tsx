import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Theme, ThemeProvider } from "./contexts/ThemeContext";

import "./scss/index.scss";
import theme from "./theme/theme";
import Home from "./pages/Home.mdx";
import LayoutContainer from "./components/layout/LayoutContainer";

function App() {
	const [colorTheme, setColorTheme] = React.useState<Theme>(Theme.blue);
	const toggleColorTheme = (newColorTheme: Theme) => {
		setColorTheme(newColorTheme);
	};

	return (
		<ChakraProvider theme={extendTheme(theme)}>
			<ThemeProvider value={colorTheme}>
				<Router>
					<LayoutContainer>
						<Switch>
							<Route path="/" component={Home} />
						</Switch>
					</LayoutContainer>
				</Router>
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
