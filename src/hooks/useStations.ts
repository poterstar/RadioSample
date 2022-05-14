import useSWR, { Key } from "swr";

const URL: Key = "https://jobapi.teclead-ventures.de/recruiting/radios";

export type RadioType = {
  name: string;
  frequency: number;
  image: string;
};

type AnswerType = {
  radios: RadioType[];
};

export const useStations = () => {
  const { data, error } = useSWR<AnswerType>(URL, (url) =>
    fetch(url).then((res) => res.json())
  );

  return {
    radios:
      data?.radios.map((item, index) => ({
        ...item,
        image: item.image.replace("RadioOne", `Radio ${index + 1}`),
      })) ?? [], // fix because all images have the same text
    isLoading: !error && !data,
    isError: error,
  };
};
