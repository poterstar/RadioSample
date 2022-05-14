import { Center, Text, useColorModeValue, VStack } from "native-base";
import React, { useContext } from "react";
import { RadiosContext } from "../../contexts/RadiosContext";

const Footer = () => {
  const { currentPlayingRadio } = useContext(RadiosContext);

  return (
    <Center
      py="4"
      bgColor={useColorModeValue("warmGray.200", "coolGray.900")}
      safeAreaBottom
    >
      <VStack alignItems="center">
        <Text
          fontSize="xs"
          bold
          letterSpacing="sm"
          color="coolGray.500"
          _dark={{ color: "orange.300" }}
          h="4"
        >
          {currentPlayingRadio ? "CURRENTLY PLAYING" : ""}
        </Text>
        <Text
          fontSize="2xl"
          color="coolGray.800"
          _dark={{
            color: "warmGray.200",
          }}
          h="7"
        >
          {currentPlayingRadio ? currentPlayingRadio.name : ""}
        </Text>
      </VStack>
    </Center>
  );
};

export default Footer;
