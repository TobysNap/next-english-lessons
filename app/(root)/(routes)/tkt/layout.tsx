import { Home } from 'lucide-react';
import Link from 'next/link';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<nav className="bg-gradient-to-r from-purple-500 to-blue-500 p-4">
				<div className="container mx-auto flex justify-between items-center">
					<div className="text-white text-2xl font-bold">
						<Link href="/">
							Learning <span className="text-pink-300">English</span>
						</Link>
					</div>

					<ul className="flex space-x-4">
						<li className="text-white font-bold hover:text-pink-300 transition duration-300 ease-in-out flex flex-row">
							<Link href="/">
								Home
								<Home className="w-5 h-5 ml-3" />
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			{children}
		</>
	);
}
