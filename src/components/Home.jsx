import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/crypto.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "78vh",
        }}
        animate={{
          translateY: "18px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"} 
          h={'500'}
          objectFit={"contain"}
          src={btcSrc}
         
        />
      </motion.div>

      <Text
        fontSize={"5xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-12"}
      >
        CryptoKng
      </Text>
    </Box>
  );
};

export default Home;