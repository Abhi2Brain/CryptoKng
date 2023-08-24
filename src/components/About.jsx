import {TfiGithub,TfiLinkedin} from "react-icons/tfi"
import {SiInstagram} from "react-icons/si"
import { Stack, VStack ,Avatar,Text, Box, HStack} from '@chakra-ui/react'
import React from 'react'
import abhi from "../assets/abhi.jpg"

const About = () => {
  return (
    <Stack  justifyItems={'center'} >
     <VStack marginTop={'5'}>
      <Avatar  boxSize={"52"}  mt={["4", "0"]} src={abhi} />
       <Box 
       alignItems={'center'}
       padding={['8','14']}
       w={['100%','60%']}
       
      >
       <Text 
      fontSize={'lg'}
      textAlign={'center'}
      letterSpacing={["unset","widest"]}
      >
Hello and greetings! I am Abhishek Kumar, currently in the final year of my studies at Kamla Nehru Institute of Technology in Sultanpur. I am delighted to present a project that I have diligently crafted using the ReactJS framework. Furthermore, I extend a cordial invitation for you to stay connected with me through my diverse online platforms, ensuring you are well-informed about forthcoming updates. Your keen interest and invaluable support hold immense significance to me. Thank you for your kind attention!
      </Text>

      <HStack marginTop={['9','14']} 
       justifyContent={'center'} 
       spacing={'9'}
       > 
       
       <a href="https://github.com/Abhi2Brain">
        <TfiGithub  size={'30'} />
        </a>
        <a href="https://www.linkedin.com/in/abhishek-kumar-4b1470216/"> 
        <TfiLinkedin size={'30'}/>
        </a>
        <a href="https://www.instagram.com/bd18_abhi/">
        <SiInstagram size={'30'} />
        </a>
      </HStack>
      </Box>
     </VStack>
    </Stack>
   
  )
}

export default About;
