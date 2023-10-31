import Link from "next/link";

export default function Page() {
	return (
		<div className="">
			<header className="rounded-lg bg-[#FFD770] mx-auto py-8 w-full text-center mb-5">
				<h1 className="text-4xl font-bold m-0 text-black">
					Welcome to Simple Tenses
				</h1>
			</header>
			<section className="bg-[#EEE8FA] py-8 px-6 md:px-12 text-gray-800 text-center rounded-lg my-5">
				<p className="text-lg w-full">
					Explore the world of simple tenses and test your knowledge. Master the
					foundation of English grammar with our comprehensive resources.
				</p>
			</section>
			<section className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto">
				<div className="rounded-lg bg-[#f4f5f9] py-8 px-6 md:px-12 text-[#000] text-center flex flex-col justify-around">
					<h2 className="text-3xl font-bold mb-4">Past Simple Tense</h2>
					<p className="text-lg mb-4 text-gray-700">
						Dive into the past and understand how the English language uses the
						past simple tense.
					</p>
					<Link
						href="/tenses/past"
						className="bg-[#FFD770] hover:bg-[#E570FF] text-[#000] font-bold py-2 px-4 rounded-full mt-auto"
					>
						Learn More
					</Link>
				</div>
				<div className="rounded-lg bg-[#f4f5f9] py-8 px-6 md:px-12 text-[#000] text-center flex flex-col justify-around">
					<h2 className="text-3xl font-bold mb-4">Present Simple Tense</h2>
					<p className="text-lg mb-4 text-gray-700">
						Explore the present and how the present simple tense influences
						English communication.
					</p>
					<Link
						href="/tenses/present"
						className="bg-[#FFD770] hover:bg-[#E570FF] text-[#000] font-bold py-2 px-4 rounded-full mt-auto"
					>
						Learn More
					</Link>
				</div>
				<div className="rounded-lg bg-[#f4f5f9] py-8 px-6 md:px-12 text-[#000] text-center flex flex-col justify-around">
					<h2 className="text-3xl font-bold mb-4">Future Simple Tense</h2>
					<p className="text-lg mb-4 text-gray-700">
						Uncover the mysteries of the future and how the future simple tense
						shapes English expressions.
					</p>
					<Link
						href="/tenses/future"
						className="bg-[#FFD770] hover:bg-[#E570FF] text-[#000] font-bold py-2 px-4 rounded-full mt-auto"
					>
						Learn More
					</Link>
				</div>
			</section>
		</div>
	);
}
