import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function DefaultLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar
				links={[
					{ link: "/", label: "Home" },
					{ link: "/about", label: "About" },
					{ link: "/events", label: "Events" },
				]}
			/>
			<main>{children}</main>
			<Footer
				data={[
					{
						title: "About",
						links: [
							{ label: "About Us", link: "/about" },
							{ label: "Events", link: "/events" },
							{ label: "Team", link: "/team" },
							{ label: "Contact", link: "/contact" },
						],
					},
					{
						title: "Social",
						links: [
							{
								label: "Instagram",
								link: "https://instagram.com/",
							},
							{
								label: "Twitter",
								link: "https://twitter.com/",
							},
							{
								label: "YouTube",
								link: "https://youtube.com/",
							},
						],
					},
				]}
			/>
		</>
	);
}
