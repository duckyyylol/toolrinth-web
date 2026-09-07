<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { Column, Heading, Row, Text } from "duckylib";
    import { browser } from "$app/environment";
    import { MediaQuery } from "svelte/reactivity";
    import { PUBLIC_MOBILE_SIZE_PX } from "$env/static/public";
    import { onMount } from "svelte";

    let lastUpdate = new Date(1788745772762);
    let formatter = new Intl.DateTimeFormat(
        browser ? window.navigator.language : "en-US",
        {
            dateStyle: "long",
        },
    );

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
        <Column
            justifyContent="flex-start"
            alignItems="flex-start"
            textAlign="left"
            widthPercent={width}
            paddingTopPx={30}
        >
            <Heading weight="bold" size={4}>Privacy Policy</Heading>
            <Text classList={["italic"]} sizeEm={0.8}
                >Effective {formatter.format(lastUpdate)}</Text
            >
            <Text classList={["italic"]} sizeEm={0.8}
                ><a href="mailto:legal@toolrinth.com" target="_blank"
                    >legal@toolrinth.com</a
                ></Text
            >
        </Column>
        <!-- Readable -->
        <Column
            justifyContent="flex-start"
            alignItems="flex-start"
            textAlign="left"
            widthPercent={width}
            paddingTopPx={30}
            gapEm={0.5}
            textWrap
        >
            <Column
                justifyContent="flex-start"
                alignItems="flex-start"
                textAlign="left"
                widthPercent={width}
                paddingTopPx={30}
                textWrap
            >
                <Heading weight="bold" size={4}>Introduction</Heading>
                <Text
                    >This Privacy Policy describes how Toolrinth ("we," "us," or
                    "our") collects, uses, and shares information about you when
                    you use our website at https://toolrinth.com (the
                    "Service").</Text
                >
                <Text
                    >By using our Service, you agree to the collection and use
                    of information in accordance with this policy. This policy
                    applies to all visitors, users, and others who access or use
                    the Service.</Text
                >
            </Column>

            <Column
                justifyContent="flex-start"
                alignItems="flex-start"
                textAlign="left"
                widthPercent={width}
                paddingTopPx={30}
                textWrap
            >
                <Heading weight="bold" size={4}>Information we Collect</Heading>
                <Text
                    >We collect several types of information in connection with
                    the Service:</Text
                >
                <Column
                    heightPx="fit"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    textAlign="left"
                    widthPercent={100}
                    textWrap
                >
                    <ul>
                        <li><Text>Discord user IDs and usernames</Text></li>
                        <li><Text>Server membership data</Text></li>
                        <li><Text>Command usage logs</Text></li>
                        <li><Text>Per-server bot configuration data</Text></li>
                        <li>
                            <Text
                                >We may receive information about you from
                                third-party services you connect to our Service.</Text
                            >
                        </li>
                    </ul>
                </Column>
            </Column>

            <Column
                justifyContent="flex-start"
                alignItems="flex-start"
                textAlign="left"
                widthPercent={width}
                paddingTopPx={30}
                textWrap
            >
                <Heading weight="bold" size={4}
                    >How We Use Your Information</Heading
                >
                <Text>We use the information we collect to:</Text>
                <Column
                    heightPx="fit"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    textAlign="left"
                    widthPercent={100}
                    textWrap
                >
                    <ul>
                        <li>
                            <Text
                                >Provide, operate, and maintain our Service</Text
                            >
                        </li>
                        <li>
                            <Text>Improve and personalize your experience</Text>
                        </li>
                        <li><Text>Understand how you use our Service</Text></li>
                        <li>
                            <Text
                                >Communicate with you, including for customer
                                service</Text
                            >
                        </li>
                        <li>
                            <Text
                                >Process transactions and send related
                                information</Text
                            >
                        </li>
                        <li>
                            <Text
                                >Send you technical notices, updates, and
                                security alerts</Text
                            >
                        </li>
                        <li><Text>Comply with legal obligations</Text></li>
                    </ul>
                </Column>
            </Column>

            <Column
                justifyContent="flex-start"
                alignItems="flex-start"
                textAlign="left"
                widthPercent={width}
                paddingTopPx={30}
                textWrap
            >
                <Heading weight="bold" size={4}
                    >How We Share Your Information</Heading
                >
                <Text
                    >We may share your information in the following
                    circumstances:</Text
                >
                <Column
                    heightPx="fit"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    textAlign="left"
                    widthPercent={100}
                    textWrap
                >
                    <ul>
                        <li>
                            <Text
                                >We may disclose information if required by law
                                or in response to valid legal processes.</Text
                            >
                        </li>
                        <li>
                            <Text
                                >We may share information in connection with a
                                merger, acquisition, or sale of assets.</Text
                            >
                        </li>
                    </ul>

                    <Column
                        backgroundColor="var(--green-dark)"
                        widthPercent={100}
                        textWrap
                        textAlign="left"
                        paddingBottomPx={10}
                        paddingTopPx={10}
                        paddingRightPx={10}
                        paddingLeftPx={10}
                        borderRadiusPx={8}
                    >
                        <Text weight="bold"
                            >We do not sell or share your personal information
                            with third parties for their marketing purposes.</Text
                        >
                    </Column>
                </Column>
            </Column>

            <Column
                justifyContent="flex-start"
                alignItems="flex-start"
                textAlign="left"
                widthPercent={width}
                paddingTopPx={30}
                textWrap
            >
                <Heading weight="bold" size={4}
                    >Cookies and Tracking Technologies</Heading
                >
                <Text
                    >We use cookies and similar tracking technologies to track
                    activity on our Service and to hold certain information. You
                    can instruct your browser to refuse all cookies or to
                    indicate when a cookie is being sent.</Text
                >
                <Text
                    >We use cookies for the following purposes: analytics and
                    performance, functional preferences, and marketing (where
                    applicable). Third-party services we use — such as analytics
                    and payment processors — may also set their own cookies.</Text
                >
            </Column>

            <Column
                justifyContent="flex-start"
                alignItems="flex-start"
                textAlign="left"
                widthPercent={width}
                paddingTopPx={30}
                textWrap
            >
                <Heading weight="bold" size={4}>Data Retention</Heading>
                <Text
                    >We will retain your personal information for As long as
                    necessary. Data must not be kept longer than necessary for
                    the specified purpose. Retention periods must be documented
                    and enforced.</Text
                >
                <Text
                    >When we no longer need to retain your information, we will
                    securely delete or anonymize it.</Text
                >
            </Column>

            <Column
                justifyContent="flex-start"
                alignItems="flex-start"
                textAlign="left"
                widthPercent={width}
                paddingTopPx={30}
                textWrap
            >
                <Heading weight="bold" size={4}
                    >Your Rights Under the GDPR</Heading
                >
                <Text
                    >If you are located in the European Economic Area, you have
                    the following rights regarding your personal data:</Text
                >
                <Column
                    heightPx="fit"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    textAlign="left"
                    widthPercent={100}
                    textWrap
                >
                    <ul>
                        <li>
                            <Text
                                >Right of access: You can request a copy of the
                                personal data we hold about you.</Text
                            >
                        </li>
                        <li>
                            <Text
                                >Right to rectification: You can ask us to
                                correct inaccurate or incomplete information.</Text
                            >
                        </li>
                        <li>
                            <Text
                                >Right to erasure ("right to be forgotten"): You
                                can ask us to delete your personal data in
                                certain circumstances.</Text
                            >
                        </li>
                        <li>
                            <Text
                                >Right to restriction of processing: You can ask
                                us to limit how we use your data.</Text
                            >
                        </li>
                        <li>
                            <Text
                                >Right to data portability: You can request your
                                data in a machine-readable format.</Text
                            >
                        </li>
                        <li>
                            <Text
                                >Right to object: You can object to our
                                processing of your data based on legitimate
                                interests.</Text
                            >
                        </li>
                    </ul>
                </Column>

                <Text
                    >To exercise any of these rights, please contact us at <a
                        href="mailto:legal@toolrinth.com"
                        target="_blank">legal@toolrinth.com</a
                    >. We will respond within 30 days.</Text
                >

                <Heading size={6} weight="bold"
                    >Lawful basis for processing:</Heading
                >
                <Text
                    >We process your personal data on the basis of consent,
                    contract performance, legitimate interests, and legal
                    obligations as applicable.</Text
                >
            </Column>

            <Column
                justifyContent="flex-start"
                alignItems="flex-start"
                textAlign="left"
                widthPercent={width}
                paddingTopPx={30}
                textWrap
            >
                <Heading weight="bold" size={4}>Children's Privacy</Heading>
                <Text
                    >Our Service is not directed to children under the age of
                    13. We do not knowingly collect personal information from
                    children under 13. If we become aware that we have collected
                    personal information from a child under 13, we will take
                    steps to delete that information promptly.</Text
                >
                <Text
                    >If you are a parent or guardian and believe your child has
                    provided us with personal information, please contact us at <a
                        href="mailto:legal@toolrinth.com"
                        target="_blank">legal@toolrinth.com</a
                    >.</Text
                >
            </Column>

            <Column
                justifyContent="flex-start"
                alignItems="flex-start"
                textAlign="left"
                widthPercent={width}
                paddingTopPx={30}
                textWrap
            >
                <Heading weight="bold" size={4}>Data Security</Heading>
                <Text
                    >We implement appropriate technical and organizational
                    security measures to protect your personal information
                    against accidental or unlawful destruction, loss,
                    alteration, unauthorized disclosure, or access.</Text
                >
                <Text
                    >However, no method of transmission over the internet or
                    method of electronic storage is 100% secure. While we strive
                    to use commercially acceptable means to protect your
                    personal information, we cannot guarantee its absolute
                    security.</Text
                >
            </Column>

            <Column
                justifyContent="flex-start"
                alignItems="flex-start"
                textAlign="left"
                widthPercent={width}
                paddingTopPx={30}
                textWrap
            >
                <Heading weight="bold" size={4}>Third-Party Links</Heading>
                <Text
                    >Our Service may contain links to third-party websites. We
                    have no control over and assume no responsibility for the
                    content, privacy policies, or practices of any third-party
                    sites or services. We encourage you to review the privacy
                    policy of every site you visit.</Text
                >
            </Column>

            <Column
                justifyContent="flex-start"
                alignItems="flex-start"
                textAlign="left"
                widthPercent={width}
                paddingTopPx={30}
                textWrap
            >
                <Heading weight="bold" size={4}>Data Security</Heading>
                <Text
                    >We may update our Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy
                    on this page and updating the "Last updated" date at the
                    top.</Text
                >
                <Text
                    >You are advised to review this Privacy Policy periodically
                    for any changes. Changes to this Privacy Policy are
                    effective when they are posted on this page.</Text
                >
            </Column>

            <Column
                justifyContent="flex-start"
                alignItems="flex-start"
                textAlign="left"
                widthPercent={width}
                paddingTopPx={30}
                textWrap
            >
                <Heading weight="bold" size={4}>Contact</Heading>
                <Text
                    >If you have questions about this Privacy Policy, please
                    contact us at <a
                        style:text-decoration="underline"
                        href="mailto:legal@toolrinth.com"
                        target="_blank">legal@toolrinth.com</a
                    ></Text
                >
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
