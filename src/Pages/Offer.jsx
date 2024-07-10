import { Text,SimpleGrid,Box,Card,CardBody,Stack,
    Container,Image,Button,Heading,useToast
} from "@chakra-ui/react"


import { useNavigate } from "react-router-dom";
import { ReasonCard } from "../Components/ReasonCard";
import { FeatureCard } from "../Components/FeatureCard";

import "./styles.css"

import passwordManager from "../Resources/icons/offerpage/what-is-a-password-manager-310w-44e4ae9d11ee51e3dc0b9a4a8b27f73f.avif"
import advProtectionThreat from "../Resources/icons/offerpage/advance-protection-threat-manager-2176e0ba4ad944b8375b2aa8db79324e.avif"
import adBlocker from "../Resources/icons/offerpage/advance-protection-ad-blocker-3acfaef914ca6b12fdcb541efd2cdd81.avif"
import beAnywhere from "../Resources/icons/homepage/be-anywhere.avif"
import blazingSpeed from "../Resources/icons/homepage/blazing-fast-speeds.avif"
import support from "../Resources/icons/homepage/24-7-support.avif"
import everyPlatform from "../Resources/icons/homepage/every-platform__1_.avif"
import connectMult from "../Resources/icons/homepage/connect-5-locations-at-once_blue_.avif"
import vpnSplit from "../Resources/icons/offerpage/feature_split-tunneling_3x-6ba769747e32b518a79959cf87e02623.avif"
import vpnRouter from "../Resources/icons/offerpage/aircove-lifestyle-shot-ecef9b689b5d16d03b616c3bf6da2e51.avif"
import vpnSoftwareHero from "../Resources/icons/offerpage/vpn-software-hero_V3__center__-f886a80b077a7af803ab2cfdf7dca38d.avif"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows ,faApple, faAndroid, faAppStoreIos, faLinux, faChrome, faFirefox, faEdge, faAmazon, faPlaystation, faXbox } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faGamepad, faTv, faWifi } from "@fortawesome/free-solid-svg-icons";


export const Offer=()=>{

    const toast=useToast();

    const navigate=useNavigate();

    const reason=[
        {
            "image":passwordManager,
            "heading":"Password Manager",
            "content":"ExpressVPN Keys lets you store your logins and access them just by remembering one primary password. "
        },
        {
            "image":advProtectionThreat,
            "heading":"Tracker Blocker",
            "content":"Enable Threat Manager to stop your device from communicating with known malicious sites and trackers. "
        },
        {
            "image":adBlocker,
            "heading":"Ad Blocker",
            "content":"Display ads are annoying and slow down your browsing. Block them with one tap in your app. "
        }
    ]

    const offers=[
        {
            "heading":"Trusted Server Technology",
            "content":"Our innovative approach to running VPN servers ensures no data is ever written to a hard drive, keeping you secure."
        },
        {
            "heading":"Network kill Switch",
            "content":"Network Lock keeps your data safe if your VPN connection drops, blocking all online traffic until protection is restored."
        },
        {
            "heading":"Private DNS",
            "content":"ExpressVPN runs its own private, encrypted DNS on every server, making your connections both safer and faster."
        },
        {
            "heading":"Best-in-class Encryption",
            "content":"Your data is protected by advanced mathematics in AES-256, the standard trusted by security experts worldwide."
        },
        {
            "heading":"No activity or logs",
            "content":"ExpressVPN does not and will never log traffic data, DNS queries, or anything that could be used to identify you."
        },
        {
            "heading":"Lightway Protocol",
            "content":"Our pioneering VPN protocol, Lightway is engineered for a faster, more secure, and more reliable VPN experience."
        }
    ]

    const feature1=[
        {
            "image":beAnywhere,
            "heading":"Servers in 105 countries",
            "content":"Appear to be anywhere in the world with our global fleet of VPN servers."
        },
        {
            "image":support,
            "heading":"24-hour live chat support",
            "content":"Real humans are available 24/7 to help you with setup and troubleshooting."
        },
        {
            "image":blazingSpeed,
            "heading":"Lightning-fast speeds",
            "content":"Enjoy superior speeds anywhere. Find out why we’re named ExpressVPN."
        },
        {
            "image":everyPlatform,
            "heading":"Works on every platform",
            "content":"ExpressVPN has apps for iOS, Android, Mac, Windows, Linux, routers, and more."
        },
        {
            "image":connectMult,
            "heading":"Use on up to 8 devices",
            "content":"Install ExpressVPN on all your devices, and connect up to eight at once."
        },
        {
            "image":vpnSplit,
            "heading":"VPN split tunneling",
            "content":"Route some traffic through a VPN while the rest accesses the internet directly."
        }
    ]

    const devices=[
        {
            "icon":faWindows,
            "content":"Windows"
        },
        {
            "icon":faApple,
            "content":"MAC"
        },
        {
            "icon":faAndroid,
            "content":"Android"
        },
        {
            "icon":faAppStoreIos,
            "content":"ios"
        },
        {
            "icon":faLinux,
            "content":"Linux"
        },
        {
            "icon":faChrome,
            "content":"Chrome"
        },
        {
            "icon":faFirefox,
            "content":"Firefox"
        },
        {
            "icon":faEdge,
            "content":"Microsoft Edge"
        },
        {
            "icon":faTv,
            "content":"Smart TVs"
        },
        {
            "icon":faAmazon,
            "content":"Fire Stick"
        },
        {
            "icon":faAndroid,
            "content":"Android TV"
        },
        {
            "icon":faApple,
            "content":"Apple TV"
        },
        {
            "icon":faGamepad,
            "content":"game consoles"
        },
        {
            "icon":faPlaystation,
            "content":"play station"
        },
        {
            "icon":faXbox,
            "content":"Xbox"
        },
        {
            "icon":faWifi,
            "content":"router"
        }
    ]
   

    return(
        <div>
            <div className="offerbody">
                <div>
                    <Text color="white" fontFamily="Philosopher" paddingTop={{md:"10%",base:"30%"}}  fontSize={{lg:"7xl",md:"6xl",base:"5xl"}}>
                        ExpressVPN Features
                    </Text>
                    <Text color="white" fontFamily="Philosopher"  fontSize={{lg:"xl",md:"lg",base:"md"}}>
                        Every ExpressVPN subscription comes jam-packed with privacy and security features to give you a safer, more enjoyable online experience.
                    </Text>
                    <Button fontFamily="Philosopher" marginTop="5%" marginBottom="7%" size="lg" variant="solid" borderRadius="50px" paddingX="5%" paddingY="3%" color="white" _hover={{bg:"#276749"}} fontSize="30px" bg='#38A169' onClick={()=>{
                        navigate("/Billpage")
                    }}>Get ExpressVPN</Button>
                </div>
                <Box my="5%">
                    <Heading fontFamily="Philosopher" size="2xl">One app, Many protections</Heading>
                    <Container fontFamily="PT Sans" fontSize={{lg:"23px",md:"20px",base:"18px"}}>ExpressVPN is a VPN app, but we’ve included other features (covered in every subscription) to give you a well-rounded security package.</Container>
                </Box>

                <div className="cardLayout">
                    <SimpleGrid marginBottom={{lg:"2%",md:"30%",base:"20%"}} fontFamily="Philosopher" rowGap={{md:"5%",base:"2%"}} columns={{lg:3,md:2,base:1}}  marginLeft={{lg:"2%",base:0}}  spacing='15px'>
                        {reason.map(el=>(
                            <ReasonCard {...el} />
                        ))}
                    </SimpleGrid>
                </div>
            </div>
            
            <div className='whatvpn'>
                <Heading pt="10%" fontFamily="Philosopher"  color="black" as="h2" size="2xl">Best VPN technology for your privacy</Heading>
                <Image src={vpnSoftwareHero} />
                <Text my="2%" fontSize="20px" fontFamily="PT Sans">ExpressVPN is first and foremost a privacy company. We have meticulously designed our VPN <br /> to protect your data from third parties like your internet service provider and hackers.</Text>
                <SimpleGrid pb="3%" marginBottom={{lg:"2%",md:"30%",base:"20%"}} fontFamily="Philosopher" rowGap={{md:"5%",base:"2%"}} columns={{md:2,base:1}} spacing='15px' >
                    {
                        offers.map(el=>(
                            <Box className="offerAnimation">
                                <Heading size='xl' fontFamily="Philosopher">{el.heading}</Heading>
                                <Container fontSize="20px" fontFamily="PT Sans">{el.content}</Container>
                            </Box>
                        ))
                    }
                </SimpleGrid>
            </div>
            <SimpleGrid my="7%" columns={{lg:3,md:2,base:1}} fontFamily="Philosopher" marginLeft="5%" >
            {feature1.map(el=>(
            <FeatureCard {...el} />
            ))}
            </SimpleGrid>
            <div className='whatvpn'>
                <Heading pt="10%" fontFamily="Philosopher"  color="black" as="h2" size="2xl">A VPN for all your services</Heading>
                <Text my="2%" fontSize="20px" fontFamily="PT Sans">A single ExpressVPN subscription lets you download a VPN for <br /> every popular platform. Need a VPN for multiple devices? <br /> Set up ExpressVPN on everything you own, and use it on eight at the same time.</Text>
                <SimpleGrid pb="3%" marginBottom={{lg:"2%",md:"30%",base:"40%"}} fontFamily="Philosopher" rowGap={{md:"5%",base:"2%"}} columns={{md:2,base:1}} spacing='70px' >
                    {
                        devices.map(el=>(
                            <Box className="deviceAnimation" display="flex">
                                <FontAwesomeIcon icon={el.icon} size="2xl" />
                                <Text pl="10px" borderBottom="1px solid black" fontSize="20px" fontFamily="PT Sans" onClick={()=>{
                                    toast({
                                        title: `Download for ${el.content} clicked!!! Please refer to the original website for further information `,
                                        position: "top",
                                        variant:"solid",
                                        isClosable: true,
                                      })
                                }} >VPN for {el.content}</Text>
                                <FontAwesomeIcon icon={faChevronRight} size="xl" />    
                            </Box>
                        ))
                    }
                </SimpleGrid>
                <Button fontFamily="Philosopher" fontSize="22px" marginTop="5%" marginBottom="7%" size="lg" variant="solid" borderRadius="50px" paddingX="5%" paddingY="3%" color="white" _hover={{bg:"#276749"}} bg='#38A169' onClick={()=>{
                    navigate("/Billpage")
                }}>Get ExpressVPN</Button>
            </div>
            <Card
            mr={{md:"10%",base:0}}
            
            fontFamily="Philosopher"
            display="flex"
            flexDirection={{ base: 'column', md: 'row-reverse' }}
            variant='hidden'
            mt="5%"
            >
            <Image
                ml={{base:"9%",md:0}}
              boxSize={{base:"270px",md:"sm"}}
              src={vpnRouter}
              alt={vpnRouter}
            />
          
            <Stack>
              <CardBody textAlign="left">
                <Heading fontFamily="Philosopher" size={{lg:'2xl',md:'xl',base:'lg'}}>Use ExpressVPN on your router</Heading>
          
                <Container fontFamily="PT Sans" fontSize={{md:"23px",base:"20px"}} marginTop="4%" >
                Included with every subscription is ExpressVPN software that you can install on your Wi-Fi router. All your devices connected to your router will enjoy full VPN benefits, including location changes. Learn more and check your router’s compatibility.
Alternatively, get an ExpressVPN Aircove, a powerful Wi-Fi 6 router with built-in VPN protection. No VPN installation required; get set up in five minutes. It includes features to block malicious trackers, displays ads, and explicit content. Traveling? Our Aircove Go portable router adds VPN encryption to any public Wi-Fi connection. (Note that you need an ExpressVPN subscription to use Aircove’s VPN functionality.)
                </Container>
              </CardBody>
            </Stack>
          </Card>
        </div>
    )
}