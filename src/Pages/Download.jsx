import { Text,Heading,Container,Box,SimpleGrid,Image,Button,UnorderedList,ListItem,
    Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useColorModeValue ,
  useToast
} from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom'
import { ReasonCard } from '../Components/ReasonCard'
import { FeatureCard } from '../Components/FeatureCard'
import "./styles.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark,faCheck } from '@fortawesome/free-solid-svg-icons'


import desktop from "../Resources/icons/download/get-expressvpn-now_3x-9216c2c68596134775f623c7ad79ed33.avif"
import dwnldApp from "../Resources/icons/download/setup-6731c7d7c0332b5720e7e6a6fb8f8fc0.avif"
import secureDevice from "../Resources/icons/download/devices-green-shield__1_-21e8480cd149787554388ebac4eb3ef9.avif"

import vpnHero from "../Resources/icons/download/what-is-vpn-hero-foreground-mobile-4d47a38801e2b78872402d218ac4b671.avif"
import encryption from "../Resources/icons/homepage/encryption-2fc801604da35f1879fc2f4d5da4443b.avif"
import womenLaptop from "../Resources/icons/download/woman-using-laptop-on-couch-a0209d271272671938aea19e2a9d523a.avif"

import beAnywere from "../Resources/icons/homepage/be-anywhere.avif"
import seriousSec from "../Resources/icons/homepage/serious-security.avif"
import totalAccess from "../Resources/icons/download/defeat-censorship-80ef973675b6e4ac52757c545946f700.avif"
import trustedServer from "../Resources/icons/homepage/trustedserver-technology.avif"
import blazingSpeed from "../Resources/icons/homepage/blazing-fast-speeds.avif"
import multDevice from "../Resources/icons/homepage/every-platform__1_.avif"
import connectAll from "../Resources/icons/homepage/connect-5-locations-at-once_blue_.avif"
import noLogs from "../Resources/icons/homepage/no-logs.avif"
import privateDns from "../Resources/icons/homepage/worlds--1-premium-vpn.avif"
import adBlocker from "../Resources/icons/download/feature_threat_manager_3x-efc07ca8eaf01329e9ee050a8fd43716.avif"
import genPassword from "../Resources/icons/download/generate-strong-passwords-3d41a7aa860b308929435129a73a5ef4.avif"
import audit from "../Resources/icons/download/independently-audited-75caf035edac520d6baf0851d0d70ebc.avif"


export const Download=()=>{

    const toast=useToast();

    const navigate=useNavigate();

    const tabColor=useColorModeValue("#E2E8F0","#2B6CB0")
    const links=[
        {
            "name":"Download for windows",
            "link":""
        },
        {
            "name":"Download for Mac",
            "link":""
        },
        {
            "name":"Download for windows",
            "link":""
        },
        {
            "name":"Download for Android",
            "link":""
        },
        {
            "name":"Download for iOS",
            "link":""
        },
        {
            "name":"Download for Apple TV",
            "link":""
        },
        {
            "name":"Download for Fire TV",
            "link":""
        },
        {
            "name":"Download for Chrome",
            "link":""
        },
        {
            "name":"ExpressVPN for routers",
            "link":""
        }
    ]

    const steps=[
        {
            "image":desktop,
            "heading":"1.Sign up for ExpressVPN",
            "content":"Visit the order page and select the option that’s right for you. All of our plans are fully covered by our 30-day money-back guarantee."
        },
        {
            "image":dwnldApp,
            "heading":"2.Download a VPN app",
            "content":"You’ll immediately be invited to download the app for the device you’re using. Getting apps for all your other devices is just as easy."
        },
        {
            "image":secureDevice,
            "heading":"3.Choose a VPN server location",
            "content":"Simply hit the On Button, and you’ll be instantly connected to the best location for your connection. Or pick one from our global network."
        }
    ]

    const feature=[
        {
            "image":beAnywere,
            "heading":"Servers in 105 countries",
            "content":"Appear to be anywhere in the world with our global fleet of VPN servers. You’ll get an IP address for a location that suits your needs."
        },
        {
            "image":seriousSec,
            "heading":"Best-in-class encryption",
            "content":"Your data transmissions are protected by AES-256, the encryption standard trusted by security experts around the world. Keep your activity to yourself."
        },
        {
            "image":totalAccess,
            "heading":"Total content access",
            "content":"ExpressVPN is optimized to break through censorship and other region-based restrictions, as well as those found in school or office Wi-Fi networks."
        },
        {
            "image":trustedServer,
            "heading":"Advanced server tech",
            "content":"Our innovative TrustedServer system is designed to not log user activity, with the added safeguard of forcing all data to be wiped with every reboot."
        },
        {
            "image":blazingSpeed,
            "heading":"Lightway protocol",
            "content":"Our pioneering VPN protocol built from the ground up, Lightway is engineered for a faster, more secure, and more reliable VPN experience."
        },
        {
            "image":multDevice,
            "headig":"Works on all devices",
            "content":"Download and set up ExpressVPN on Windows, Mac, Android, iOS, Linux, Apple TV, Android TV, Fire TV, and even your router."
        },
        {
            "image":connectAll,
            "heading":"Connect on 8 devices",
            "content":"One subscription lets you connect to ExpressVPN on up to eight devices at the same time. Enjoy protection for your entire household."
        },
        {
            "image":noLogs,
            "heading":"No-logs policy",
            "content":"ExpressVPN has a strict policy of not logging traffic and connection data, DNS queries, or anything that could be used to identify you."
        },
        {
            "image":privateDns,
            "heading":"Private DNS",
            "content":"ExpressVPN runs its own private, encrypted DNS on every server. Your DNS requests are handled by us, with no exposure to third parties."
        },
        {
            "image":adBlocker,
            "heading":"Block ads and trackers",
            "content":"Customize your online experience. Additional features included in the ExpressVPN app can block display ads, trackers, and adult sites."
        },
        {
            "image":genPassword,
            "heading":"Store your passwords",
            "content":"ExpressVPN Keys, our secure password manager, comes with every subscription, allowing you to use strong, unique logins. Built into our mobile apps."
        },
        {
            "image":audit,
            "heading":"Audited by experts",
            "content":"Along with our internal testing, we regularly commission independent auditors to examine our code and verify our security claims."
        }
    ]

    const tabeContent=["Unblock websites via server locations in 105 countries","No activity logs, no connection logs","Easy-to-use apps for all your devices","24/7 customer support","99.9% uptime","Ultra-fast VPN speeds","Strong 256-bit AES encryption","Unlimited bandwidth and server switches"]



    return(
        <div>
            <div className="downloadbody">
                <div>
                <Text color={{lg:"#065666",md:"#065666",base:"#1A365D"}} fontFamily="Philosopher" paddingTop={{md:"10%",base:"30%"}}  fontSize={{lg:"7xl",md:"6xl",base:"5xl"}}>
                   <span>Download a fast Windows VPN</span><br /> for PC or laptop
                </Text>
                <Text color={{lg:"#065666",md:"#065666",base:"#1A365D"}} fontFamily="Philosopher"  fontSize={{lg:"5xl",md:"3xl",base:"2xl"}}>
                    Market leader in VPN
                </Text>
                <Button fontFamily="Philosopher" marginTop="5%" size="lg" variant="solid" borderRadius="50px" paddingX="5%" paddingY="3%" color="white" _hover={{bg:"#276749"}} fontSize="30px" bg='#38A169' onClick={()=>{
                    navigate("/Billpage")
                }}>Get ExpressVPN</Button>
                </div>
            </div>
            <Box my="7%" display="flex" flexDirection={{lg:"row",base:"column"}} justifyContent="center" alignItems="center">
                <Box mr="4%">
                <iframe className='rounded-video' src="https://www.youtube.com/embed/Tb-iJEIm_6w" title="ExpressVPN: A VPN for all your devices" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Box>
                <Box textAlign="left">
                    <Heading fontFamily="Philosopher" size="2xl">Download latest VPN app versions</Heading>
                    <Container fontFamily="PT Sans" fontSize={{lg:"20px",md:"18px",base:"16px"}}>
                        Get the best VPN app for Windows, Mac, iPhone, Android, and more. Protect yourself on every device—you can even download the ExpressVPN extension for Chrome.
                        <UnorderedList cursor="pointer" textAlign="left">
                                {
                                    links.map(el=>(
                                        <ListItem color="#48BB78"><a onClick={()=>{
                                            toast({
                                                title: `${el.name} clicked!!! Please refer to the original website for the proper download link`,
                                                position: "top",
                                                variant:"solid",
                                                isClosable: true,
                                              })
                                        }}>{el.name}</a>
                                        </ListItem>
                                    ))
                                }
                        </UnorderedList>
                    </Container>
                </Box>
            </Box>
            <div className='whatvpn'>
                <Heading fontFamily="Philosopher"  color="black" as="h2" py="2%" size="2xl">How to download a VPN in 3 steps</Heading>
                <SimpleGrid marginBottom={{lg:"2%",md:"30%",base:"20%"}} fontFamily="Philosopher" rowGap={{md:"5%",base:"2%"}} columns={{lg:3,md:2,base:1}} marginLeft={{lg:"2%",base:0}} spacing='15px'>
                {steps.map((el,i)=>(
                    <>
                        
                        <ReasonCard {...el} />
                    </>
                    
                ))}
                </SimpleGrid>
                <Button fontFamily="Philosopher" marginTop="5%" size="lg" variant="solid" borderRadius="50px" paddingX="5%" paddingY="3%" color="white" _hover={{bg:"#276749"}} fontSize="30px" bg='#38A169' onClick={()=>{
                    navigate("/Billpage")
                }}>Get ExpressVPN</Button>
            </div>
            <Box my="7%" display="flex" flexDirection={{lg:"row",base:"column"}} justifyContent="center" alignItems="center">
                <Box mr="4%">
                    <Image objectFit="contain" src={vpnHero} boxSize={{lg:"lg",md:"md",sm:"sm"}} />
                </Box>
                <Box textAlign="left">
                    <Heading fontFamily="Philosopher" size="2xl">What is a VPN and how does it work?</Heading>
                    <Container fontFamily="PT Sans" fontSize={{lg:"20px",md:"18px",base:"16px"}}>
                        A VPN, virtual private network, is a secure tunnel between you and the internet. When you connect to a VPN app, your traffic is sent through an encrypted tunnel that shields it from your internet service provider, governments, and potential hackers.

                        When you use a VPN to connect to the internet, the VPN app on your device (also known as a VPN client) establishes a secure connection with a VPN server. If privacy and security are important to you, keep a VPN running in the background every time you go online.
                    </Container>
                </Box>
            </Box>
            <Box my="7%" display="flex" flexDirection={{lg:"row-reverse",base:"column"}} justifyContent="center" alignItems="center">
                <Box mr="4%">
                    <Image objectFit="contain" src={encryption} boxSize={{lg:"lg",md:"md",sm:"sm"}} />
                </Box>
                <Box textAlign="left">
                    <Heading fontFamily="Philosopher" size="2xl">What is a VPN and how does it work?</Heading>
                    <Container fontFamily="PT Sans" fontSize={{lg:"20px",md:"18px",base:"16px"}}>
                        A VPN, virtual private network, is a secure tunnel between you and the internet. When you connect to a VPN app, your traffic is sent through an encrypted tunnel that shields it from your internet service provider, governments, and potential hackers.

                        When you use a VPN to connect to the internet, the VPN app on your device (also known as a VPN client) establishes a secure connection with a VPN server. If privacy and security are important to you, keep a VPN running in the background every time you go online.
                    </Container>
                </Box>
            </Box>
            <SimpleGrid columns={{lg:3,md:2,base:1}} fontFamily="Philosopher" marginLeft="5%" >
            {feature.map(el=>(
            <FeatureCard {...el} />
            ))}
            </SimpleGrid> 
            <Box my="7%" display="flex" flexDirection={{lg:"row-reverse",base:"column"}} justifyContent="center" alignItems="center">
                <Box mr="4%">
                    <Image objectFit="contain" src={womenLaptop} boxSize={{lg:"lg",md:"md",sm:"sm"}} height={{lg:"500px",base:"400px"}} />
                </Box>
                <Box textAlign="left">
                    <Heading fontFamily="Philosopher" size="2xl">Avoid the risks of free VPN apps</Heading>
                    <Container fontFamily="PT Sans" fontSize={{lg:"20px",md:"18px",base:"16px"}}>
                    There are many VPN choices out there, including some that you can use for free. So why do people pay for VPNs? It’s about superior speed, security, and quality of service. Paid VPN companies invest in their product to offer a better experience for you. Free VPNs could simply not work when you want them to.

It’s also worth considering how free providers can afford to offer their service at no charge. A free VPN provider could be using your internet traffic to make money. Their methods could include injecting ads into your browser, logging your browsing history to sell, and recording your personal information.

ExpressVPN is a privacy company that takes measures to ensure your internet activity is encrypted, hidden from third parties, and not recorded by us.
                    </Container>
                </Box>
            </Box>
            <Heading fontFamily="Philosopher" size="2xl">Free VPN vs. paid VPN: Comparison</Heading>
            <TableContainer alignItem="center" marginLeft={{lg:"25%",base:0}} width={{lg:"50%",base:"100%"}}>
                <Table variant='simple'>
                    <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>Most Free VPNS</Th>
                        <Th>EXPRESSVPN</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                        {
                            tabeContent.map(el=>(
                                <Tr _hover={{bg:tabColor}} transition="0.1s">
                                    <Td fontFamily="PT Sans">{el}</Td>
                                    <Td textAlign="center"><FontAwesomeIcon size="xl" icon={faXmark} style={{color: "#fd2b2b",}} /></Td>
                                    <Td textAlign="center"><FontAwesomeIcon size="xl" icon={faCheck} style={{color: "#30fe06",}} /></Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>          
        </div>
    )
}   