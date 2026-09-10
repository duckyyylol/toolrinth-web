<script lang="ts">
    import { page } from "$app/state";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import { Column, Heading, Text } from "duckylib"

    const username = $state(page.url.searchParams.get("u") || null);
    const avatar = $state(page.url.searchParams.get("a") || null);
</script>

<Column justifyContent="space-between">
    <Header withHomeNav />
    <Column heightPx="fit" gapEm={2}>
        <Heading size={3} weight="bolder">Hello{username ? `, ${username}!` : "!"}</Heading>
        <Text sizeEm={1.2}>Logged in Successfully!</Text>
        <Text>You may close this page.</Text>
    </Column>
    <Footer />
</Column>
