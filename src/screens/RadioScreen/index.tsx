import { Text } from "native-base";
import React, { useContext } from "react";
import ThemedContainer from "../../components/Container";
import Loading from "../../components/Loading";
import { RadiosContext } from "../../contexts/RadiosContext";
import { useStations } from "../../hooks/useStations";
import Footer from "./Footer";
import Header from "./Header";
import RadioPlayer from "./RadioPlayer";
import RadiosList from "./RadiosList";

const RadioScreen = () => {
  const { radios, isLoading, isError } = useStations();
  const { currentPlayingRadio } = useContext(RadiosContext);

  return (
    <ThemedContainer>
      <Header />
      {isLoading && <Loading />}
      {isError && <Text>Something went wrong...</Text>}
      {radios && <RadiosList radios={radios} />}
      {currentPlayingRadio !== null && <RadioPlayer radios={radios ?? []} />}
      <Footer />
    </ThemedContainer>
  );
};

export default RadioScreen;
