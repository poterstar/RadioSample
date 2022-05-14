import {
  Center,
  Heading,
  HStack,
  Spinner,
  useColorModeValue,
} from "native-base";
import React from "react";

const Loading = () => {
  return (
    <Center flex="1">
      <HStack space={2} justifyContent="center" alignItems="center">
        <Spinner
          size="lg"
          color={useColorModeValue("coolGray.800", "light.400")}
        />
        <Heading
          color={useColorModeValue("coolGray.800", "light.400")}
          fontSize="md"
        >
          Loading
        </Heading>
      </HStack>
    </Center>
  );
};

export default Loading;
