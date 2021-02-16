import { chakra, Flex, Icon, Text } from "@chakra-ui/react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaGithub,
} from "../icons/reactIcons";
import * as React from "react";
import ThemeContext from "../contexts/ThemeContext";

export function Footer() {
  return (
    <Flex
      direction="row"
      ml={["0", "-130px"]}
      pr="5px"
      pl={["5px", "150px"]}
      bg="darkGray"
      h="80px"
      alignItems="center"
      justifyContent={{ base: "space-around", md: "flex-start" }}
    >
      <Text fontSize={["4vw", "20px"]} textStyle="body" mr={["0", "20px"]}>
        © Will Theodore 2021
      </Text>
      <MediaLink
        url="https://www.instagram.com/will.theodore"
        icon={FaInstagram}
      />
      <MediaLink url="https://www.twitter.com/willltheodore" icon={FaTwitter} />
      <MediaLink
        url="https://www.linkedin.com/in/willtheodore"
        icon={FaLinkedin}
      />
      <MediaLink
        url="https://www.facebook.com/wtheodore776"
        icon={FaFacebook}
      />
      <MediaLink url="https://www.github.com/willtheodore" icon={FaGithub} />
    </Flex>
  );
}

interface MediaLinkProps {
  url: string;
  icon: any;
}

function MediaLink({ url, icon }: MediaLinkProps) {
  const theme = React.useContext(ThemeContext);

  return (
    <chakra.a
      className="uses-color-theme"
      borderRadius="md"
      padding="5px 8px 8px"
      mr={["0", "20px"]}
      _hover={{
        backgroundColor: theme,
        transition: "background-color 300ms ease-in-out",
      }}
      target="__blank"
      href={url}
    >
      <Icon aria-label="Linked in Icon" as={icon} boxSize={["4vw", "20px"]} />
    </chakra.a>
  );
}
