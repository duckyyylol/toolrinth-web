<script lang="ts">
	import "$lib/styles/globals.css";
	import favicon from "$lib/assets/favicon.png";
	import { Website, Header, setUserData, getTheme, ThemeButton } from "duckylib";
    import { page } from "$app/state";

	let { children } = $props();

	let pageProps: Record<string, string> = $state({});

	pageProps["/"] = "Modern Discord Modrinth Companion";
	pageProps["/tos"] = "Terms of Service";
	pageProps["/privacy"] = "Privacy Policy";

	let title = $state(pageProps[page.url.pathname]);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Toolrinth ⋅ {title}</title>

	<meta property="og:title" content="Toolrinth ⋅ {title}"/> <meta property="og:type" content="website"/>
	<meta property="og:url" content="https://toolrinth.com{page.url.pathname}"/>
	<meta property="og:description" content="Toolrinth is the all-in-one companion for keeping up with your favorite Modrinth projects! Dive in to each update with project tracking, or easily fetch information about any project with a search!"/>
	<meta name="theme-color" content="#32B778"/>

	<meta property="og:image" content="https://files.ducky.wiki/share/public_assets/projects/toolrinth/Toolrinth_Banner_Accolade_16-9.png">
	<meta name="twitter:card" content="summary_large_image">
</svelte:head>

<Website options={{ theme: getTheme() }}>
	{@render children()}
</Website>

<style>

	:global(::-webkit-scrollbar) {
		display: none !important;
		width: 0px !important;
		height: 0px !important;
		background: transparent !important;
	}

	:global(html, body, .chat) {
		scrollbar-width: none !important; /* Firefox fallback */
		-ms-overflow-style: none !important; /* Edge fallback */
	}
</style>
