'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavLinks({ links }: { links: any[] }) {
	const pathname = usePathname();

	return (
		<>
			{links.map((link) => {
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-wedgewood-100 hover:text-wedgewood-600 md:flex-none md:justify-start md:p-2 md:px-3',
							{
								'bg-wedgewood-100 text-wedgewood-600': pathname === link.href,
							}
						)}
					>
						<p className="block">{link.name}</p>
					</Link>
				);
			})}
		</>
	);
}
