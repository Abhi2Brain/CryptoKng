import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap');
</style>

const ExchangeCard = ({name,img,url,rank}) => {
  return (
    <a href={url} target={"blank"}>
      <VStack w={'52'} shadow={'lg'} p={'8'} borderRadius={'lg'}
       transition={"all 0.5s"} m={'4'}
       css={{
            "&:hover": {
               transform: "scale(1.1)"
            }
        }}
       >
         <Image src={img} w={'10'} h={'10'}
          objectFit={"contain"} />

          <Heading size={'md'} noOfLines={1} >{rank}</Heading>
          
          <Text fontFamily={'PT Serif'} fontWeight={'medium'}>{name}</Text>
      </VStack>
    </a>
  )
}

export default ExchangeCard
