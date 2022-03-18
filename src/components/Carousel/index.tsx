import { ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import { Box, SlideFade, Text } from "@chakra-ui/react";

import type { NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import Circle from "../Circle";

type CarouselProps = {
  children: ReactNode[];
};

const Carousel: NextPage<CarouselProps> = ({ children }) => {
  const [isDisabledLeft, setDisabledLeft] = useState(true);
  const [isDisabledRight, setDisabledRight] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState(children[itemIndex]);
  const [hiddenDots, setHiddenDots] = useState(false);
  const handleNext = () => {
    if (isDisabledRight) return;
    setItemIndex(itemIndex + 1);
  };
  const handlePrevious = () => {
    if (isDisabledLeft) return;
    setItemIndex(itemIndex - 1);
  };

  const showDetails = () => {
    setHiddenDots(!hiddenDots);
  };
  useEffect(() => {
    setCurrentItem(children[itemIndex]);
    if (itemIndex === children.length - 1) {
      setDisabledRight(true);
    } else {
      setDisabledRight(false);
    }
    if (itemIndex === 0) {
      setDisabledLeft(true);
    } else {
      setDisabledLeft(false);
    }
  }, [itemIndex, children]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <ChevronLeftIcon onClick={handlePrevious} _hover={isDisabledLeft ? { cursor: "auto" } : { cursor: "pointer" }} w={8} h={8} color={isDisabledLeft ? "GrayText" : "black"} />
        <Box as="span" m={8} p={0} onClick={showDetails}>
          {currentItem}
        </Box>
        <ChevronRightIcon onClick={handleNext} _hover={isDisabledRight ? { cursor: "auto" } : { cursor: "pointer" }} w={8} h={8} color={isDisabledRight ? "GrayText" : "black"} />
      </Box>
      <SlideFade in={!hiddenDots} offsetY="-20px">
        <Box display={"flex"} style={{ justifyContent: "center", alignContent: "center" }}>
          {children.map(child => {
            const childIndex = children.indexOf(child);
            return (
              <Circle
                isActive={itemIndex === childIndex}
                key={childIndex}
                onClick={() => {
                  setItemIndex(childIndex);
                }}
              />
            );
          })}
        </Box>
      </SlideFade>
      <SlideFade in={hiddenDots} offsetY="20px">
        <Box display={"flex"} style={{ justifyContent: "center", alignContent: "center" }}>
          <Text fontSize="3xl">Total: PRA CARALHO, TÁ?</Text>
        </Box>
      </SlideFade>
    </div>
  );
};

export default Carousel;
