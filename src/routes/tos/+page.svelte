<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { Column, Heading, Text } from "duckylib";
    import { browser } from "$app/environment";
    import { MediaQuery } from "svelte/reactivity";
    import { PUBLIC_MOBILE_SIZE_PX } from "$env/static/public";
    import { onMount } from "svelte";
    import { afterNavigate } from "$app/navigation";

    let lastUpdate = new Date(1788745772762);
    let formatter = new Intl.DateTimeFormat(browser ? window.navigator.language : "en-US", {
      dateStyle: "long",
    })

    let mobileQuery = new MediaQuery(`max-width: ${PUBLIC_MOBILE_SIZE_PX}px`);
    let width = $state(mobileQuery.current ? 95 : 85);

    onMount(() => {
      document.getElementById("inner")?.scrollTo({top: 0, behavior: 'smooth'})
	})
</script>

<Column heightPx="fit">
    <Header withHomeNav />
    <Column justifyContent="flex-start" paddingTopPx={30}>
        <!-- Heading -->
        <Column justifyContent="flex-start" alignItems="flex-start" textAlign="left" widthPercent={width} paddingTopPx={30}>
            <Heading weight="bold" size={4}>Terms of Service</Heading>
            <Text classList={["italic"]} sizeEm={0.8}>Effective {formatter.format(lastUpdate)}</Text>
           <Text classList={["italic"]} sizeEm={0.8}><a href="mailto:legal@toolrinth.com" target="_blank">legal@toolrinth.com</a></Text>
        </Column>
       <!-- Readable -->
       <Column justifyContent="flex-start" alignItems="flex-start" textAlign="left" widthPercent={width} paddingTopPx={30} gapEm={0.5} textWrap>
           <Column justifyContent="flex-start" alignItems="flex-start" textAlign="left" widthPercent={width} paddingTopPx={30} textWrap>
               <Heading weight="bold" size={4}>Acceptance of Terms</Heading>
              <Text>By accessing or using https://toolrinth.com (the "Service") operated by Toolrinth ("we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.</Text>
           </Column>

           <Column justifyContent="flex-start" alignItems="flex-start" textAlign="left" widthPercent={width} paddingTopPx={30} textWrap>
               <Heading weight="bold" size={4}>Description of Service</Heading>
              <Text>Toolrinth provides SaaS / Software services through our platform. The Service is provided on a Free basis. We reserve the right to modify, suspend, or discontinue the Service at any time with or without notice.</Text>
           </Column>

           <Column justifyContent="flex-start" alignItems="flex-start" textAlign="left" widthPercent={width} paddingTopPx={30} textWrap>
               <Heading weight="bold" size={4}>Age Requirements</Heading>
              <Text>You must be at least 13 years to use this Service. By using the Service, you represent that you meet this age requirement. If we become aware that a user does not meet this requirement, we will terminate their access to this service.</Text>
           </Column>

           <Column justifyContent="flex-start" alignItems="flex-start" textAlign="left" widthPercent={width} paddingTopPx={30} textWrap>
               <Heading weight="bold" size={4}>Intellectual Property</Heading>
              <Text>The Service and its original content, features, and functionality are and will remain the exclusive property of Toolrinth and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Toolrinth.</Text>
              <Text>User-generated content remains the property of the user, but you grant Toolrinth a non-exclusive, royalty-free license to use, display, and distribute such content in connection with the Service.</Text>
           </Column>

           <Column justifyContent="flex-start" alignItems="flex-start" textAlign="left" widthPercent={width} paddingTopPx={30} textWrap>
               <Heading weight="bold" size={4}>Prohibited Uses</Heading>
              <Text>You agree not to use the Service:</Text>
              <Column heightPx="fit" justifyContent="flex-start" alignItems="flex-start" textAlign="left" widthPercent={100} textWrap>
                  <ul>
                      <li><Text>In any way that violates applicable laws or regulations</Text></li>
                      <li><Text>To transmit unsolicited commercial communications (spam)</Text></li>
                      <li><Text>To impersonate any person or entity</Text></li>
                      <li><Text>To engage in any conduct that restricts or inhibits others' use of the Service</Text></li>
                      <li><Text>To attempt to gain unauthorized access to any part of the Service</Text></li>
                      <li><Text>To use automated scripts to collect information from or interact with the Service</Text></li>
                      <li><Text>To upload or transmit viruses or other malicious code</Text></li>
                  </ul>
              </Column>
           </Column>

           <Column justifyContent="flex-start" alignItems="flex-start" textAlign="left" widthPercent={width} paddingTopPx={30} textWrap>
               <Heading weight="bold" size={4}>Disclosure of Warranties</Heading>
              <Text>The Service is provided on an "AS IS" and "AS AVAILABLE" basis without any warranties of any kind, whether express or implied. Toolrinth expressly disclaims all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</Text>
              <Text>We do not warrant that: (a) the Service will function uninterrupted or error-free; (b) defects will be corrected; (c) the Service is free of viruses or other harmful components.</Text>
           </Column>

           <Column justifyContent="flex-start" alignItems="flex-start" textAlign="left" widthPercent={width} paddingTopPx={30} textWrap>
               <Heading weight="bold" size={4}>Limitation of Liability</Heading>
              <Text>To the maximum extent permitted by applicable law, Toolrinth shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, goodwill, or other intangible losses, resulting from your use of or inability to use the Service.</Text>
              <Text>In no event shall Toolrinth's total liability to you exceed the greater of one hundred dollars ($100) or the amounts paid by you to Toolrinth in the past twelve months.</Text>
           </Column>

           <Column justifyContent="flex-start" alignItems="flex-start" textAlign="left" widthPercent={width} paddingTopPx={30} textWrap>
               <Heading weight="bold" size={4}>Governing Law</Heading>
              <Text>These Terms shall be governed and construed in accordance with the laws of Michigan, USA, without regard to its conflict of law provisions.</Text>
              <Text>Any disputes arising under these Terms will be resolved through binding arbitration in Michigan, USA, except that either party may seek injunctive relief in any court of competent jurisdiction.</Text>
           </Column>

           <Column justifyContent="flex-start" alignItems="flex-start" textAlign="left" widthPercent={width} paddingTopPx={30} textWrap>
               <Heading weight="bold" size={4}>Changes to Terms</Heading>
              <Text>We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on this page with a new effective date. Your continued use of the Service after changes are posted constitutes acceptance of the revised Terms.</Text>
           </Column>

           <Column justifyContent="flex-start" alignItems="flex-start" textAlign="left" widthPercent={width} paddingTopPx={30} textWrap>
               <Heading weight="bold" size={4}>Contact</Heading>
              <Text>If you have questions about these Terms, please contact us at <a style:text-decoration="underline" href="mailto:legal@toolrinth.com" target="_blank">legal@toolrinth.com</a></Text>
           </Column>
       </Column>

       <button class="invite" onclick={() => document.getElementById("inner")?.scrollTo({top: 0, behavior: 'smooth'})}><Text weight="bold" sizeEm={1.33}>Back to Top</Text></button>

    </Column>

    <Footer />
</Column>

<style>
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
