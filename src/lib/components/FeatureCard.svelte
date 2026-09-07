<script lang="ts">
    import { PUBLIC_MOBILE_SIZE_PX } from "$env/static/public";
    import { Column, Heading, Text } from "duckylib";
    import { onMount } from "svelte";
    import { MediaQuery } from "svelte/reactivity";

    interface FeatureCardProps {
      image: string;
      alt?: string;
      heading: string;
      description: string;
    }

    const {image, heading, description, alt}: FeatureCardProps = $props();

    onMount(() => {
      document.querySelectorAll(".feature").forEach(feature => {
        feature.addEventListener("click", (ev) => {

          if(window.localStorage.getItem("first") !== "1") {
            alert("Hold CTRL to disable 3D rotation!")
            window.localStorage.setItem("first", "1")
          }
        })
        feature.addEventListener("mousemove", (ev: any) => {

          const event = ev as MouseEvent;
          const target = event.currentTarget as HTMLElement;
          const rect = target.getBoundingClientRect();
          let xRotation = (-(event.clientY - rect.y - (rect.height / 2)))/3
          let yRotation = (event.clientX - rect.x - (rect.width /2))/3

          const angle = 10;

          if(xRotation > angle) xRotation = angle;
          if(xRotation < -angle) xRotation = -angle;

          if(yRotation > angle) yRotation = angle;
          if(yRotation < -angle) yRotation = -angle;

          if(window.localStorage.getItem("first") !== "1") {
            target.style.cursor = "help";
          } else target.style.cursor = "default"

          if(!event.ctrlKey && !mobileQuery.current) {
            target.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.1)`
          } else target.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;

        })

        feature.addEventListener("mouseleave", (ev) => {
          const target = ev.currentTarget as HTMLElement;

          setTimeout(() => {
            target.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
          },300)

        })
      })
    })

    let mobileQuery = new MediaQuery(`max-width: ${PUBLIC_MOBILE_SIZE_PX}px`);
</script>

<div class="feature" style:aspect-ratio={mobileQuery.current ? 5/8 : 5/6}>
    <Column
        heightPx="fit"
        widthPx="fill"
        justifyContent="center"
        gapEm={3}
    >
        <img
            src={image}
            alt={alt ? alt : description}
            class="example"
            draggable={false}
        />
        <Column
            widthPercent={mobileQuery.current ? 80 : 70}
            heightPx="fill"
            justifyContent="flex-start"
            alignItems="flex-start"
            textAlign="left"
            gapEm={0.66}
            textWrap
        >
            <Heading size={mobileQuery.current ? 4 : 3} weight="bolder" inheritColor
                >{heading}</Heading
            >
            <span class="faded"
                ><Text sizeEm={mobileQuery.current ? 0.9 : 1} weight="bold" inheritColor
                    >{description}</Text
                ></span
            >
        </Column>
    </Column>
</div>

<style>
    .example {
        width: 40vw;
        max-width: 400px;
        user-select: none;
        border-radius: var(--border-md);
        box-shadow: 0px 0px 10px 1px var(--crust);
        transition: 0.5s all;
    }


    .feature {
        aspect-ratio: 5/6;
        position: relative;
        transition: 1s all;
        display: inherit;
        min-height: 10vh;
        /*max-height: 11vh;*/
        max-width: 500px;
        border: 3px solid var(--crust);
        padding: 1em;
        border-radius: var(--border-md);
        color: var(--green-bright);
        box-shadow: 0px 0px 30px 3px var(--crust);
        z-index: 1;
    }

    @media only screen and (max-width: 800px) {
        .example {
            max-width: 220px !important;
            width: 80vw;
        }

    }

    @media only screen and (min-width: 800px) {
        .feature:hover {
            background-color: var(--blue-dark);
            color: var(--text);
            border: 3px solid var(--text);
            z-index: 100;

            img {
                transform: scale(1.190);
                box-shadow: 0px 0px 30px 5px var(--crust);
            }

            *:not(img) {
                transition: 1s all;
                /*font-size: 1.1em;*/
                z-index: 200;
                position: relative;
            }

            *.faded {
                color: var(--text) !important;
            }
        }
    }

    .feature * {
        pointer-events: none;
    }
</style>
