import Link from 'next/link';

export default function Page() {
	return (
		<div className=" text-[#fff]">
      <header className="rounded-lg bg-black mx-auto py-8 w-1/2 text-center my-5">
				<h1 className="text-4xl font-bold m-0 text-[#FFD770]">
					Welcome to learning English
				</h1>
			</header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto">
				<div className="rounded-lg bg-[#70FFCE] py-8 md:py-16 px-6 md:px-12">
					<h2 className="text-4xl font-bold mb-4 text-[#000]">
						Welcome to our English learning website!
					</h2>
					<p className="text-lg mb-4 text-[#7C6E80]">
						Our goal is to share English with everyone. Join us and start your
						English learning journey today!
					</p>
					<Link
						href="/tenses"
						className="bg-[#FFD770] hover:bg-[#E570FF] text-[#000] font-bold py-2 px-4 rounded-full"
					>
						Go to Simple Tenses
					</Link>
				</div>
				<div className="rounded-lg bg-[#AA9F83] py-8 md:py-16 px-6 md:px-12"></div>
			</section>
		</div>
	);
}
