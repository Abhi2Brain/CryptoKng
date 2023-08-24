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
       Greetings! I am Abhishek Kumar, currently in my final year of studies at Kamla Nehru Institue  of Technology, located in Sultanpur. I am pleased to share a project I have developed utilizing the ReactJs framework. Additionally, I invite you to stay connected through my various online platforms for upcoming updates. Your interest and support are greatly appreciated. Thank you!
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
