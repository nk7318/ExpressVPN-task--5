import { Text,Container,SimpleGrid,Heading, Box,Center } from "@chakra-ui/react";
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from "@fortawesome/free-solid-svg-icons";


export const Footer = () => {

  const footerContent=[
      {
        "heading":"Download VPN",
        "content":["Mac VPN","Windows PC VPN","iPhone VPN(ios)","Android VPN","Linux VPN","Router VPN","Apple TV VPN","Fire Stick VPN","Android TV VPN","VPN Chrome Extension"]
      },
      {
        "heading":"105 Countries",
        "content":["US VPN","UK VPN","Canada VPN","Australia VPN"]
      },
      {
        "heading":"About ExpressVPN",
        "content":["Trust Center","Rights Center","Security Attacks","ExpressVPN Reviews","Our Experts","Press","Careers"]
      },
      {
        "heading":"Support Center",
        "content":["VPN Setup Tutorials","FAQ","Contact Us","Buy VPN"]
      },
      {
        "heading":"Features",
        "content":["Risk-Free VPN Trial","Reality TV VPN","Plans and Pricing"]
      },
      {
        "heading":"Products",
        "content":["Keys Password Manager","Aircove Router"]
      },
      {
        "heading":"Tools",
        "content":["What is MY IP?","Password Generator"]
      },
      {
        "heading":"Programs",
        "content":["Affiliates","Influencers","Partners"]
      },
      {
        "heading":"Learn More",
        "content":["What is a VPN?","Top 5 VPN Uses","Blog"]
      }
    ]


    return (
      <footer>
        
        <SimpleGrid padding="5%"
        paddingTop="10%" paddingBottom={{base:"60%",md:"20%"}} bg="#010a1a" columns={[2,3,5]} columnGap="5%" rowGap="5%" >
          {
            footerContent.map(el=>(
              <Box color="white" textAlign="left">
                <Heading fontFamily="Philosopher" size="md">{el.heading}</Heading>
                {el.content.map(i=>(
                  <Text fontFamily="PT Sans" fontSize="16px"><a href="">{i}</a></Text>
                ))}
              </Box>
            ))
          }
        </SimpleGrid>
        
        <Text>©Ajit Kumar Mishra@{new Date().getFullYear()}</Text>
        <Text>***This website is a cloned copy of the original /* ExpressVPN Website */ designed and implemented for <b>Educational</b> purpose only.</Text>
        
      </footer>
    );
  };
  
