import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "PromptSage",
	description: "Discover & Share AI Prompts",
};

type Props = {
	children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
	return (
		<html lang="en">
			<body>
				<div className="main">
					<div className="gradient"></div>
				</div>
				<main className="app">
					<Nav />
					{children}
					</main>
			</body>
		</html>
	);
};

export default RootLayout;
