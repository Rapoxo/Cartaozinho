import type { NextPage } from "next";
import { Icon } from "@chakra-ui/react";
import styles from "./style.module.css";

type CircleProps = {
  isActive: boolean;
  onClick: () => void;
};

const Circle: NextPage<CircleProps> = ({ isActive, onClick }) => {
  return (
    <Icon className={styles.circle} onClick={onClick} style={{ cursor: "pointer" }} viewBox="0 0 200 200" color={isActive ? "black" : "GrayText"}>
      <path fill="currentColor" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
    </Icon>
  );
};

export default Circle;
