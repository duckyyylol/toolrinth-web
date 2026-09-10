<script lang="ts">
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import { Column, Heading, Text } from "duckylib";
</script>

<Column justifyContent="space-between">
    <Header withHomeNav />
    <Column heightPx="fit" gapEm={2}>
        <Heading size={3} weight="bolder">Redirecting You</Heading>
        <Text sizeEm={1.2}>Redirecting you to Discord...</Text>
    </Column>
    <Footer />
</Column>
