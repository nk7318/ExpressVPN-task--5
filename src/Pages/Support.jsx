import { Text,Center,Heading,Image,SimpleGrid,Button, Container, Box,useToast } from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom';
import { ReasonCard } from '../Components/ReasonCard';
import "./styles.css"

import setUp from "../Resources/icons/support/setup-expressvpn.avif"
import troubleShoot from "../Resources/icons/support/troubleshooting-issues.avif"
import manageAccount from "../Resources/icons/support/manage-account.avif"
import aboutUs from "../Resources/icons/support/knowledgehub.avif"

import supportImg from "../Resources/icons/support/support.avif"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const Support = () => {

  const toast=useToast();

  const navigate=useNavigate();


  const support=[
    {
      "image":setUp,
      "heading":"SET UP EXPRESSVPN",
      "content":"Instructions for setting up and using our products on desktop,mobile and other devices"
    },
    {
      "image":troubleShoot,
      "heading":"TROUBLESHOOT ISSUES",
      "content":"Find solutions to issues that you encounter when using ExpressVPN products"
    },
    {
      "image":manageAccount,
      "heading":"MANAGE YOUR ACCOUNT",
      "content":"Instructions for updating your personal info, billing details, and account preferences"
    },
    {
      "image":aboutUs,
      "heading":"Learn about us",
      "content":"Discover our products, tips on how to use them, and where to find the latest versions"
    }
  ]
  
  const articles=["Find your ExpressVPN activation code","Frequently Asked Questions","Cancel your ExpressVPN subscription","How many devices can I connect simultaneously","Update the ExpressVPN app","Windows 11 and above(set up)","What's new in ExpressVPN latest app version's","Amazon Fire TV and Fire Stick setup","Disable proxy settings in Chrome","Renew your ExpressVPN account"]

  return (
    <div>
      <div className="supportbody">
        <div>
          <Text color="#1A365D" fontFamily="Philosopher" paddingTop={{md:"10%",base:"30%"}}  fontSize={{lg:"7xl",md:"6xl",base:"5xl"}}>
          ExpressVPN Support
          </Text>
          <Button fontFamily="Philosopher" marginTop="5%" size="lg" variant="solid" borderRadius="50px" paddingX="5%" paddingY="3%" color="white" _hover={{bg:"#276749"}} fontSize="30px" bg='#38A169' onClick={()=>{
            navigate("/Billpage")
          }}>Get ExpressVPN</Button>
        </div>

        <div className='cardLayout'>
          <SimpleGrid mt="5%" marginBottom={{lg:"2%",md:"30%",base:"20%"}} fontFamily="Philosopher" rowGap={{md:"5%",base:"2%"}} columns={{lg:3,md:2,base:1}} marginLeft={{lg:"2%",base:0}} spacing='15px'>
            {support.map(el=>(
              <ReasonCard {...el} />
            ))}
          </SimpleGrid>
        </div>
        
      </div>
      <Heading fontFamily="Philosopher" size="2xl" my="5%">Popular articles</Heading>
      <Center>
      <SimpleGrid alignItems="center" pb="3%" marginBottom={{lg:"2%",md:"30%",base:"40%"}} fontFamily="Philosopher" rowGap={{md:"5%",base:"2%"}} columns={{md:2,base:1}} spacing='20px' >
        {
            articles.map(el=>(
                <Box className="deviceAnimation" display="flex" textAlign="center">
                    <Text borderBottom="1px solid black" fontSize="20px" fontFamily="PT Sans"><a onClick={()=>{
                      toast({
                        title: `${el} clicked!!! Please refer to the original website for further information `,
                        position: "top",
                        variant:"solid",
                        isClosable: true,
                      })
                    }}>{el}</a></Text>
                    <FontAwesomeIcon icon={faChevronRight} size="xl" />    
                </Box>
                
            ))
        }
        </SimpleGrid>
      </Center>
      <Box display="flex" flexDirection={{lg:"row",base:"column"}}>
        <Image src={supportImg} objectFit="contain"  boxSize="lg" ml={{lg:"4%",md:"13%",base:0}} />
        <Container textAlign="left">
          <Heading fontFamily="Philosopher" size="2xl" my="5%">Get 24/7 live support</Heading>
          <Text>Can’t find what you are looking for? Ask your questions via live chat and get dedicated help.</Text>
          <Button fontFamily="Philosopher" marginTop="5%" size="lg" variant="solid" borderRadius="50px" paddingX="5%" paddingY="3%" color="white" _hover={{bg:"#276749"}} fontSize="30px" bg='#38A169' onClick={()=>{
            toast({
              title: `Feature currently not available!!! Please refer to the original website for further information `,
              position: "top",
              status:"error",
              variant:"solid",
              isClosable: true,
            })
          }}>Chat With Us</Button>
          <Button fontFamily="Philosopher" marginTop="5%" size="lg" variant="outline" borderRadius="50px" paddingX="5%" ml={{lg:"6%",md:"4%",base:0}} paddingY="3%" color="white" _hover={{bg:"#276749"}} fontSize="30px" colorScheme="#48BB78" onClick={()=>{
            toast({
              title: `Feature currently not available!!! Please refer to the original website for further information `,
              position: "top",
              status:"error",
              variant:"solid",
              isClosable: true,
            })
          }}>Email us</Button>
          <Text>By contacting us, you agree to our Terms of Service and Privacy Policy, and that your messages will be collected and analyzed by our service partner to provide and improve our service.</Text>
        </Container>
      </Box>
    </div>
  );
};
