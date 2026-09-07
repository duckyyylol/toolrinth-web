<script lang="ts">
	import "$lib/styles/globals.css";
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import favicon from "$lib/assets/favicon.png";
	import { Website, Header, setUserData, getTheme, ThemeButton } from "duckylib";
	import { onMount } from "svelte";
	import { page } from "$app/state";

	let { children } = $props();


</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Toolrinth ⋅ Modern Discord Modrinth Companion</title>
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
