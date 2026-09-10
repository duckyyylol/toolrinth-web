<script lang="ts">
    import { page } from "$app/state";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import { Column, Heading, Text } from "duckylib"

    let f = $state(page.url.searchParams.get("f"));

    const error = $state(page.url.searchParams.get("e") || "Unknown Error Occurred");
    const from = $state((f && !f.includes("auth")) ? decodeURIComponent(f) : page.url.hostname);
</script>

<Column justifyContent="space-between">
    <Header withHomeNav />
    <Column heightPx="fit" gapEm={2}>
        <Heading size={2} weight="bolder">An Error Occurred :(</Heading>
        <Text sizeEm={1.2}>{decodeURIComponent(error)}</Text>
        <Text><a href={from}>Go back to {from}</a></Text>
    </Column>
    <Footer />
</Column>
