'use client';
import Image from 'next/image';

export default function Card({ children, imgSrc }: { children: React.ReactNode, imgSrc: string }) {
	return (
		<div className="border-gray-400 rounded-lg border-2 flex flex-col w-full md:w-1/2 mx-auto">
			<Image
				width={250}
				height={250}
				src={imgSrc}
				alt="Guitar"
				className="mx-auto"
			/>
			{children}
		</div>
	);
}
