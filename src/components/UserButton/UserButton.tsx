import { UnstyledButton, Group, Avatar, Text, rem } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import classes from './UserButton.module.css';

export function UserButton() {
	return (
		<UnstyledButton className={classes.user}>
			<Group>
				<Avatar
					src='https://www.cnet.com/a/img/resize/20d6844768bd3f5f0df41deee97897423bcaf3c5/hub/2021/11/03/3c2a7d79-770e-4cfa-9847-66b3901fb5d7/c09.jpg?auto=webp&fit=crop&height=1200&width=1200'
					radius='xl'
				/>
				<div style={{ flex: 1 }}>
					<Text size='sm' fw={500}>
						Dogi Cheems
					</Text>
					<Text c='dimmed' size='xs'>
						dogicheems@meme.co
					</Text>
				</div>
				<IconChevronRight
					style={{ width: rem(14), height: rem(14) }}
					stroke={1.5}
				/>
			</Group>
		</UnstyledButton>
	);
}
