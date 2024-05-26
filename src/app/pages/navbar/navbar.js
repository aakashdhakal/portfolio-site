import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Navbar = () => {
	return (
		<nav className="flex flex-col items-center justify-center p-2 px-12">
			<Image
				src="/logo.png"
				alt="Logo"
				width={60}
				height={60}
				className="object-cover"
			/>
			<h1
				className="text-2xl font-black text-center mt-2"
				style={{ fontFamily: "Concert One, cursive" }}>
				Aakash Dhakal
			</h1>
		</nav>
	);
};
