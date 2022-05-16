import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Box,
  HStack,
  Icon,
  IconButton,
  Image,
  useColorMode,
  useColorModeValue,
} from "native-base";
import React, { useContext, useEffect } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  SlideInDown,
  SlideOutDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { RadiosContext } from "../../contexts/RadiosContext";
import { RadioType } from "../../hooks/useStations";
type Props = {
  radios: RadioType[];
};

const AnimatedBox = Animated.createAnimatedComponent(Box);

const RadioPlayer = ({ radios }: Props) => {
  const { currentPlayingRadio, setCurrentPlayingRadio } =
    useContext(RadiosContext);
  const { colorMode } = useColorMode();

  function nextRadio() {
    if (currentPlayingRadio === null) return -1;
    const index = radios.findIndex(
      (radio) => radio.name === currentPlayingRadio.name
    );
    if (index >= radios.length - 1 || index === -1) {
      return -1;
    }
    return index + 1;
  }

  function previousRadio() {
    if (currentPlayingRadio === null) return -1;
    const index = radios.findIndex(
      (radio) => radio.name === currentPlayingRadio.name
    );
    if (index <= 0 || index === -1) {
      return -1;
    }
    return index - 1;
  }

  const toggleNextRadio = () => {
    const nextRadioIndex = nextRadio();
    if (nextRadioIndex >= 0) {
      setCurrentPlayingRadio(radios[nextRadioIndex]);
    }
  };

  const togglePrevRadio = () => {
    const previousRadioIndex = previousRadio();
    if (previousRadioIndex >= 0) {
      setCurrentPlayingRadio(radios[previousRadioIndex]);
    }
  };

  // Start of animation logic

  const END_POSITION = 110;
  const position = useSharedValue(0);
  const start = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onBegin((e) => {
      start.value = e.absoluteY;
    })
    .onUpdate((e) => {
      if (e.absoluteY > start.value) {
        position.value = Math.max(0, e.translationY);
      }
    })
    .onEnd((e) => {
      if (start.value + position.value > start.value + END_POSITION) {
        position.value = withTiming(
          END_POSITION + 300,
          { duration: 100 },
          () => {
            runOnJS(setCurrentPlayingRadio)(null);
          }
        );
      } else {
        position.value = withTiming(0, { duration: 100 });
      }
    });

  useEffect(() => {
    position.value = 0;
  }, [currentPlayingRadio]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: position.value }],
  }));

  // End of animation logic

  return (
    <GestureDetector gesture={panGesture}>
      <AnimatedBox
        entering={SlideInDown}
        exiting={SlideOutDown}
        p="10"
        bg={useColorModeValue("warmGray.200", "coolGray.900")}
        style={animatedStyle}
      >
        <HStack justifyContent="space-between" alignItems="center">
          <IconButton
            icon={
              colorMode === "light" ? (
                <Icon as={Ionicons} name="caret-back-circle-outline" />
              ) : (
                <Icon as={Ionicons} name="caret-back-circle-outline" />
              )
            }
            borderRadius="full"
            _icon={{
              color: "warmGray.200",
              size: "4xl",
            }}
            _light={{
              _icon: {
                color: "coolGray.800",
              },
            }}
            _pressed={{
              bg: "white:alpha.20",
            }}
            onPress={togglePrevRadio}
            isDisabled={previousRadio() >= 0 ? false : true}
            disabled={previousRadio() >= 0 ? false : true}
          />
          <Image
            size={150}
            resizeMode={"contain"}
            borderRadius={100}
            source={{
              uri: currentPlayingRadio?.image,
            }}
            backgroundColor="blue.100"
            alt="radio"
          />
          <IconButton
            icon={
              colorMode === "light" ? (
                <Icon as={Ionicons} name="caret-forward-circle-outline" />
              ) : (
                <Icon as={Ionicons} name="caret-forward-circle-outline" />
              )
            }
            borderRadius="full"
            _icon={{
              color: "warmGray.200",
              size: "4xl",
            }}
            _light={{
              _icon: {
                color: "coolGray.800",
              },
            }}
            _pressed={{
              bg: "white:alpha.20",
            }}
            isDisabled={nextRadio() >= 0 ? false : true}
            disabled={nextRadio() >= 0 ? false : true}
            onPress={toggleNextRadio}
          />
        </HStack>
      </AnimatedBox>
    </GestureDetector>
  );
};

export default RadioPlayer;
