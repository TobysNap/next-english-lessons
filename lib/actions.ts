'use server';

export async function tenseCheck(formData: FormData, answer: string) {
	const data = formData.get('tense');
	if (!data) return { message: 'Debes ingresar una respuesta' };

	const tense = data!.toString().toLowerCase();
	if (tense == answer) return { success: true, message: 'Well done' };
	else return { message: 'Oops! Check your answer' };
}
