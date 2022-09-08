import * as React from "react";

export enum Theme {
	blue = "#5480bc",
	lightblue = "#73a0de",
	red = "#CC5E5E",
	lightred = "#de8181",
	purple = "#8E61C3",
	lightpurple = "#b88ee8",
	green = "#5AB97B",
	lightgreen = "#7bd199",
}

export function mapToLight(theme: Theme) {
	switch (theme) {
		case Theme.blue:
			return Theme.lightblue;
		case Theme.red:
			return Theme.lightred;
		case Theme.purple:
			return Theme.lightpurple;
		case Theme.green:
			return Theme.lightgreen;
		default:
			return theme;
	}
}

const ThemeContext = React.createContext(Theme.blue);

export default ThemeContext;
export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;
