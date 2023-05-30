import { useState } from "react";
import {
	createStyles,
	Header,
	Group,
	ActionIcon,
	Container,
	Burger,
	rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import Logo from "@/components/Logo";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
	header: {
		backgroundColor: theme.fn.rgba(
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
			0.8
		),
		borderBottom: `${rem(1)} solid ${
			theme.colorScheme === "dark"
				? theme.colors.dark[6]
				: theme.colors.gray[4]
		}`,
		position: "sticky",
		top: 0,
		left: 0,
		backdropFilter: "blur(16px)",
		zIndex: 1000,
	},
	inner: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		height: rem(56),

		[theme.fn.smallerThan("sm")]: {
			justifyContent: "flex-start",
		},
	},

	links: {
		width: rem(260),

		[theme.fn.smallerThan("sm")]: {
			display: "none",
		},
	},

	social: {
		width: rem(260),

		[theme.fn.smallerThan("sm")]: {
			width: "auto",
			marginLeft: "auto",
		},
	},

	burger: {
		marginRight: theme.spacing.md,

		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},

	link: {
		display: "block",
		lineHeight: 1,
		padding: `${rem(8)} ${rem(12)}`,
		borderRadius: theme.radius.sm,
		textDecoration: "none",
		color:
			theme.colorScheme === "dark"
				? theme.colors.dark[0]
				: theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		"&:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[6]
					: theme.colors.gray[0],
		},
	},

	linkActive: {
		"&, &:hover": {
			backgroundColor: theme.fn.variant({
				variant: "light",
				color: theme.primaryColor,
			}).background,
			color: theme.fn.variant({
				variant: "light",
				color: theme.primaryColor,
			}).color,
		},
	},
}));

interface NavbarProps {
	links: { link: string; label: string }[];
}

export function Navbar({ links }: NavbarProps) {
	const [opened, { toggle }] = useDisclosure(false);
	// const [active, setActive] = useState(links[0].link);
	const { classes, cx } = useStyles();
	const router = useRouter();

	const items = links.map((link) => (
		<a
			key={link.label}
			href={link.link}
			className={cx(classes.link, {
				// [classes.linkActive]: active === link.link,
				[classes.linkActive]: router.pathname === link.link,
			})}
			// onClick={(event) => {
			// 	event.preventDefault();
			// 	setActive(link.link);
			// 	router
			// }}
		>
			{link.label}
		</a>
	));

	return (
		<Header height={56} className={classes.header}>
			<Container className={classes.inner}>
				<Burger
					opened={opened}
					onClick={toggle}
					size="sm"
					className={classes.burger}
				/>
				<Group className={classes.links} spacing={5}>
					{items}
				</Group>

				<Logo type="rect" />

				<Group
					spacing={0}
					className={classes.social}
					position="right"
					noWrap
				>
					<ActionIcon size="lg">
						<FaInstagram size="1.1rem" stroke={"1.5"} />
					</ActionIcon>
					<ActionIcon size="lg">
						<FaYoutube size="1.1rem" stroke={"1.5"} />
					</ActionIcon>
					<ActionIcon size="lg">
						<FaTwitter size="1.1rem" stroke={"1.5"} />
					</ActionIcon>
				</Group>
			</Container>
		</Header>
	);
}
