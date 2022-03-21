import type { NextPage } from "next";
import { Icon, useColorMode } from "@chakra-ui/react";
import { BsPlusCircle } from "react-icons/bs";
import styles from "./style.module.css";

type CircleProps = {
  add?: boolean;
  isActive: boolean;
  onClick: () => void;
};

const Circle: NextPage<CircleProps> = ({ isActive, onClick, add }) => {
  const { colorMode } = useColorMode();

  if (add) {
    return (
      <Icon
      m={.3}
        as={BsPlusCircle}
        className={styles.circle}
        onClick={onClick}
        style={{ cursor: "pointer" }}
        viewBox="0 0 200 200"
        color={colorMode === "light" ? (isActive ? "black" : "GrayText") : isActive ? "#75bdff" : "#4c6589"}
      ></Icon>
    );
  }

  return (
    <Icon
      className={styles.circle}
      onClick={onClick}
      style={{ cursor: "pointer" }}
      viewBox="0 0 200 200"
      color={colorMode === "light" ? (isActive ? "black" : "GrayText") : isActive ? "#75bdff" : "#4c6589"}
    >
      <path fill="currentColor" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
    </Icon>
  );
};

export default Circle;
