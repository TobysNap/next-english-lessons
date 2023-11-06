import Image from 'next/image';
import Link from 'next/link';
import heroImage from './hero.png';

export default function Page() {
	return (
		<div className="text-[#fff]">
			<header className="rounded-lg bg-black py-8 mb-5 w-80 mx-auto text-center md:w-1/2 md:my-5">
				<h1 className="text-4xl font-bold m-0 text-[#FFD770]">
					Welcome to learning English
				</h1>
			</header>
			<section className="grid grid-cols-1 gap-4 container mx-auto md:grid-flow-col md:grid-rows-[repeat(2,_250px)] md:grid-cols-2">
				<div className="rounded-lg text-center py-8 md:py-16 px-6 md:px-12 order-1">
					<h2 className="text-4xl font-bold mb-4 text-[#000]">
						Welcome to our English learning website!
					</h2>
				</div>
				<div className="order-3 md:order-2 grid">
					<p className="text-lg mb-4 md:mb-0 text-[#7C6E80]">
						Our goal is to share English with everyone. Join us and start your
						English learning journey today!
					</p>
					<Link
						href="/tenses"
						className="bg-[#70FFCE] hover:bg-[#FFD770] text-[#000] font-bold py-2 justify-self-center mb-auto px-4 rounded-full"
					>
						Go to Simple Tenses
					</Link>
				</div>
				<div className="order-2 md:order-3 md:row-span-3 md:grid md:place-items-center">
					<figure className="w-80 h-80 my-auto relative">
						<Image src="/hero.png" alt="Learning English Graphic" fill />
					</figure>
				</div>
			</section>
		</div>
	);
}
