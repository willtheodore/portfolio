import * as React from "react";
import * as ReactDOM from "react-dom";
import { Box, ChakraProvider, extendTheme, Grid } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./scss/index.scss";
import theme from "./theme/theme";
import Home from "./Home";

function App() {
	return (
		<ChakraProvider theme={extendTheme(theme)}>
			<Router>
				<Grid templateRows="auto 1fr auto" h="100%" w="100%">
					<Box h="5" w="100%" bg="blue.500" gridRow="1/2">
						Header
					</Box>

					<Box gridRow="2/3">
						<Switch>
							<Route exact path="/" component={Home} />
						</Switch>
					</Box>

					<Box h="5" w="100%" bg="green.500" gridRow="3/4">
						Footer
					</Box>
				</Grid>
			</Router>
		</ChakraProvider>
	);
}

ReactDOM.render(<App />, document.getElementById("app"));
