import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, SlideFade, Text, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { CardDetails } from "../types";
import type { NextPage } from "next";
import Circle from "../Circle";
import Card from "../Card";

type CarouselProps = {
  cards: CardDetails[];
  changeHandler: (newCard: CardDetails) => void;
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};
const swipeConfidenceThreshold = 10000;

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Carousel: NextPage<CarouselProps> = ({ cards, changeHandler }) => {
  const [isDisabledLeft, setDisabledLeft] = useState(true);
  const [isDisabledRight, setDisabledRight] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);
  const [hiddenDots, setHiddenDots] = useState(false);

  const variant = useBreakpointValue({
    base: "none",
    sm: "none",
    md: "block",
    lg: "block",
    xl: "block",
  });

  const paginate = (newDirection: number) => {
    if (newDirection === 1 && isDisabledRight) return;
    if (newDirection === -1 && isDisabledLeft) return;
    if (page + newDirection > cards.length - 1) return;
    setPage([page + newDirection, newDirection]);
  };

  const specificPage = (page: number, newDirection: number) => {
    if (newDirection === 1 && isDisabledRight) return;
    if (newDirection === -1 && isDisabledLeft) return;
    setPage([page, newDirection]);
  };

  const showDetails = () => {
    setHiddenDots(!hiddenDots);
  };

  const currencyFormatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  useEffect(() => {
    if (page === cards.length - 1) {
      setDisabledRight(true);
    } else {
      setDisabledRight(false);
    }
    if (page === 0) {
      setDisabledLeft(true);
    } else {
      setDisabledLeft(false);
    }
    changeHandler(cards[page]);
  }, [page, cards, changeHandler]);

  return (
    <Flex overflow="hidden" direction={"column"}>
      <Box style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <ChevronLeftIcon
          display={variant}
          onClick={() => {
            paginate(-1);
          }}
          _hover={isDisabledLeft ? { cursor: "auto" } : { cursor: "pointer" }}
          w={8}
          h={8}
          color={isDisabledLeft ? "GrayText" : "black"}
        />
        <Box as="span" m={8} p={0} onClick={showDetails}>
          <AnimatePresence exitBeforeEnter initial={false} custom={direction}>
            {
              <motion.div
                key={cards[page].cardBrand}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", duration: 0.2 },
                  opacity: { duration: 0.1 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              >
                <Card {...cards[page]} template />
              </motion.div>
            }
          </AnimatePresence>
        </Box>
        <ChevronRightIcon
          display={variant}
          onClick={() => {
            paginate(1);
          }}
          _hover={isDisabledRight ? { cursor: "auto" } : { cursor: "pointer" }}
          w={8}
          h={8}
          color={isDisabledRight ? "GrayText" : "black"}
        />
      </Box>
      <SlideFade in={!hiddenDots} offsetY="-20px">
        <Box display={"flex"} style={{ justifyContent: "center", alignContent: "center" }}>
          {cards.map(child => {
            const childIndex = cards.indexOf(child);
            return (
              <Circle
                isActive={page === childIndex}
                key={childIndex}
                onClick={() => {
                  const direction = childIndex > page ? 1 : -1;
                  specificPage(childIndex, direction);
                }}
              />
            );
          })}
        </Box>
      </SlideFade>
      <SlideFade in={hiddenDots} offsetY="20px">
        <Box display={"flex"} style={{ justifyContent: "center", alignContent: "center" }}>
          <Text className="text" fontSize="3xl">
            Total: {currencyFormatter.format(cards[page].totalAmount)}
          </Text>
        </Box>
      </SlideFade>
    </Flex>
  );
};

export default Carousel;
