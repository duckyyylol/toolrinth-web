<script lang="ts">
    import { page } from "$app/state";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import { Column, Heading, Text } from "duckylib";
</script>

<Column justifyContent="space-between">
    <Header withHomeNav />
    <Column heightPx="fit" gapEm={2}>
        {#if page.data.loggingOut}
            <Heading size={3} weight="bolder">Logging You Out...</Heading>
            <Text>Redirecting you...</Text>
            {:else}
            <Heading size={3} weight="bolder">You are not logged in...</Heading>
            <Text>Redirecting you...</Text>
        {/if}
    </Column>
    <Footer />
</Column>
