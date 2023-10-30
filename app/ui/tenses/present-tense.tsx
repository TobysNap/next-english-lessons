'use client';
import { presentTenseCheck } from "@/lib/actions";
import toast from 'react-hot-toast';

export default function PresentTense() {
	const presentTense = async (formData: FormData) => {
    const result = await presentTenseCheck(formData);
    result.success ? toast.success(result.message) : toast.error(result.message)
	};

	return (
		<>
			<form action={presentTense}>
				<p>
					I
					<input
						className="bg-black mx-4 w-24"
						type="text"
						name="presentTense"
					/>
					the guitar
				</p>
				<button>Chequear</button>
			</form>
		</>
	);
}
