import React from "react";
import { CarouselItemConfig } from "../..";

interface Props extends CarouselItemConfig {
  show: boolean;
}

const getRandomImage = (images: string[]): string => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex] ?? '';
};

export const CarouselItem = ({ title, images, show }: Props) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      minWidth: "25%",
      maxWidth: "25%",
      height: '100%',
      opacity: show ? 1 : 0,
    }}
  >
    <div>{title}</div>
    <img src={getRandomImage(images)} width="100%" />
  </div>
);
