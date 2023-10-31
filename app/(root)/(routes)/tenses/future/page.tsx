import Card from '@/components/ui/card';
import TenseForm from '@/components/ui/tense-form';

export default function Page() {
	return (
		<section className="flex flex-col gap-5">
			<header className="border-black border-4 mx-auto w-full h-[100px] bg-[rgb(255,215,112)] text-black text-3xl flex items-center justify-center rounded-lg mt-4 uppercase font-semibold">
				<h1>Simple future tense</h1>
			</header>
			<div className="flex flex-col gap-2">
				<Card imgSrc="/karaoke.png">
					<TenseForm prev="I" answer="will" post="sing a song tonight." />
				</Card>
				<Card imgSrc="/guitar.png">
					<TenseForm prev="He" answer="will play" post="the guitar tomorrow." />
				</Card>
				<Card imgSrc="/travel.png">
					<TenseForm
						prev="They"
						answer="will"
						post="travel to Italy next month."
					/>
				</Card>
			</div>
		</section>
	);
}
