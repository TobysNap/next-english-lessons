import { approaches } from "./data";

export default function TablePage() {

	return (
		<div className="bg-gradient-to-r from-purple-500 to-blue-500 p-8 text-white min-h-screen">
			<h2 className="text-3xl font-bold text-yellow-300 mb-6">
				Approach Comparison Table
			</h2>
			<div className="overflow-x-auto">
				<table className="min-w-full border rounded-lg overflow-hidden">
					<thead className="bg-gray-800 text-white">
						<tr>
							<th className="py-2 px-4 border-b">Approach</th>
							<th className="py-2 px-4 border-b">View of Language</th>
							<th className="py-2 px-4 border-b">View of Language Learning</th>
							<th className="py-2 px-4 border-b">Classroom Practices</th>
						</tr>
					</thead>
					<tbody className="bg-gray-200 min-h-full">
						{approaches.map((approach, index) => (
							<tr
								key={index}
								className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-500'}
							>
								<td className="py-2 px-4 border-b font-bold">
									{approach.name}
								</td>
								<td className="py-2 px-4 border-b">
									{approach.viewOfLanguage}
								</td>
								<td className="py-2 px-4 border-b">
									{approach.viewOfLearning}
								</td>
								<td className="py-2 px-4 border-b">
									{approach.classroomPractices}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
