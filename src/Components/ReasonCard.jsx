import { Image,Card,CardBody,Stack,Heading,Text,useColorMode,useColorModeValue,Center } from "@chakra-ui/react";
export const ReasonCard = ({image,heading,content}) => {
  
  const bgcolor = useColorModeValue('#FFFAF0', '#285E61')
  const color = useColorModeValue('#000000', '#FFFFFF')

  return (
    <div>
      <Card _hover={{md:{transform:"scale(1.02)",transition:"0.2s"},base:{transform:0,transition:0}}} variant="outline" bg={bgcolor} color={color} borderColor={color} maxW={{base:'350px',md:"md"}} >
          <CardBody>
            <Center><Image
              src={image}
              alt={image}
              borderRadius='lg'
            /></Center>
            <Stack mt='3' spacing='1'>
              <Heading fontFamily="Philosopher"  size={'xl'}>{heading}</Heading>
              <Text fontFamily="PT Sans" fontSize={{md:"20px",base:"18px"}}>
              {content}
              </Text>
            </Stack>
          </CardBody>
        </Card>
    </div>
  );
};
