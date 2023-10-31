import SideNav from '@/components/ui/sidenav';

const Layout = ({ children }: { children: React.ReactNode }) => {
	const links = [
		{ href: '/tenses', name: 'Simple tenses' },
		{ href: '/tenses/past', name: 'Past' },
		{ href: '/tenses/present', name: 'Present' },
		{ href: '/tenses/future', name: 'Future' },
	];

	return (
		<div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
			<div className="w-full flex-none md:w-64">
				<SideNav links={links} />
			</div>
			<div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
		</div>
	);
};

export default Layout;
