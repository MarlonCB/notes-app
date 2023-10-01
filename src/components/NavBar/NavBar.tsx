import { UserButton } from '../UserButton';
import { Badge, UnstyledButton } from '@mantine/core';
import {
	IconHeart,
	IconClockHour5,
	Icon,
	IconFolder,
	IconNotes,
	IconTrash,
} from '@tabler/icons-react';

import classes from './NavBar.module.css';

interface LinksNavBar {
	icon: Icon;
	label: string;
	notifications?: number;
}

export function NavBar() {
	const linksNavBars: LinksNavBar[] = [
		{ icon: IconClockHour5, label: 'Recents' },
		{ icon: IconNotes, label: 'My quick notes', notifications: 3 },
		{ icon: IconFolder, label: 'Folders' },
		{ icon: IconHeart, label: 'Favorites', notifications: 4 },
		{ icon: IconTrash, label: 'Recycle bin' },
	];

	const mainLinks = linksNavBars.map((link) => (
		<UnstyledButton key={link.label} className={classes.mainLink}>
			<div className={classes.mainLinkInner}>
				<link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
				<span>{link.label}</span>
			</div>
			{link.notifications && (
				<Badge size='sm' variant='filled' className={classes.mainLinkBadge}>
					{link.notifications}
				</Badge>
			)}
		</UnstyledButton>
	));

	return (
		<nav className={classes.navbar}>
			<div className={classes.section}>
				<UserButton />
			</div>
			<div className={classes.section}>
				<div className={classes.mainLinks}>{mainLinks}</div>
			</div>
		</nav>
	);
}
