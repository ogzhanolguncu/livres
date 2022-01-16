import Document, { Html, Head, Main, NextScript } from "next/document";

import React from "react";

import { ColorModeScript } from "@chakra-ui/react";
class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="alternate"
						type="application/rss+xml"
						title="RSS feed for blog posts"
						href="https://ogzhanolguncu.com/rss.xml"
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<ColorModeScript />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
