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
    import { PUBLIC_MOBILE_SIZE_PX, PUBLIC_TABLET_SIZE_PX } from "$env/static/public";
    import FeatureCard from "$lib/components/FeatureCard.svelte";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { onMount } from "svelte";
    import { AppConfig } from "$lib/config";
    import { ApiClient } from "@toolrinth/lib";

    let mobileQuery = new MediaQuery(`max-width: ${PUBLIC_MOBILE_SIZE_PX}px`);
    let tabletQuery = new MediaQuery(`max-width: ${PUBLIC_TABLET_SIZE_PX}px`);

    let stats = $state({authors: 0, projects: 0, files: 0, versions: 0})
    let statLoaded = $state(false);


    onMount(async () => {
      // const apiClient = new ApiClient();

      // const {data: s} = await apiClient.Statistics().getStatistics();

      // stats = {...s as any};

      // let i = setInterval(() => {
      //   if(!statLoaded && stats.authors > 0) {
      //     statLoaded = true;
      //     clearInterval(i);
      //   }
      // },1e3);

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
        paddingBottomPx={mobileQuery.current ? 0 : 30}
        paddingTopPx={mobileQuery.current ? 0 : 30}
        gapEm={1.66}
        flexWrap
    >
        <img src={logo} alt="Toolrinth Logo" id="logo" draggable={false} />
        <Column
            widthPx="fit"
            heightPx="fill"
            justifyContent="flex-start"
            alignItems={mobileQuery.current ? "center" : "flex-start"}
            textAlign="left"
            gapEm={0.6}
        >
            <Text weight="bolder" sizeEm={3}>Toolrinth</Text>
            <span class="faded"
                ><Text sizeEm={1.5} maxLines={1} inheritColor>Your Modrinth Companion</Text
                ></span
            >
            <Row gapEm={0.33} justifyContent="center" heightPx="fit" flexWrap>
                <button onclick={() => window.open(AppConfig.invites.stable, "_blank")} class="invite"
                    ><Row heightPx="fit" widthPx="fit">
                        <Symbol name="construction" inheritColor /><Text
                            sizeEm={1.33}
                            weight="bolder"
                            inheritColor>Add Toolrinth</Text
                        >
                    </Row></button
                >
                <button onclick={() => window.open(AppConfig.invites.canary, "_blank")} class="invite canary"
                    ><Row heightPx="fit" widthPx="fit">
                        <Symbol name="raven" inheritColor /><Text
                            sizeEm={1.33}
                            weight="bolder"
                            inheritColor>Add Toolrinth Canary</Text
                        >
                    </Row></button
                >
            </Row>
        </Column>
    </Row>

    <!-- {#if !mobileQuery.current}
            <Column heightPx="fit">
                <Text weight="bold">Supporting</Text>
                <Row widthPercent={70} gapEm={2} justifyContent="flex-start" flexWrap={tabletQuery.current}>
                    <Row heightPx="fit">
                        <Text sizeEm={1.33} weight="bolder">{!statLoaded ? "-".repeat(7) : stats.projects.toLocaleString()}</Text>
                        <Text weight="bold" sizeEm={1.1} classList={["italic"]}>Projects</Text>
                    </Row>

                    <Row heightPx="fit">
                        <Text sizeEm={1.33} weight="bolder">{!statLoaded ? "-".repeat(7) : stats.authors.toLocaleString()}</Text>
                        <Text weight="bold" sizeEm={1.1} classList={["italic"]}>Authors</Text>
                    </Row>

                    <Row heightPx="fit">
                        <Text sizeEm={1.33} weight="bolder">{!statLoaded ? "-".repeat(7) : stats.files.toLocaleString()}</Text>
                        <Text weight="bold" sizeEm={1.1} classList={["italic"]}>Files</Text>
                    </Row>

                    <Row heightPx="fit">
                        <Text sizeEm={1.33} weight="bolder">{!statLoaded ? "-".repeat(7) : stats.versions.toLocaleString()}</Text>
                        <Text weight="bold" sizeEm={1.1} classList={["italic"]}>Versions</Text>
                    </Row>
                </Row>
            </Column>
    {/if} -->

    <Column
        backgroundColor="var(--pink)"
        widthPercent={mobileQuery.current ? 90 : 70}
        textWrap
        textAlign="left"
        paddingBottomPx={10}
        paddingTopPx={10}
        paddingRightPx={10}
        paddingLeftPx={10}
        borderRadiusPx={8}
        marginTopPx={20}
        marginBottomPx={30}
    >
        <Text weight="bold"
            >Toolrinth is still under development! Report issues or suggest features in the <a href={AppConfig.support_server} target="_blank">Support Server</a>! You can test new features using the canary version.</Text
        >
    </Column>

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

    .canary {
        background: linear-gradient(
            54deg,
            var(--pink) 0%,
            var(--pink-bright) 50%,
            var(--pink-dark) 130%
        ) !important;
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
        padding: 0.2em 0.8em;
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
