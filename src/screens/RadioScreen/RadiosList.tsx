import {
  Box,
  FlatList,
  HStack,
  Pressable,
  Text,
  useColorModeValue,
} from "native-base";
import React, { useContext } from "react";
import { RadiosContext } from "../../contexts/RadiosContext";
import { RadioType } from "../../hooks/useStations";

type Props = {
  radios: RadioType[];
};

const RadiosList = ({ radios }: Props) => {
  const { setCurrentPlayingRadio } = useContext(RadiosContext);

  return (
    <FlatList
      data={radios}
      renderItem={({ item }) => {
        return (
          <Pressable onPress={() => setCurrentPlayingRadio(item)}>
            <Box py="4">
              <HStack space={3} justifyContent="space-between">
                <Text
                  _dark={{
                    color: "warmGray.200",
                  }}
                  color={"coolGray.600"}
                  fontSize="2xl"
                >
                  {item.name}
                </Text>
                <Text
                  bold
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                  fontSize="2xl"
                >
                  {item.frequency}
                </Text>
              </HStack>
            </Box>
          </Pressable>
        );
      }}
      ItemSeparatorComponent={() => (
        <Box
          borderBottomWidth="1"
          borderColor={useColorModeValue("coolGray.200", "gray.600")}
        />
      )}
      keyExtractor={(item, index) => `${item.name}-${item.frequency}-${index}`}
      px="4"
      flex="1"
    />
  );
};

export default RadiosList;
