import React, { useEffect, useState } from "react";
import { getData } from "./api";
import { Carousel } from "./components/Carousel";

export interface CarouselItemConfig {
  title: string;
  images: string[];
}

export const App = () => {
  const [items, setItems] = useState<CarouselItemConfig[]>([])
  useEffect(() => {
    getData<CarouselItemConfig[]>().then(data => setItems(data));
  }, [])
  return (
    <Carousel items={items} />
  );
};
