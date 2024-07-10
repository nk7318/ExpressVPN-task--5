import { Image,Card,CardBody,Stack,Heading,Text,useColorMode,useColorModeValue } from "@chakra-ui/react";
export const FeatureCard = ({image,heading,content}) => {
  
  const color = useColorModeValue('blue.900', 'white')

  return (
    <div>
      <Card variant="hidden" maxW='sm' >
          <CardBody>
            <Image
              src={image}
              alt={image}
              borderRadius='lg'
            />
            <Stack mt='3' spacing='1'>
              <Heading fontFamily="Philosopher" fontSize="2xl" size='md'>{heading}</Heading>
              <Text fontFamily="PT Sans" fontSize={{md:"20px",base:"16px"}}>
              {content}
              </Text>
            </Stack>
          </CardBody>
        </Card>
    </div>
  );
};
