import Link from 'next/link';
import NavLinks from './nav-links';

export default function SideNav({ links }: { links: any[] }) {
	return (
		<div className="flex h-full flex-col px-3 py-4 md:px-2">
			<Link
				className="mb-2 flex h-20 items-end justify-start rounded-md bg-wedgewood p-4 md:h-40"
				href="/"
			>
				<div className="w-32 text-white md:w-40">TN English</div>
			</Link>
			<div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks links={links} />
			</div>
		</div>
	);	
}
