import * as React from "react";
import * as ReactDOM from "react-dom";
import { Box, ChakraProvider, extendTheme, Grid } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./scss/index.scss";
import theme from "./theme/theme";
import Home from "./pages/Home";
import LayoutContainer from "./components/layout/LayoutContainer";

function App() {
	return (
		<ChakraProvider theme={extendTheme(theme)}>
			<Router>
				<LayoutContainer>
					<Switch>
						<Route path="/" component={Home} />
					</Switch>
				</LayoutContainer>
			</Router>
		</ChakraProvider>
	);
}

ReactDOM.render(<App />, document.getElementById("app"));
