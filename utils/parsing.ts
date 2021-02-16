/**
 * Parses a location (URL) into an array representing the total path tree
 *
 * @param location {Location} the location of the current url
 * @returns {Path} an array of strings representing the total path of the location
 */
export function parsePath(location: Location): string[] {
	if (location.pathname) {
		const path = location.pathname;
		let stringBuild = "";
		let tokens: string[] = [];
		for (let i = 0; i < path.length; i++) {
			if (path.charAt(i) == "/") {
				if (stringBuild != "") {
					tokens.push(stringBuild);
				}
				stringBuild = "";
			} else {
				stringBuild = stringBuild.concat(path.charAt(i));
			}
		}
		if (stringBuild != "") {
			tokens.push(stringBuild);
		}
		return tokens;
	}
	return [];
}
