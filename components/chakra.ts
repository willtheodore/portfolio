import { chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Footer as RawFooter } from "./Footer";
import { HeaderWithContext as RawHeader } from "./HeaderWithContext";

export const ChakraLink = chakra(Link);
export const Footer = chakra(RawFooter);
export const HeaderWithContext = chakra(RawHeader);
