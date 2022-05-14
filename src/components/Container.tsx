import { Box, useColorModeValue } from "native-base";
import React from "react";

type ThemedContainerProps = {
  children: React.ReactNode;
};

const ThemedContainer = ({ children }: ThemedContainerProps) => {
  return (
    <Box
      flex="1"
      w="full"
      bg={useColorModeValue("warmGray.100", "coolGray.800")}
    >
      {children}
    </Box>
  );
};

export default ThemedContainer;
