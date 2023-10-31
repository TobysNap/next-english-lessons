import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToasterProvider } from "@/providers/toast-provider";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'TN English - English Lessons',
	description: 'A website where you can learn english for free and in an atractive way',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body className={`${inter.className}`}>
				<ToasterProvider />
				{children}
			</body>
		</html>
	);
}
