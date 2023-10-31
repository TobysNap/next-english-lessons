import Card from '@/components/ui/card';
import TenseForm from '@/components/ui/tense-form';

export default function Page() {
	return (
		<section className="flex flex-col gap-5">
			<header className="border-black border-4 mx-auto w-full h-[100px] bg-[rgb(255,215,112)] text-black text-3xl flex items-center justify-center rounded-lg mt-4 uppercase font-semibold">
				<h1>Simple past tense</h1>
			</header>
			<div className="flex flex-col gap-2">
				<Card imgSrc="/guitar.png">
					<TenseForm prev="I" answer="played" post="the guitar yesterday." />
				</Card>
				<Card imgSrc="/travel.png">
					<TenseForm
						prev="She"
						answer="traveled"
						post="to Italy last summer."
					/>
				</Card>
				<Card imgSrc="/karaoke.png">
					<TenseForm prev="They" answer="sang" post="a song last night." />
				</Card>
			</div>
		</section>
	);
}
