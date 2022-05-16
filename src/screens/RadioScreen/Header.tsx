import Ionicons from "@expo/vector-icons/Ionicons";
import { Box, HStack, Icon, IconButton, Text, useColorMode } from "native-base";
import React, { useContext } from "react";
import { RadiosContext } from "../../contexts/RadiosContext";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { currentPlayingRadio, setCurrentPlayingRadio } =
    useContext(RadiosContext);

  return (
    <Box safeAreaTop bgColor="orange.300" p="2">
      <HStack justifyContent="space-between">
        <Box alignItems="center">
          <IconButton
            icon={
              colorMode === "light" ? (
                <Icon as={Ionicons} name="ios-moon-sharp" />
              ) : (
                <Icon as={Ionicons} name="ios-sunny-sharp" />
              )
            }
            borderRadius="full"
            _icon={{
              color: "white",
              size: "lg",
            }}
            _pressed={{
              bg: "orange.600:alpha.20",
            }}
            onPress={toggleColorMode}
          />
        </Box>
        <Box flex="1">
          <Text fontSize="2xl" textAlign="center" color="white" bold>
            STATIONS
          </Text>
        </Box>
        <Box alignItems="center">
          <IconButton
            icon={
              currentPlayingRadio !== null ? (
                <Icon as={Ionicons} name="ios-power" />
              ) : undefined
            }
            borderRadius="full"
            _icon={{
              color: "white",
              size: "lg",
            }}
            _pressed={{
              bg: "orange.600:alpha.20",
            }}
            isDisabled={currentPlayingRadio === null}
            disabled={currentPlayingRadio === null}
            onPress={() => setCurrentPlayingRadio(null)}
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default Header;
