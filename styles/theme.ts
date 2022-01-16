import { extendTheme } from "@chakra-ui/react";

//COLOR PALETTE
// #D3DEDC
// #92A9BD
// #7C99AC
// #FFEFEF

const theme = extendTheme({
	styles: {
		global: () => ({
			body: {
				backgroundColor: "#FFEFEF",
			},
		}),
	},
	fonts: {
		heading: "Dongle, sans-serif",
		body: "Dongle, sans-serif",
	},
});

export default theme;
