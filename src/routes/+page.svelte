<script lang="ts">
    import {
        Column,
        Heading,
        HorizontalRule,
        Row,
        Text,
        Symbol,
    } from "duckylib";
    import logo from "$lib/assets/favicon.png";
    import lookup_example from "$lib/assets/search_example.png";
    import tracking_setup_example from "$lib/assets/tracking_setup_example.png";
    import gallery_example from "$lib/assets/gallery_example.png";
    import tracking_example from "$lib/assets/tracking_example.png";
    import { MediaQuery } from "svelte/reactivity";
    import { PUBLIC_MOBILE_SIZE_PX } from "$env/static/public";
    import FeatureCard from "$lib/components/FeatureCard.svelte";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { onMount } from "svelte";

    let mobileQuery = new MediaQuery(`max-width: ${PUBLIC_MOBILE_SIZE_PX}px`);

    onMount(() => {
      document.getElementById("inner")?.scrollTo({top: 0, behavior: 'smooth'})
	})
</script>

<Header withInvites />
<Column alignItems="center" justifyContent="flex-start" paddingTopPx={50}>
    <Row
        widthPx="fit"
        heightPx="fit"
        justifyContent="center"
        alignItems="center"
        textAlign="left"
        paddingBottomPx={30}
        paddingTopPx={30}
        gapEm={1.66}
        flexWrap
    >
        <img src={logo} alt="Toolrinth Logo" id="logo" draggable={false} />
        <Column
            widthPx="fit"
            heightPx="fill"
            justifyContent="flex-start"
            alignItems="flex-start"
            textAlign="left"
            gapEm={0.6}
        >
            <Text weight="bolder" sizeEm={3}>Toolrinth</Text>
            <span class="faded"
                ><Text sizeEm={1.5} maxLines={1} inheritColor>Your Modrinth Companion</Text
                ></span
            >
            <button onclick={() => window.open("https://discord.com/oauth2/authorize?client_id=1545764581417291816", "_blank")} class="invite"
                ><Row heightPx="fit" widthPx="fit">
                    <Symbol name="construction" inheritColor /><Text
                        sizeEm={1.66}
                        weight="bolder"
                        inheritColor>Add Toolrinth</Text
                    >
                </Row></button
            >
        </Column>
    </Row>

    <Column heightPx="fit" alignItems="center" widthPercent={80} gapEm={3}>
        <Column
            widthPercent={mobileQuery.current ? 100 : 70}
            heightPx="fill"
            justifyContent="flex-start"
            alignItems="flex-start"
            textAlign="left"
            gapEm={0.33}
            textWrap
        >
            <Heading size={2} weight="boldest">Features</Heading>
            <span class="faded"
                ><Text sizeEm={1} weight="bold" inheritColor
                    >Toolrinth is a slick bot for keeping up with your favorite
                    Modrinth projects!</Text
                ></span
            >
        </Column>
        <Row
            flexWrap
            widthPercent={100}
            justifyContent="center"
            alignItems="flex-start"
        >
            <FeatureCard heading="Project Lookup" description="Easily fetch information about any project with a simple search!" image={lookup_example} alt="Project Lookup Example" />
            <FeatureCard heading="Stay in the Loop" description="With Project Tracking, you can get realtime updates when your favorite projects release new versions!" image={tracking_setup_example} alt="Project Tracking Update Example" />
            <FeatureCard heading="Keep Updated" description="Stay up-to-date on the newest versions of your favorite projects, and download them directly!" image={tracking_example} alt="Project Tracking Setup Example" />
            <FeatureCard heading="Take a Good Look" description="View detailed information about Modrinth projects, like supported versions and gallery images!" image={gallery_example} alt="Gallery View Example" />
        </Row>
    </Column>
    <Footer />
</Column>

<style>
    #logo {
        height: 8em;
        user-select: none;
    }



    .invite {
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
        padding: 0.33em 0.8em;
        border-radius: var(--border-md);
        box-shadow: 0px 0px 20px 5px var(--crust);
        text-shadow: 0px 0px 20px var(--crust);
        color: var(--text);
    }


    .invite:hover {
        transition: all 0.5s;
        transform: scale(1.04);
    }
</style>
