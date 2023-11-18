import Link from 'next/link';

export default function Page() {
	return (
		<main className="bg-gradient-to-r from-purple-500 to-blue-500 p-8 text-white text-center ">
			<div className="w-[calc(100%_-_10rem)] mx-auto">
				<h1 className="text-4xl font-bold text-yellow-300 mb-4">Welcome!</h1>

				<p className="text-lg text-gray-300 mb-6">
					Hey there future teachers! 👋 Get ready for an exciting journey into
					the world of language learning! 🚀
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="md:text-left">
						<h2 className="text-2xl font-semibold text-blue-200 mb-2">
							🌐 Unleashing the Power of Language
						</h2>
						<p>
							Have you ever wondered how you effortlessly pick up new words or
							express your thoughts in English? Today, we're diving deep into
							the fascinating realm of language learning. 🤔💬
						</p>
					</div>

					<div className="md:text-left">
						<h2 className="text-2xl font-semibold text-green-300 mb-2">
							🚀 What's in Store?
						</h2>
						<p>
							Get set for an engaging exploration of different approaches to
							language teaching. We're not just talking about rules and
							textbooks; we're delving into the dynamic ways people like you and
							me learn and embrace languages.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="md:text-left mt-6">
						<h2 className="text-2xl font-semibold text-red-300 mb-2">
							🤩 Why Language Matters
						</h2>
						<p>
							Discover the secrets of language as a powerful tool for
							communication, creativity, and connection. From structured
							approaches to free-flowing conversations, every nuance contributes
							to the rich tapestry of language.
						</p>
					</div>

					<div className="md:text-left mt-6">
						<h2 className="text-2xl font-semibold text-indigo-200 mb-2">
							🌈 Language Learning is an Adventure
						</h2>
						<p>
							Buckle up! We're here to prove that learning a language isn't just
							about memorizing words; it's an adventure, a journey filled with
							discovery and growth. 🌟
						</p>
					</div>
				</div>

				<p className="text-lg text-purple-100 my-6">
					Get ready to share your thoughts, engage in activities, and dive into
					discussions with fellow Language Learners. 🗣️🌍
				</p>

				<p className="text-lg text-orange-100 my-6">
					As we explore different language approaches, think about how you
					connect with English. There's no one-size-fits-all, and today is about
					finding what clicks for YOU.
				</p>

				<p className="text-lg text-pink-100 my-6">
					Enough chit-chat, Language Explorers! Let's embark on this thrilling
					exploration of language, where each word is a step toward a more
					exciting, connected, and linguistically rich world. 🌐✨
				</p>

				<Link
					href={'/tkt/approaches/activities'}
					className="bg-pink-300 text-black font-bold rounded-lg p-4 transition-colors hover:bg-transparent hover:outline"
				>
					Go to the activities
				</Link>
			</div>
		</main>
	);
}
