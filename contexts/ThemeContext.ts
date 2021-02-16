import * as React from "react";

export enum Theme {
	blue = "#5480BC",
	red = "#CC5E5E",
	purple = "#8E61C3",
	green = "#5AB97B",
}

const ThemeContext = React.createContext(Theme.blue);

export default ThemeContext;
export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;
