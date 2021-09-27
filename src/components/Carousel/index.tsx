import React, { useState } from 'react';
import { CarouselItemConfig } from '../..';
import { CarouselItem } from '../CarouselItem';

interface Props {
  items: CarouselItemConfig[];
}

export const Carousel = ({ items }: Props) => {
  const [page, setPage] = useState(0)
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: 'center', height: '500px' }}>
      <button style={{ zIndex: 10 }} disabled={page <= 0}  onClick={() => setPage((val) => val - 1)}>
        Previous
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          transform: `translate(-${100 * page}%)`,
        }}
      >
        {items.map(({ title, images }, index) => (
          <CarouselItem key={title} title={title} images={images} show={index >= page * 4 && index < (page + 1) * 4} />
        ))}
      </div>
      <button style={{ zIndex: 10 }} disabled={page >= (items.length / 4) - 1} onClick={() => setPage((val) => val + 1)}>
        Next
      </button>
    </div>
  );
}