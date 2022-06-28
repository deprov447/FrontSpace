import React, { useEffect, useState } from 'react';
import { Box, Center, Flex, Image } from '@chakra-ui/react';

export default function Carousel() {
  const slides = [
    {
      img: 'https://api.microlink.io?url=https%3A%2F%2Fdeprov447.getfront.space&overlay.browser=dark&overlay.background=%2300000000&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      img: 'https://api.microlink.io?url=https%3A%2F%2Fprinsu-pyaara.getfront.space&overlay.browser=dark&overlay.background=%2300000000&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      img: 'https://api.microlink.io?url=https%3A%2F%2Fhimniz.getfront.space&overlay.browser=dark&overlay.background=%2300000000&screenshot=true&meta=false&embed=screenshot.url',
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`,
  };

  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = 'right';

  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide(s => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide(s => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === 'left' ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);

  return (
    <Center>
      <Flex
        maxWidth={'960px'}
        p={3}
        alignItems="center"
        justifyContent="center"
      >
        <Flex w="full" overflow="hidden">
          <Flex pos="relative" w="full" {...carouselStyle}>
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
                <Image
                  src={slide.img}
                  alt="carousel image"
                  boxSize="full"
                  backgroundSize="cover"
                />
              </Box>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
}
