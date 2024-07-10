import { Text,Tabs, TabList, TabPanels,Box, Tab, TabPanel,TabIndicator,Container,SimpleGrid,Card,CardBody,Avatar,Stack,Heading,Divider,Accordion,Button,AccordionIcon,
    AccordionItem,AccordionButton,AccordionPanel,useColorMode,useColorModeValue } from "@chakra-ui/react";
import { AddIcon,MinusIcon } from "@chakra-ui/icons"

export const FootInfo=()=>{


    const reviews=[
        {
            "review":"Love this app. I travel extensively around the world and this app helps me keep in touch.",
            "name":"Mac,Google Play Store"
        },
        {
            "review":"Whatever site I go to, they have no clue where I am located or who I am, and I like it that way.",
            "name":"Daniel Crates,Apple App Store"
        },
        
        
    ]

    const tweets=[
        {
            "image":"https://w0.peakpx.com/wallpaper/666/961/HD-wallpaper-anime-jujutsu-kaisen-satoru-gojo.jpg",
            "name":"Gojo Satoru",
            "review":"Got an account with @expressvpn yesterday. Great decision for traveling out of the country!,came handy in avoiding Sukuna"
        },
        {
            "image":"https://i.redd.it/654mc8bv2fja1.jpg",
            "name":"Sanemi Shinazugawa",
            "review":"I love express, in terms of security, speed and everything. Definitely recommending it to Muzan. He sure need's to hide now 😈😈"
        },
        {
            "image":"https://dthezntil550i.cloudfront.net/ex/latest/ex2308291210197740025168464/1280_960/951e53a3-60ee-42ff-911d-665f60d15a24.png",
            "name":"Levi Ackerrmann",
            "review":"@ExpressVPN has truly been indispensable while working remote. Now can stream all movies for free from the lands beyond the sea while being in paradis island"
        }
    ]

    const mdQuotes=[
        {
            "heading":"MUGEN ExPRESS",
            "content":"Practically everything about this service is top-tier. Set your heart ABLAZE 🔥🔥 "
        },
        {
            "heading":"Kasugai Corp.",
            "content":"With its consistent performance and reliable security, ExpressVPN is the best VPN out there."
        },
        {
            "heading":"Paradis Times",
            "content":"Great all-around option for both beginner and experienced VPN users."
        }
    ]


    const accordion=[
        {
            "question":"How do I choose a VPN?",
            "answer":"The most important quality to consider when choosing a VPN service is trust. A trustworthy VPN provider: is transparent in its privacy policy has been independently audited designs its systems to avoid storing personal data  shows a consistent commitment to internet privacy and digital freedom Thereafter, choose your VPN based on the features you need, such as VPN server locations, compatibility with all the devices you own, and unlimited bandwidth."
        },
        {
            "question":"Why should I pay for a VPN?",
            "answer":"It’s hard for a free VPN to match the features and service of a quality paid provider. With free VPNs, you are more likely to experience slow connections bogged down by a flood of users on suboptimal networks, no customer support, weak security, and a small number of VPN server locations to choose from.As a premium paid provider, ExpressVPN can offer connections optimized for speed, security, and stability, as well as a wide selection of server locations in 105 countries around the world. Plus, our dedicated Support Team is available 24/7 to help."
        },
        {
            "question":"Are VPNs legal?",
            "answer":"VPNs are legal, and they are consistently used by individuals and companies around the world to protect their private information and online activity, including in countries with highly restrictive governments. Even where VPNs are seen as discouraged, many governments tacitly endorse their use by officials, academics, or business leaders as a necessary measure to stay competitive in an interconnected world. It is not practical for any country to ban all VPNs.Having said that, illegal online activity remains illegal, whether you are using a VPN or not."
        },
        {
            "question":"Can I use a VPN on mobile? Why would I want to?",
            "answer":"With apps for iOS and Android, ExpressVPN is easy to use on mobile devices. As more of our digital activity—including banking, streaming, and messaging—happens on our phones and tablets, it is becoming more important to safeguard our data with a VPN on these devices, especially when using public Wi-Fi."
        },
        {
            "question":"Will a VPN slow down my internet?",
            "answer":"VPNs have the potential to slow your internet connection, but ExpressVPN’s industry-leading speeds mean users rarely notice a difference. In fact, use of a VPN may actually improve your connection if your ISP has been throttling your traffic.In any case, if you do notice that your connection has slowed down, try selecting a server location that is geographically closer to you."
        },
        {
            "question":"Do VPNs drain battery?",
            "answer":"Like all apps, a VPN will consume some amount of power on your device. That’s one reason ExpressVPN developed Lightway, our exclusive, custom-built new VPN protocol, which is designed to use significantly less battery than other protocols. It’s also faster and easier to audit and maintain."
        },
        {
            "question":"Can you be tracked if you use a VPN?",
            "answer":"ExpressVPN believes everyone has a right to privacy. When you connect to our network, strong encryption prevents your activity from being observed by your internet provider, Wi-Fi operators, or other third parties. ExpressVPN collects no activity or connection logs, and our groundbreaking TrustedServer technology ensures that no data is ever stored on any server. In short, no specific network activity or behavior can be traced to any ExpressVPN user."
        },
        {
            "question":"Is using a VPN safe for online banking?",
            "answer":"Using a VPN is not only safe, it can add a valuable layer of security to your online banking, especially on public Wi-Fi networks. And because some financial institutions will suspend access to users who appear to be visiting from somewhere unexpected, connecting to a server location in your home country before you log in to your bank or PayPal account can save you from getting locked out."
        },
        {
            "question":"Should I leave my VPN on all the time?",
            "answer":"We recommend that you keep ExpressVPN on anytime your device is connected to the internet, even if you’re not actively using it. By leaving the app running in the background, you’ll have peace of mind knowing that your privacy is always protected."
        }
    ]


    return(
        <div>
            <div>
                <Tabs defaultIndex={1} isFitted position="relative" variant="unstyled">
                    <TabList>
                        <Tab fontFamily=" Philosopher" fontSize={{lg:"2xl",md:"xl",base:"14px"}}>REVIEWS</Tab>
                        <Tab fontFamily=" Philosopher" fontSize={{lg:"2xl",md:"xl",base:"14px"}}>TWEETS</Tab>
                        <Tab fontFamily=" Philosopher" fontSize={{lg:"2xl",md:"xl",base:"14px"}}>MEDIA QUOTES</Tab>    
                    </TabList>
                    <TabIndicator   
                    
                    height="2px"
                    bg="blue.900"
                    
                    />
                    <TabPanels>
                    <TabPanel>
                        <SimpleGrid columns={[1, null, 2]} spacing='40px' >
                            {
                                reviews.map(el=>(
                                    <Stack mt='6' spacing='3'>
                                        <Text fontFamily="PT Sans" fontSize={{lg:"xl",md:"lg",base:"md"}} textAlign="left">
                                        {el.review}
                                        </Text>
                                        <Heading fontFamily="Philosopher" size='sm'>-{el.name} <br /></Heading>
                                    </Stack>
                                ))
                            }
                        </SimpleGrid> 
                    </TabPanel>
                    <TabPanel>
                    <SimpleGrid columns={[1, null, 3]} spacing='40px' >
                    {
                        tweets.map(el=>(
                        <Card fontFamily="PTSans" variant="none" outline="none"  marginBottom={"10%"}>
                            <CardBody>
                            <Avatar size={{lg:'2xl',base:"xl"}} name={el.image} src={el.image} />
                            <Stack mt='6' spacing='3'>
                                <Heading fontFamily="Philosopher" size='md'>{el.name} <br /></Heading>
                                <Text fontFamily="PT Sans" fontSize={{lg:"xl",md:"lg",base:"md"}} textAlign="left">
                                {el.review}
                                </Text>
                            </Stack>
                            </CardBody>
                            <Divider />
                        </Card>
                        ))
                    }
                    </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                    <SimpleGrid columns={[1, null, 3]} spacing='40px' >
                            {
                                mdQuotes.map(el=>(
                                    <Stack mt='6' spacing='3'>
                                        <Heading fontFamily="Philosopher" size='2xl'>{el.heading} <br /></Heading>
                                        <Text fontFamily="PT Sans" fontSize={{lg:"23px",md:"20px",base:"18px"}} textAlign="left">
                                        {el.content}
                                        </Text>
                                    </Stack>
                                ))
                            }
                        </SimpleGrid>
                    </TabPanel>
                    </TabPanels>
                </Tabs>
                <Heading my="5%" fontFamily="Philosopher" size="2xl">Frequently Asked Questions</Heading>
                {accordion.map((el) => {
                return (
                <Accordion textAlign="left" marginLeft={{lg:"25%",base:0}} width={{lg:"50%",base:"100%"}} allowMultiple>
                    <AccordionItem>
                        {({ isExpanded }) => (
                        <>
                    
                            <AccordionButton>
                                
                                <Box as="span" flex='1' textAlign='left'>
                                    <Text fontFamily="Philosopher" fontSize={{lg:"23px",md:"20px",base:"18px"}}>{el.question}</Text>
                                </Box>
                                {isExpanded ? (
                                <MinusIcon fontSize='12px' />
                                ) : (
                                <AddIcon fontSize='12px' />
                                )}
                            </AccordionButton>
                        
                            <AccordionPanel pb={4}>
                                <Text fontFamily="PT Sans" fontSize={{lg:"18px",base:"16px"}}>{el.answer}</Text>.
                            </AccordionPanel>
                        </>
                    )}
                    </AccordionItem>
                    </Accordion>

                );
                })}
            </div> 
        </div>
  
    )
}