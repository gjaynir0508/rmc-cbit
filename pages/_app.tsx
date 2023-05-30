import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import AllMetaTags, { AllMetaTagsProps } from "@/components/AllMetaTags";
import { DefaultLayout } from "@/layouts/DefaultLayout";

interface MyAppProps extends AppProps {
	Component: AppProps["Component"] & {
		Layout?: React.ComponentType<{ children: React.ReactNode }>;
		noLayout?: boolean;
		metaTagProps?: AllMetaTagsProps;
	};
}

export default function App(props: MyAppProps) {
	const { Component, pageProps } = props;

	return (
		<>
			<Head>
				<title>RMC CBIT</title>
				<AllMetaTags {...Component.metaTagProps} />
			</Head>

			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					colorScheme: "light",
				}}
			>
				{Component.noLayout ? (
					<Component {...pageProps} />
				) : Component.Layout ? (
					<Component.Layout>
						<Component {...pageProps} />
					</Component.Layout>
				) : (
					<DefaultLayout>
						<Component {...pageProps} />
					</DefaultLayout>
				)}
			</MantineProvider>
		</>
	);
}
