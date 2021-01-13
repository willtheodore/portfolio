import { chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Footer as RawFooter } from "./Footer";
import { HeaderWithContext as RawHeader } from "./HeaderWithContext";
import chevronLeft from "../assets/chevronLeft.svg";
import chevronRight from "../assets/chevronRight.svg";

export const ChakraLink = chakra(Link);
export const Footer = chakra(RawFooter);
export const HeaderWithContext = chakra(RawHeader);
export const ChevronLeft = chakra(chevronLeft);
export const ChevronRight = chakra(chevronRight);
