<script lang="ts">
    import { AppConfig } from "$lib/config";
    import { Row, Text } from "duckylib";

    interface FooterProps {
      authorized?: boolean;
    }

    const {authorized = false}: FooterProps = $props();
</script>

<Row heightPx="fit" marginTopPx={30} marginBottomPx={30} gapEm={0.66} alignItems="center" justifyContent="center" flexWrap>
    <Text>🦆 Made by <a href="https://ducky.wiki" target="_blank">duckylol</a> with <a href="https://ducky.wiki/travel/github/duckylib" target="_blank">duckylib</a></Text>
    <span class="faded"><Text inheritColor>⋅</Text></span>
    <Text weight="normal"><a href="https://github.com/duckyyylol/toolrinth-web" target="_blank">Website Source Code</a></Text>
    <span class="faded"><Text inheritColor>⋅</Text></span>
    <Text weight="normal"><a href="/tos">Terms</a></Text>
    <span class="faded"><Text inheritColor>⋅</Text></span>
    <Text weight="normal"><a href="/privacy">Privacy Policy</a></Text>
    <span class="faded"><Text inheritColor>⋅</Text></span>
    <Text weight="normal"><a href={AppConfig.docs} target="_blank">Library Docs</a></Text>
    {#if authorized}
        <span class="faded"><Text inheritColor>⋅</Text></span>
        <span class="red"><Text weight="normal" inheritColor><a href="/auth/discord/logout" class="red">Log Out</a></Text></span>
    {/if}
</Row>

<style>
    .red {
        color: var(--red) !important;
    }
</style>
