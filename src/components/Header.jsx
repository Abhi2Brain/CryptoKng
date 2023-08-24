import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <HStack  p={"4"} paddingX={'5'} shadow={"base"} bgColor={"blackAlpha.900"}>
        <Link to ={'/'}>
        <Button variant={"unstyled"}
         color={"white"} >Home</Button>
         </Link>
        <Link to ={'/exchanges'}>
         <Button variant={"unstyled"}
        color={"white"} >Exchanges</Button>
        </Link>
        <Link to ={'/coins'}>
        <Button variant={"unstyled"}
        color={"white"} >Coins</Button>
        </Link>
        <Link to ={'/about'}>
        <Button variant={"unstyled"}
        color={"white"} >About</Button>
        </Link>
   </HStack>
  )
}

export default Header
