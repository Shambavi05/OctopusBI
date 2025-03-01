import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box 
      bgGradient="linear(to-b, blue.600, purple.500, purple.400)" 
      p={4} 
      boxShadow="md" 
      textAlign="center" 
      mt="auto"
    >
      <Text color="white">© 2024 Your Dashboard. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
