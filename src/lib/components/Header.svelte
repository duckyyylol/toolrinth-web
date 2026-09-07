<script lang="ts">
    import { page } from "$app/state";
    import { AppConfig } from "$lib/config";
    import { Row, Text, Symbol } from "duckylib";

    interface HeaderProps {
      withHomeNav?: boolean;
      withInvites?: boolean;
    }

    const { withHomeNav, withInvites }: HeaderProps = $props();
</script>

<Row heightPx="fit" marginTopPx={20} gapEm={1.33} flexWrap>
    {#if withHomeNav}
        <Row heightPx="fit" widthPx="fit" gapEm={0.5}>
            <Symbol name="home" sizePx={20} hoverEffect={false} inheritColor />
            <Text weight="bold"><a href="/">Home</a></Text>
        </Row>
        <span class="faded"><Text inheritColor>⋅</Text></span>
    {/if}
    <Row heightPx="fit" widthPx="fit" gapEm={0.5}>
        <Symbol name="support" sizePx={20} hoverEffect={false} inheritColor />
        <Text weight="bold"><a href={AppConfig.support_server} target="_blank">Support Server</a></Text>
    </Row>
    <span class="faded"><Text inheritColor>⋅</Text></span>
    <Row heightPx="fit" widthPx="fit" gapEm={0.5}>
        <Symbol name="code_xml" sizePx={20} hoverEffect={false} inheritColor />
        <Text weight="bold"><a href="https://github.com/duckyyylol/toolrinth" target="_blank">Source Code</a></Text>
    </Row>
    {#if withInvites}
        <span class="faded"><Text inheritColor>⋅</Text></span>
        <Row heightPx="fit" widthPx="fit" gapEm={0.5}>
            <span style:color="var(--green-bright)"><Symbol name="construction" sizePx={20} hoverEffect={false} inheritColor /></span>
            <Text weight="bold" inheritColor><a href={AppConfig.invites.stable} target="_blank" style:color="var(--green-bright)">Add Toolrinth</a></Text>
        </Row>
        <span class="faded"><Text inheritColor>⋅</Text></span>
        <Row heightPx="fit" widthPx="fit" gapEm={0.5}>
            <span style:color="var(--pink-bright)"><Symbol name="raven" sizePx={20} hoverEffect={false} inheritColor /></span>
            <Text weight="bold" inheritColor><a href={AppConfig.invites.canary} target="_blank" style:color="var(--pink-bright)">Add Canary</a></Text>
        </Row>
    {/if}
</Row>
