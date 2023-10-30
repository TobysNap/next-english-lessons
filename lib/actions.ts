'use server';

export async function presentTenseCheck(formData: FormData) {
	const tense = formData.get('presentTense');
	if (tense == 'play') return { success: true, message: 'Well done' };
	else return { message: 'Ooops' };
}
