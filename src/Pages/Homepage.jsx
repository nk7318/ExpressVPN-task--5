import { Text,Card,CardBody,Heading,Image,Stack,SimpleGrid,Center,Avatar,Button, Grid, Container, Box} from '@chakra-ui/react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { FeatureCard } from '../Components/FeatureCard'
import { ReasonCard } from '../Components/ReasonCard';
import "./styles.css";


import powerOn from "../Resources/icons/homepage/power_on.avif"
import powerOff from "../Resources/icons/homepage/power_off.avif"
import vpnBgOn from "../Resources/icons/homepage/vpn-bg-on.avif"


import germanUsUk from "../Resources/icons/homepage/German-germany-us-uk-4c3a2d34bc1365b848f8de758f145c51.svg"
import unexposed from "../Resources/icons/homepage/unexposed-internet-lamp-opt-3a171e98ef364e47b22d0b90ef259478.avif"
import extendCoverage from "../Resources/icons/homepage/extend-your-coverage-with-a-vpn-d83bf26253974e69bdbeeed208d912ac.avif"

import changeYourLocation from "../Resources/icons/homepage/Change_your_location-19581a6ef9c7290333423ed0ee97e3d4.avif"
import encryption from "../Resources/icons/homepage/encryption-2fc801604da35f1879fc2f4d5da4443b.avif"
import vpnRouter from "../Resources/icons/homepage/vpn-router-connect-more-devices-1ce009403a96a923bbf96979cdfa78c7.avif"



import seriousSec from "../Resources/icons/homepage/serious-security.avif"
import beAnywhere from "../Resources/icons/homepage/be-anywhere.avif"
import blazingSpeed from "../Resources/icons/homepage/blazing-fast-speeds.avif"

import day30 from "../Resources/icons/homepage/30-days-risk-free-calendar-009c4a801dfedc86aef59ea90d9c2820.avif"
import whatVpn from "../Resources/icons/homepage/what-is-vpn-German-b9bf04cb39814a7bd30bc344c88d7d59.avif"
import whatVpnDis from "../Resources/icons/homepage/what-is-vpn-disconnected.avif"


import support from "../Resources/icons/homepage/24-7-support.avif"
import trustedServer from "../Resources/icons/homepage/trustedserver-technology.avif"
import everyPlatform from "../Resources/icons/homepage/every-platform__1_.avif"
import connectMult from "../Resources/icons/homepage/connect-5-locations-at-once_blue_.avif"
import noLogs from "../Resources/icons/homepage/no-logs.avif"
import worldPremium from "../Resources/icons/homepage/worlds--1-premium-vpn.avif"


import uk from "../Resources/icons/homepage/flags/uk.avif"
import japan from "../Resources/icons/homepage/flags/japan.avif"
import america from "../Resources/icons/homepage/flags/america.avif"
import australia from "../Resources/icons/homepage/flags/australia.avif"
import taiwan from "../Resources/icons/homepage/flags/taiwan.avif"
import canada from "../Resources/icons/homepage/flags/canada.avif"
import india from "../Resources/icons/homepage/flags/india.avif"
import france from "../Resources/icons/homepage/flags/france.avif"
import skorea from "../Resources/icons/homepage/flags/skorea.avif"
import turkey from "../Resources/icons/homepage/flags/turkey.avif"
import argentina from "../Resources/icons/homepage/flags/argentina.avif"
import italy from "../Resources/icons/homepage/flags/italy.avif"


import travelGlobe from "../Resources/icons/homepage/travel-globe-fdd6b0c4125636e5b2746fb1923f034e.avif"
import funVpn from "../Resources/icons/homepage/what-is-vpn-streaming-32683d4913c72a969698f36c5be17ae0.avif"
import publicWifi from "../Resources/icons/homepage/wifi-vpn-b9186af152171680050ec847e06b8dbd.avif"
import allDevices from "../Resources/icons/homepage/available-on-all-devices-round-628758f011caaaa25772388bc1dacedc.avif"
import fileSharing from "../Resources/icons/homepage/what-is-vpn-torrenting-round-baebef45de40c87a5aa713a7bc894f38.avif"
import vpnShopping from "../Resources/icons/homepage/what-is-vpn-shopping-round-1684b6c67397e626314c595a100e0bf7.avif"

import vpnCommercial from "../Resources/icons/homepage/what-is-vpn-commercial-0cfe9d19bf2ef003833167338074949a.avif"
import vpnCorporate from "../Resources/icons/homepage/what-is-vpn-corporate-de01c1c30b6e672cf07aebad9215903f.avif"
import vpnSetup from "../Resources/icons/homepage/what-is-vpn-self-setup-ed5d81dd4ab9d9b38dba7cb4159e6a5e.avif"
import { Billpage } from './Billpage';

export const Homepage = () => {

  const [image,setImage]=useState(whatVpnDis)
  const [avatar,setAvatar]=useState(powerOff)
  const [text,setText]=useState("Not Connected")

  const navigate=useNavigate()


  const carddet=[
    {
      "heading":"Secure access, worldwide",
      "image":germanUsUk,
      "content":"Connect reliably from anywhere to any location, including Germany, Switzerland and Turkey. With our network of high-speed servers in 105 countries, you are in complete control."
    },
    {
      "heading":"One click to more security",
      "image":unexposed,
      "content":"Going online doesn't have to mean revealing everything about yourself. Whether you're shopping online at your desk or connecting to public Wi-Fi at a coffee shop, protect your personal information and privacy with a VPN."
    },
    {
      "heading":"One VPN for all your devices",
      "image":extendCoverage,
      "content":"Smartphone, tablet, computer, router – regardless of your location or your devices, you are well equipped with a single ExpressVPN subscription."
    }
  ]

  const carddet1=[
    {
      "image":changeYourLocation,
      "heading":"Change your location",
      "content":"Using a VPN changes your IP address, the unique number that identifies you and where you are in the world. A new IP address makes it harder to determine your identity and real location. With ExpressVPN, you can appear to be in the UK, U.S., Canada, Australia, or any of 105 countries."
    },
    {
      "image":encryption,
      "heading":"Protect your privacy",
      "content":"Changing your IP address with a VPN helps shield your identity from websites, apps, and services that want to track you. Good VPNs also prevent your internet provider, mobile carrier, and anyone else who may be listening from seeing your activity, thanks to a layer of strong encryption."
    },
    {
      "image":vpnRouter,
      "heading":"Increase your security",
      "content":"Using a VPN protects you from security breaches in many forms, including packet sniffing, rogue Wi-Fi networks, and man-in-the-middle attacks. Travelers, remote workers, and all kinds of on-the-go individuals use a VPN whenever they’re on an untrusted network like free public Wi-Fi."
    }
  ]

  const feature=[
    {
      "image":seriousSec,
      "heading":"Powerful data protection",
      "content":"Take control of your online privacy and security with world-class encryption."
    },
    {
      "image":beAnywhere,
      "heading":"Seamless operation – everywhere",
      "content":"Enjoy the Internet the way it was meant to be enjoyed and access a wide range of global content. At home or while traveling."
    },
    {
      "image":blazingSpeed,
      "heading":"Lightning-fast connection",
      "content":"Our VPN network with servers in Germany, Switzerland and Turkey is built for speed and uses next-generation technology."
    }
  ]

  const feature1=[
    {
      "image":beAnywhere,
      "heading":"Servers in 105 countries",
      "content":"Appear to be anywhere in the world with our global fleet of VPN servers."
    },
    {
      "image":seriousSec,
      "heading":"Best-in-class encryption",
      "content":"Your data is protected by AES-256, the standard trusted by security experts."
    },
    {
      "image":support,
      "heading":"24-hour live chat support",
      "content":"Real humans are available 24/7 to help you with setup and troubleshooting."
    },
    {
      "image":trustedServer,
      "heading":"TrustedServer technology",
      "content":"With our innovative server technology, no data is ever written to a hard drive."
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
      "image":noLogs,
      "heading":"No activity logs",
      "content":"ExpressVPN never keeps data that could tie you to any online activity."
    },
    {
      "image":worldPremium,
      "heading":"World’s #1 premium VPN",
      "content":"We’re crowned the Best VPN by CNET, PCWorld, The Verge, and more."
    }
  ]

  const flags=[
    {
      "image":india,
      "name":"India"
    },
    {
      "image":japan,
      "name":"Japan"
    },
    {
      "image":america,
      "name":"USA"
    },
    {
      "image":australia,
      "name":"Australia"
    },
    {
      "image":taiwan,
      "name":"Taiwan"
    },
    {
      "image":canada,
      "name":"Canada"
    },
    {
      "image":uk,
      "name":"United Kingdom"
    },
    {
      "image":france,
      "name":"France"
    },
    {
      "image":skorea,
      "name":"South Korea"
    },
    {
      "image":turkey,
      "name":"Turkey"
    },
    {
      "image":argentina,
      "name":"Argentina"
    },
    {
      "image":italy,
      "name":"Italy"
    }
  ]

  const reason=[
    {
      "image":travelGlobe,
      "heading":"While traveling",
      "content":"Exploring the world doesn’t mean you have to change the way you use the internet. A VPN lets you use the internet as if you were still in your home country, no matter how far you travel."
    },
    {
      "image":funVpn,
      "heading":"While having fun",
      "content":"A VPN lets you enjoy the sites and services you like without ISP throttling that could detract from your experience or outright blocking by your ISP or local Wi-Fi network."
    },
    {
      "image":publicWifi,
      "heading":"While on public Wi-Fi",
      "content":"Connecting to public Wi-Fi hotspots like those in cafes, airports, and parks could leave your private information vulnerable. Using a VPN on your devices keeps you safe with strong encryption."
    },
    {
      "image":allDevices,
      "heading":"While gaming",
      "content":"Using a VPN unlocks games, maps, skins, and other add-ons that might be restricted on your network. It also shields you from DDoS attacks and reduces ping and overall lag."
    },
    {
      "image":fileSharing,
      "heading":"While file-sharing",
      "content":"P2P file sharing usually means that strangers can see your IP address and possibly track your downloads. A VPN keeps your IP address private, letting you download with increased anonymity."
    },
    {
      "image":vpnShopping,
      "heading":"While shopping",
      "content":"Some online stores show different prices to people in different countries. With a VPN, you can find the best deals in the world no matter where you’re shopping from."
    }
  ]

  const reason1=[
    {
     "image":vpnCommercial,
     "heading":"Commercial VPN",
     "content":"A commercial VPN, also called a personal VPN or a consumer VPN, is a private service offered directly to individuals, usually for a fee.ExpressVPN is such a VPN service because it directly caters to the privacy needs of its customers." 
    },
    {
      "image":vpnCorporate,
      "heading":"Corporate VPN",
      "content":"A corporate VPN, also called a business VPN, allows an organization’s remote employees to connect securely to the internet as if they were physically present in the office.Unlike commercial VPNs, however, corporate VPNs are meant to protect the privacy of the company and not necessarily the individual."
    },
    {
      "image":vpnSetup,
      "heading":"Self-setup VPN",
      "content":"Some tech experts and DIY hobbyists choose to set up their own VPN using their own equipment.Self-setup VPNs, however, do not provide the protection of shared IP addresses, server locations in multiple countries, or many other features enjoyed by commercial VPN users."
    }
  ]


  return (

    <div>
      <div className="homebody">
        <div>
          <Text color="white" fontFamily="Philosopher" paddingTop={{md:"10%",base:"30%"}}  fontSize={{lg:"7xl",md:"6xl",base:"5xl"}}>
          The VPN that simply <br />Works.
          </Text>
          <Text color="white" fontFamily="Philosopher"  fontSize={{lg:"5xl",md:"3xl",base:"2xl"}}>
            Market leader in VPN
          </Text>
          <Button fontFamily="Philosopher" marginTop="5%" size="lg" variant="solid" borderRadius="50px" paddingX="5%" paddingY="3%" color="white" _hover={{bg:"#276749"}} onClick={()=>{
            navigate("/Billpage")
          }} fontSize="30px" bg='#38A169'>Get ExpressVPN</Button>
        </div>
      </div>
      <Grid display="flex" flexDirection="column" alignItems="center"  templateColumns='repeat(1, 4fr)' gap={2}>     
        {
          carddet.map((el,index)=>(
            <Card
            fontFamily="Philosopher"
            display="flex"
            flexDirection={{ base: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
            variant='hidden'
          >
            <Image
              ml="5%"
              boxSize={{base:"300px",md:"sm"}}
              src={el.image}
              alt={el.image}
            />
          
            <Stack marginTop="6%">
              <CardBody>
                <Heading fontFamily="Philosopher" size={{lg:'2xl',md:'xl',base:'lg'}}>{el.heading}</Heading>
          
                <Container fontFamily="PT Sans" fontSize={{md:"23px",base:"18px"}} marginTop="4%" py='2'>
                  {el.content}
                </Container>
              </CardBody>
            </Stack>
          </Card>      
          ))
        }
      </Grid>
      <Button fontFamily="Philosopher" fontSize="22px" marginTop="5%" marginBottom="7%" size="lg" variant="solid" borderRadius="50px" paddingX="5%" paddingY="3%" color="white" _hover={{bg:"#276749"}} bg='#38A169' onClick={()=>{
            navigate("/Billpage")
          }}>Use ExpressVPN</Button>
      <SimpleGrid  marginLeft="5%"  minChildWidth='200px' spacing='15px'>
        {feature.map(el=>(
          <FeatureCard {...el} />
        ))}
      </SimpleGrid>
      <Button fontFamily="Philosopher" fontSize="22px" marginTop="5%" marginBottom="10%" size="lg" variant="solid" borderRadius="50px" paddingX="5%" paddingY="3%" color="white" _hover={{bg:"#276749"}} bg='#38A169' onClick={()=>{
            navigate("/Offer")
          }}>See More Benefits</Button>      
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='hidden'
          justifyContent='center'
        >
          <Image
            objectFit="contain"
            maxW={{ base: '100%', sm: '200px' }}
            src={day30}
            alt='day30'
          />

          <Stack>
            <CardBody>
              <Heading fontFamily="Philosopher" size='2xl'>The ExpressVPN Guarantee</Heading>

              <Container fontFamily="PT Sans" fontSize={{md:"23px",base:"18px"}} py='2'>
              Try ExpressVPN with zero commitment! If you’re not satisfied within the first 30 days, you’ll get your money back. All of it.
              </Container>
            </CardBody>
          </Stack>
        </Card>
        <div id="whatvpn" className='whatvpn'>
          <Heading fontFamily="Philosopher"  color="black" as="h2" size="2xl">What is VPN?</Heading>
          
          <Box paddingY="5%">
            <iframe className="rounded-video" width={{lg:"510",base:"300"}} height="230"   src="https://www.youtube.com/embed/X-z07FSlji4?si=OyiQBtskgp4ASlA4" title="What is Express VPN" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Box>
          <Box mt="5%" display="flex" flexDirection={{base:'column',md:'row-reverse'}} >
            <Image 
          
            boxSize="sm" 
            src={whatVpn} alt={whatVpn} />   
              <Box
                mt='1'
                lineHeight='tight'
              >
                <Container fontFamily="PT Sans" fontSize={{md:"23px",base:"18px"}}>
                A VPN, or virtual private network, is a secure tunnel between your device and the internet. VPNs protect you from snooping, interference, and censorship.
                As you connect to a secure VPN server, your internet traffic goes through an encrypted tunnel that nobody can see into—including hackers, governments, and your internet service provider.
                </Container>
                <Button fontFamily="Philosopher" fontSize="22px" marginTop="15%" size="lg" variant="solid" borderRadius="50px" paddingX="5%" paddingY="3%" color="white" _hover={{bg:"#276749"}} bg='#38A169' onClick={()=>{
                navigate("/Billpage")
              }}>Try ExpressVPN Risk-Free</Button>
              </Box>
          </Box>
        </div>
        <Center mt="5%">
          <Heading fontFamily="Philosopher" size="2xl">Why ExpressVPN?</Heading>
        </Center>
        <SimpleGrid columns={{lg:3,md:2,base:1}} fontFamily="Philosopher" marginLeft="5%" >
        {feature1.map(el=>(
          <FeatureCard {...el} />
        ))}
        </SimpleGrid>       
        <div className='map'>
          <Heading fontFamily="Philosopher" fontSize="2xl">Ultra-fast servers around the globe</Heading>
          <SimpleGrid marginY="5%" marginBottom={{base:"40%",md:"5%"}} columns={{base:3,md:6}} rowGap="10%" fontFamily="Philosopher"  >
          
          {flags.map(el=>(
            
            <Box display="flex" flexDirection="column" alignItems='center'>
              <Image
                
                borderRadius="20px"
                width={{lg:'190px',md:'80px',sm:'20px'}}
                height={{lg:'90px',md:'30px',sm:'10px'}}
                objectFit='cover'
                src={el.image}
                alt={el.image}
              />
              <Text fontSize={{md:"20px",base:"16px"}} fontFamily="PT Sans">{el.name}</Text>
            </Box>
          ))}         
          </SimpleGrid>
          <Button fontFamily="Philosopher" fontSize="23px" marginTop="5%" size="lg" variant="solid" borderRadius="50px" paddingX="5%" paddingY="3%" color="white" _hover={{bg:"#276749"}} bg='#38A169'>See all 105 Countries</Button>
        </div>
        <Grid fontFamily="Philosopher" display="flex" flexDirection="column" alignItems="center"  templateColumns='repeat(1, 4fr)' gap={2}>     
        {
          carddet1.map((el,index)=>(
            <Card
            mt="2%"
            display="flex"
            flexDirection={{ base: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
            overflow='hidden'
            variant='hidden'
            >
              <Image
                boxSize="sm"
                src={el.image}
                alt={el.image}
              />
            
              <Stack>
                <CardBody>
                  <Heading fontFamily="Philosopher" size={{lg:'2xl',md:'xl',base:'lg'}}>{el.heading}</Heading>
            
                  <Container fontFamily="PT Sans" fontSize={{md:"23px",base:"18px"}} marginTop="10%" py='2'>
                    {el.content}
                  </Container>
                </CardBody>
              </Stack>
            </Card>      
            ))
          }
        </Grid>
        <Button fontFamily="Philosopher" fontSize="23px" marginTop="5%" size="lg" variant="solid" borderRadius="50px" paddingX="5%" paddingY="3%" color="white" _hover={{bg:"#276749"}} bg='#38A169' onClick={()=>{
            navigate("/Billpage")
          }}>Try ExpressVPN Risk-Free</Button>
        <div>
        <Box marginY="5%">
          <Heading fontFamily="Philosopher" size="2xl" marginBottom="4%">When should I use a VPN?</Heading>
          <Container fontFamily="PT Sans" fontSize={{md:"23px",base:"18px"}}>
          If privacy is important to you, you should use a VPN every time you connect to the internet. A VPN app runs in the background of your device so it won’t get in the way while you use other apps and browse the internet. And you’ll have peace of mind knowing your privacy is always protected.
          But here are some situations in which a VPN is especially useful:
          </Container>
        </Box>

        <div className='cardLayout'>
          <SimpleGrid alignItems="center" marginBottom={{lg:"2%",md:"30%",base:"100%"}} fontFamily="Philosopher" rowGap={{md:"5%",base:"2%"}} columns={{lg:3,md:2,base:1}} marginLeft={{lg:"2%",base:0}} spacing='15px'>
            {reason.map(el=>(
              <ReasonCard {...el} />
            ))}
          </SimpleGrid>
        </div>
        
      </div>
        

        <div className='working'>
          <Box textAlign="left" fontFamily="PT Sans" fontSize={{md:"20px",base:"18px"}} mb="2%">
            <Heading fontFamily="Philosopher" size="2xl">How does a VPN work?</Heading>
            <p>To understand how a VPN works, it helps to first understand how your internet connection works without one.</p>
          </Box>
          <Box textAlign="left" fontFamily="PT Sans" fontSize={{md:"20px",base:"18px"}} mb="2%">
            <Heading fontFamily="Philosopher" size="2xl">Without a VPN</Heading>
            <p>When you access a website without a VPN, you are being connected to that site through  <br /> internet service provider, or ISP. The ISP assigns you a unique IP address that can be used to identify you to <br /> the website.  Because your ISP is handling and directing all your traffic, it can see which websites you visit. <br /> And your activity can be linked to you by that unique IP address.</p>
          </Box>
          <Box textAlign="left" fontFamily="PT Sans" fontSize={{md:"20px",base:"18px"}} mb="2%">
            <Heading fontFamily="Philosopher" size="2xl">With a VPN</Heading>
            <p>When you connect to the internet with a VPN, the VPN app on your device (also called a VPN client) <br /> establishes a secure connection with a VPN server. Your traffic still passes through your ISP, but <br /> your ISP can no longer read it or see its final destination. The websites you visit can no longer <br /> see your original IP address, only the IP address of the VPN server, which is shared by many other users and <br /> changes regularly.</p>
          </Box>
          <Box display="flex" flexDirection={{base:"column",md:"row"}} className='HomepageAnimation'>
            <Box  className='card'>
              <Image
              borderRadius="20px"
              src={vpnBgOn}
              marginBottom="4%"
               />Click Below
              <Avatar
                size={{md:"xl",base:"md"}}
                src={avatar}
                
                onClick={()=>{
                  setAvatar(pImage=>pImage===powerOff?powerOn:powerOff)
                  setImage(prevImage=>prevImage===whatVpnDis?whatVpn:whatVpnDis)  
                  setText(pText=>pText==="Not Connected"?"Connected":"Not Connected")
              }} />
              <Text fontFamily="PT Sans" fontSize="20px">{text}</Text>
            </Box>
            <Image
            boxSize={{md:"lg",base:"sm"}}
            src={image}
            alt={image}
            />
          </Box>
          <Box  textAlign="left" fontFamily="PT Sans" fontSize={{md:"20px",base:"18px"}} mb="2%">
            <Heading fontFamily="Philosopher" size="2xl">Proxying</Heading>
            <p>The VPN server acts like a proxy, or stand-in, for your web activity: Instead of your real <br /> IP address and location, websites you visit will only see the IP address and location of the VPN server. <br /> This makes you more anonymous on the internet.</p>
          </Box>
          <Box textAlign="left" fontFamily="PT Sans" fontSize={{md:"20px",base:"18px"}} mb="2%">
            <Heading fontFamily="Philosopher" size="2xl">Authentication</Heading>
            <p>Establishing a secure connection is a tricky problem solved  by clever <br /> mathematics in a process called authentication. <br /> Once authenticated,  the VPN client  and VPN server can  be sure they are talking to  each other and no <br /> one else.</p>
          </Box>
          <Box textAlign="left" fontFamily="PT Sans" fontSize={{md:"20px",base:"18px"}} mb="2%">
            <Heading fontFamily="Philosopher" size="2xl">Tunneling</Heading>
            <p>VPNs also protect the connection between client and server with tunneling and encryption. <br />Tunneling is a process by which each data packet is encapsulated inside another data packet. This <br /> makes it harder for third parties to read in transit.</p>
          </Box>
          <Box textAlign="left" fontFamily="PT Sans" fontSize={{md:"20px",base:"18px"}} mb="2%">
            <Heading fontFamily="Philosopher" size="2xl">Encryption</Heading>
            <p>Data inside the tunnel is also encrypted in such a way that  only the intended <br /> recipient can decrypt it. This keeps the contents of your internet traffic completely private. Even your <br /> internet service provider won’t see it.</p>
          </Box>
          <Button fontFamily="Philosopher" fontSize="23px" marginTop="5%" size="lg" variant="solid" borderRadius="50px" paddingX="5%" paddingY="3%" color="white" _hover={{bg:"#276749"}} bg='#38A169'>Try ExpressVPN Risk-Free</Button>
        </div>

        <div className='cardLayout'>
          <SimpleGrid marginTop="7%" marginBottom={{lg:"7%",md:"20%",base:"30%"}}  fontFamily="Philosopher" rowGap={{md:"5%",base:"2%"}} columns={{lg:3,md:2,base:1}}  marginLeft={{lg:"2%",base:0}}  spacing='15px'>
            {reason1.map(el=>(
              <ReasonCard {...el} />
            ))}
          </SimpleGrid>
        </div>
        
    </div>
  );
}