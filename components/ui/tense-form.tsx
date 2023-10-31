'use client';
import { tenseCheck } from '@/lib/actions';
import toast from 'react-hot-toast';

export default function TenseForm({
	answer,
	prev,
	post,
}: {
	answer: string;
	prev: string;
	post: string;
}) {
	const tenseChecker = async (formData: FormData, answer: string) => {
		const result = await tenseCheck(formData, answer);
		result.success
			? toast.success(result.message)
			: toast.error(result.message);
	};

	return (
		<form
			action={async (formData: FormData) => tenseChecker(formData, answer)}
			className="w-full mx-auto flex items-center justify-between p-3"
		>
			<p>
				{prev}
				<input
					className="mx-4 w-24 rounded-md"
					type="text"
					placeholder="answer..."
					name="tense"
				/>
				{post}
			</p>
			<button className="bg-green-400 hover:bg-green-600 text-black p-1 rounded-md">
				Check
			</button>
		</form>
	);
}
