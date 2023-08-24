import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap');
</style>

const CoinCard = ({id,name,img,price,symbol,currencySym='₹'}) => {
    return   <Link  to={`/coins/${id}`} >
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
  
            <Heading size={'md'} noOfLines={1} >{symbol}</Heading>
            <Text fontFamily={'PT Serif'} fontWeight={'medium'}>{name}</Text>
             <Text fontFamily={'PT Serif'} fontWeight={'medium'}>{price? `${currencySym}${price}`:"NA"}</Text>

        </VStack>
      </Link>
    
  }


export default CoinCard
