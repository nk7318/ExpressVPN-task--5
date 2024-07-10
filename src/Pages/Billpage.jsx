import { Text,Heading,Divider,Stack,SimpleGrid,Input,Badge, Box,InputGroup,InputLeftElement, useColorModeValue } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons';

import { useState } from 'react';
import "./styles.css"



export const Billpage=()=>{
    
    const color = useColorModeValue('black', 'white')


    const [clickedIndex, setClickedIndex] = useState(null);
    const [duration,setDuration]=useState("12 MONTHS");
    const [price,setPrice]=useState(8.32);
    const [recommended,setRecommended]=useState(true)

    const billCard=[
        {
            "duration":"1 MONTH",
            "price":12.95,
            "recommended":false
        },
        {
            "duration":"12 MONTHS",
            "init_price":12.95,
            "price":8.32,
            "saving":"Save 35%",
            "recommended":true
        },
        {
            "duration":"6 MONTHS",
            "price":9.99,
            "recommended":false
        }
    ]



    return(
        <div>
            <div>
                <Text fontFamily="Philosopher" paddingTop={{md:"10%",base:"20%"}}  fontSize={{lg:"7xl",md:"6xl",base:"5xl"}}>
                    Get ExpressVPN in 3 easy steps
                </Text>
            </div>
            <Box pt="10%" display="flex" flexDirection="column"  >
                <Box alignItems="center" display="flex" flexDirection="row" ml={{lg:"10%",md:"11%"}}>
                    <Badge borderRadius="20px" colorScheme='green'>Step 1</Badge>
                    <Heading textAlign="left" fontFamily="Philosopher" size={{lg:"xl",base:"lg"}}>Select a plan that works for you:</Heading>
                </Box>
                <div className='cardLayout'>
                <SimpleGrid
                marginTop="7%"
                marginBottom={{ lg: "7%", md: "20%", base: "30%" }}
                fontFamily="Philosopher"
                rowGap={{ md: "5%", base: "2%" }}
                columns={{ lg: 3, md: 2, base: 1 }}
                marginLeft={{ lg: "2%", base: 0 }}
                spacing="15px"
                >
                {billCard.map((el, index) => (
                    <Box
                    padding={0}
                    margin={0}
                    key={index}
                    border={clickedIndex === index ? "5px solid #00c900" : "none"}
                    onClick={() => {
                        setClickedIndex(index)
                        setDuration(el.duration)
                        setPrice(el.price)
                        setRecommended(el.recommended)
                    }}
                    cursor="pointer"
                    _hover={{border:"5px solid #00c900",cursor:"pointer"}}
                    fontFamily="PT Sans"
                    paddingX="100px" paddingY="50px"
                    className="billCard"
                    >   
                        <Box>
                        {el.recommended?  <Badge fontSize="18px" colorScheme='green'>Recommended</Badge>:null}
                            <Text fontWeight="bold" fontSize={{lg:"25px",md:"23px",base:"21px"}}>{el.duration}</Text>
                            
                        </Box>
                        <Text textDecoration="line-through" fontSize={{lg:"18px",md:"16px",base:"14px"}}>{el.init_price}</Text>
                        <Text fontSize={{lg:"50px",md:"40px",base:"30px"}}>${el.price}</Text>
                            per month
                        <Text fontSize={{lg:"23px",md:"21px",base:"19px"} }>{el.saving}</Text>
                        30-day money-back guarantee
                    </Box>
                ))}
                </SimpleGrid>
                </div>
            </Box>
            <Box display="flex" flexDirection="column"  ml={{lg:"10%",md:"11%"}} >
                <Box alignItems="center" display="flex" flexDirection="row">
                    <Badge borderRadius="20px" colorScheme='green'>Step 2</Badge>
                    <Heading textAlign="left" fontFamily="Philosopher" size={{lg:"xl",base:"lg"}}> Enter your email address:</Heading>
                </Box>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                    <EmailIcon color='gray.300' />
                    </InputLeftElement>
                    <Input width={{lg:"60%",base:"90%"}} type='email' variant="outline" border={"2px"} borderColor={color} placeholder='Your Email Address' />
                </InputGroup>
            </Box>
            <Box pb="5%" display="flex" flexDirection={{lg:"row",base:"column"}} alignItems="center">
                <Box my="5%" display="flex" flexDirection="column"  ml={{lg:"10%",base:0}} >
                    <Box alignItems="center" display="flex" flexDirection="row">
                        <Badge borderRadius="20px" colorScheme='green'>Step 3</Badge>
                        <Heading textAlign="left" fontFamily="Philosopher" size={{lg:"xl",base:"lg"}}>Select your preferred method of payment:</Heading>
                    </Box>
                    <Input width="90%" my="1%" border={"2px"} borderColor={color} variant="outline" placeholder='Credit Card' size='lg' />
                    <Input width="90%" my="1%" border={"2px"} borderColor={color} variant="outline" placeholder='PayPal' size='lg' />
                    <Input width="90%" my="1%" border={"2px"} borderColor={color} variant="outline" placeholder='Bitcoin' size='lg' />
                    <Input width="90%" my="1%" border={"2px"} borderColor={color} variant="outline" placeholder='Other' size='lg' />
                </Box>
                <Box pt={"3%"}>
                    <Box
                    width={{lg:"500px",md:"400px",base:"300px"}}
                    borderRadius="20px"
                    display="flex"
                    flexDirection="column"
                    textAlign="left"
                    fontFamily="PT Sans"
                    paddingX="30px" paddingY="10px"
                    className="finalBillCard"
                    >
                        <Box my="3%" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                            <Text fontWeight="bold" fontSize={{lg:"25px",md:"18px",base:"16px"}} >Order Summary</Text>
                            {recommended?  <Badge fontSize={{lg:"18px",base:"12px"}} colorScheme='green'>Recommended</Badge>:null}
                        </Box>
                        <Box my="3%" display="flex" flexDirection="row" justifyContent="space-between" >
                            <Text fontSize={{lg:"18px",md:"16px",base:"14px"}}>{duration}</Text>
                            <Text>${price}</Text>
                        </Box>
                        <Divider color={color} />
                        <Box my="4%" display="flex" flexDirection="row" justifyContent="space-between">
                            <Text fontSize={{lg:"18px",md:"16px",base:"14px"}}>Order Total</Text>
                            <Text>${price}</Text>
                        </Box>
                        <Text>Country:India</Text>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}