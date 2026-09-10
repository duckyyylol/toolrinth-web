<script lang="ts">
    import { page } from "$app/state";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import { Column, Heading, Row, Text } from "duckylib"

    import discordIcon from "$lib/assets/discord.png";
    import { AppConfig } from "$lib/config";
    import { PUBLIC_TEST_APP_URL } from "$env/static/public";

    const authorized = $derived(page.data.authorized);

    let hv = $state(false);

    async function sendTestNotifications(amount: number = 10): Promise<void> {
      await fetch(`${PUBLIC_TEST_APP_URL}/test/notifications/${page.data.user.id}`, {body: JSON.stringify(page.data.notifications.slice(-amount)), method: "POST", headers: {"Content-Type": "application/json"}});
    }
</script>

<Column justifyContent="space-between">
    <Header withHomeNav {authorized} />
    <Column heightPx="fit" gapEm={2}>
        {#if authorized}
            {#if page.data.user}
                <Column heightPx="fit">
                    <Text weight="bold">Authorized User</Text>
                    <Row>
                        <img id="avatar" src="https://cdn.discordapp.com/avatars/{page.data.user.id}/{page.data.user.avatar}.png" alt="{page.data.user.username} avatar">
                        <Column alignItems="flex-start" widthPx="fit" gapEm={0.33}>
                            <Text sizeEm={1.1} weight="bold">@{page.data.user.username}{page.data.user.discriminator !== "0" ? `#${page.data.user.discriminator}` : ""}</Text>
                            <!-- svelte-ignore a11y_mouse_events_have_key_events -->
                            <!-- svelte-ignore a11y_no_static_element_interactions -->
                            <div onmouseover={() => hv = true} onmouseleave={() => hv = false}><Text classList={["italic"]}>{#if hv}<span class="red"><a href="/auth/discord/logout">Log Out</a></span>{:else}{page.data.user.id}{/if}</Text></div>
                        </Column>
                    </Row>
                </Column>
            {/if}
            <Column backgroundColor="var(--mantle)" widthPercent={80} paddingBottomPx={12} paddingTopPx={12} paddingLeftPx={25} paddingRightPx={25} borderRadiusPx={8}>
                <Row widthPercent={50} justifyContent="space-between" backgroundColor="var(--crust)" paddingBottomPx={12} paddingTopPx={12} paddingLeftPx={25} paddingRightPx={25} borderRadiusPx={8}>
                    <Text sizeEm={1.1} weight="bold">Send Test Notifications (10)</Text>
                    <button onclick={async () => await sendTestNotifications()}><Text weight="bold" sizeEm={1.33}>Send</Text></button>
                </Row>
                <Row widthPercent={50} justifyContent="space-between" backgroundColor="var(--crust)" paddingBottomPx={12} paddingTopPx={12} paddingLeftPx={25} paddingRightPx={25} borderRadiusPx={8}>
                    <Text sizeEm={1.1} weight="bold">Send Test Notifications (50)</Text>
                    <button onclick={async () => await sendTestNotifications(50)}><Text weight="bold" sizeEm={1.33}>Send</Text></button>
                </Row>
            </Column>
            {:else}
            <Heading size={3} weight="bolder">Log In</Heading>
            <Text sizeEm={1.2}>Log in with Discord to access this page.</Text>
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore  a11y_no_static_element_interactions -->
            <div onclick={() => {window.location.replace("/auth/discord/login")}}>
                <Row heightPx="fit" widthPx="fit" backgroundColor="#5865F2" paddingBottomPx={12} paddingTopPx={12} paddingLeftPx={25} paddingRightPx={25} borderRadiusPx={8}>
                    <img src={discordIcon} alt="Discord Logo" id="icon">
                    <Text sizeEm={1.1} weight="bolder">Log in with Discord</Text>
                </Row>
            </div>
        {/if}
    </Column>
    <Footer {authorized} />
</Column>

<style>
    div {
        cursor: pointer;
        transition: all 0.3s;
    }

    div:hover {
        transform: scale(1.03);
    }

    #icon {
        height: 1.66em;
        aspect-ratio: 1/1;
    }

    #avatar {
        height: 3em;
        aspect-ratio: 1/1;
        border-radius: var(--border-md);
    }

    button {
        transition: all 0.3s;
        background: linear-gradient(
            54deg,
            var(--green) 0%,
            var(--green-bright) 50%,
            var(--green-dark) 130%
        );
        outline: none;
        user-select: none;
        cursor: pointer;
        border: 3px solid var(--mantle);
        padding: 0.33em 1em;
        border-radius: var(--border-md);
        box-shadow: 0px 0px 20px 5px var(--crust);
        text-shadow: 0px 0px 20px var(--crust);
        color: var(--text);
    }


    button:hover {
        transition: all 0.5s;
        transform: scale(1.04);
    }
</style>
