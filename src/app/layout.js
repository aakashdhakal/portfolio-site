import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Aakash Dhakal",
	description: "Personal website of Aakash Dhakal",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-slate-800">{children}</body>
		</html>
	);
}
