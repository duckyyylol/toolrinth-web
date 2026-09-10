<script lang="ts">
    import { page } from "$app/state";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import { Column, Heading, Text } from "duckylib"
    import { onMount } from "svelte";

    const url = $state(page.url.searchParams.get("r") || null);

    onMount(() => {
      setTimeout(() => {
        if(url) {
          window.location.replace(url);
        } else {
          window.location.replace(page.url.hostname)
        }
      },3e3);
    })
</script>

<Column justifyContent="space-between">
    <Header withHomeNav />
    <Column heightPx="fit" gapEm={2}>
        {#if url}
            <Heading size={3} weight="bolder">Redirecting You</Heading>
            <Text sizeEm={1.2}>Redirecting you to Modrinth...</Text>
            <Text><a href={decodeURIComponent(url)}>Click here if you are not automatically redirected.</a></Text>
            {:else}
            <Heading size={3} weight="bolder">Redirect Failed</Heading>
            <Text sizeEm={1.2}>Failed to redirect to Modrinth...</Text>
        {/if}
    </Column>
    <Footer />
</Column>
