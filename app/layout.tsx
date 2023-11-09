import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { Metadata } from "next";
import { useSession } from "next-auth/react";


export const metadata: Metadata = {
	title: "PromptSage",
	description: "Discover & Share AI Prompts",
};

type Props = {
	children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
	const {data: currentSession} = useSession() 
	return (
		<html lang="en">
			<body>
				<Provider session={currentSession}>
					<>
						<div className="main">
							<div className="gradient"></div>
						</div>
						<main className="app">
							<Nav />
							{children}
						</main>
					</>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
