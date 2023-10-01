import '@mantine/core/styles.css';
import { AppShell, Burger, Group, MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavBar } from './components/NavBar';

function App() {
	const [opened, { toggle }] = useDisclosure();
	return (
		<MantineProvider defaultColorScheme='dark'>
			<AppShell
				layout='alt'
				header={{ height: 60 }}
				footer={{ height: 60 }}
				navbar={{
					width: 300,
					breakpoint: 'sm',
					collapsed: { mobile: !opened },
				}}
				aside={{
					width: 300,
					breakpoint: 'md',
					collapsed: { desktop: false, mobile: true },
				}}
				padding='md'
			>
				<AppShell.Header>
					<Group h='100%' px='md'>
						<Burger
							opened={opened}
							onClick={toggle}
							hiddenFrom='sm'
							size='sm'
						/>
						logo
					</Group>
				</AppShell.Header>
				<AppShell.Navbar p='md'>
					<Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
					<NavBar />
				</AppShell.Navbar>
				<AppShell.Main>
					Alt layout – Navbar and Aside are rendered on top on Header and Footer
				</AppShell.Main>
				{/* <AppShell.Aside p='md'>Aside</AppShell.Aside> */}
				<AppShell.Footer p='md'>Footer</AppShell.Footer>
			</AppShell>
		</MantineProvider>
	);
}

export default App;
