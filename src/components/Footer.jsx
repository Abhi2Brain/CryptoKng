import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://cdn-icons-png.flaticon.com/512/5171/5171046.png";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack marginTop={'4'} direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
           Best crypto trading app made with ❤️ in India.
          </Text>
        </VStack>

        <VStack w= {"full"} alignItems={['center','flex-end']} >
          {/* <Avatar  style={{filter:'hue-rotate(90deg)'}} boxSize={"20"}  mt={["4", "0"]} src={avatarSrc} /> */}
          <Text  fontSize={"sm"} letterSpacing={"widest"} >CryptoKing</Text>
          <Text  fontSize={"sm"} letterSpacing={"widest"} >All right reseved</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;