import {
  Box,
  chakra,
  Flex,
  Grid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import ThemeContext from "../contexts/ThemeContext";

interface ProjectShowcaseProps {
  title: string;
  nodes: number;
  url: string;
  children: React.ReactChildren;
}

export default function ProjectShowcase({
  title,
  nodes,
  children,
  url,
}: ProjectShowcaseProps) {
  const theme = React.useContext(ThemeContext);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [selectedNode, setSelectedNode] = React.useState<number>(0);
  const [slides, setSlides] = React.useState<React.ReactChildren[] | null>(
    null
  );

  React.useEffect(() => {
    if (children) {
      let arr: React.ReactChildren[] = [];
      React.Children.forEach(children, (child) => {
        arr.push(child);
      });
      setSlides(arr);
    }
  }, [children]);

  const moveForward = () => {
    if (selectedNode < nodes - 1) {
      setSelectedNode(selectedNode + 1);
    }
  };

  const moveBackward = () => {
    if (selectedNode > 0) {
      setSelectedNode(selectedNode - 1);
    }
  };

  if (isMobile)
    return (
      <Flex direction="column" mb="20px">
        <Text textStyle="headerCaps" gridRow="1/2" pl="20px">
          {title}
        </Text>

        <Flex
          w="100%"
          p="0 20px 20px"
          direction="column"
          borderTop={`5px solid ${theme}`}
          bgColor="darkGray"
          className="uses-color-theme"
        >
          {slides && slides[selectedNode]}
          {nodes > 1 && (
            <Flex direction="row" alignItems="center" margin="0 auto">
              <Directional
                photoURL="/svg/chevronLeft.svg"
                onClick={moveBackward}
                size={8}
              />
              <CarouselIndicator nodes={nodes} selectedNode={selectedNode} />
              <Directional
                photoURL="/svg/chevronRight.svg"
                onClick={moveForward}
                size={8}
              />
            </Flex>
          )}
        </Flex>
      </Flex>
    );

  return (
    <Grid templateRows="auto auto auto" pl="22px" mb="20px">
      <Text textStyle="headerCaps" gridRow="1/2">
        {title}
      </Text>

      <Flex
        direction="row"
        alignItems="center"
        borderTop={`5px solid ${theme}`}
        gridRow="2/3"
        paddingLeft="300px"
        paddingTop="30px"
        marginLeft="-300px"
        bgColor="darkGray"
      >
        {nodes > 1 && (
          <Grid templateRows="1fr auto 1fr">
            <Directional
              gridRow="2/3"
              photoURL="/svg/chevronLeft.svg"
              onClick={moveBackward}
              size={80}
            />
          </Grid>
        )}

        <Flex direction="column">
          {slides && slides[selectedNode]}
          <Grid
            templateColumns="60% 40%"
            bg="darkGray"
            paddingLeft="300px"
            paddingBottom="30px"
            marginLeft="-300px"
          >
            <Flex w="100%" justifyContent="center">
              {nodes > 1 && (
                <CarouselIndicator nodes={nodes} selectedNode={selectedNode} />
              )}
            </Flex>

            <chakra.a
              gridColumn="2/3"
              fontWeight="bold"
              textStyle="body"
              target="__blank"
              href={`https://${url}`}
              _hover={{
                textDecoration: `underline ${theme}`,
                cursor: "pointer",
              }}
            >
              {url}
            </chakra.a>
          </Grid>
        </Flex>

        {nodes > 1 && (
          <Grid templateRows="1fr auto 1fr" mr="20px">
            <Directional
              gridRow="2/3"
              photoURL="/svg/chevronRight.svg"
              onClick={moveForward}
              size={80}
            />
          </Grid>
        )}
      </Flex>
    </Grid>
  );
}

interface CarouselIndicatorProps {
  nodes: number;
  selectedNode: number;
}

function CarouselIndicator({ nodes, selectedNode }: CarouselIndicatorProps) {
  const getKeys = (x: number): number[] => {
    let result = [];
    for (let i = 0; i < x; i++) {
      result.push(i);
    }
    return result;
  };
  const keys = getKeys(nodes);
  const theme = React.useContext(ThemeContext);

  return (
    <Flex>
      {keys.map((node: number) => (
        <Box
          className="uses-color-theme"
          bg={node === selectedNode ? theme : "lightGray"}
          w="20px"
          h="20px"
          margin="0 2px"
          borderRadius="50%"
          key={node}
        />
      ))}
    </Flex>
  );
}

interface DirectionalProps {
  photoURL: string;
  gridRow?: string;
  size: number;
  onClick: VoidFunction;
}

function Directional({ photoURL, onClick, size, gridRow }: DirectionalProps) {
  const theme = React.useContext(ThemeContext);

  return (
    <chakra.img
      gridRow={gridRow}
      src={photoURL}
      onClick={onClick}
      resize="both"
      width={size}
      padding="10px"
      borderRadius="md"
      transition="background-color 300ms ease-in-out"
      _hover={{
        cursor: "pointer",
        backgroundColor: theme,
        transition: "background-color 300ms ease-in-out",
      }}
    />
  );
}

interface ProjectSlideProps {
  photoURL: string;
  solo?: boolean;
  children: React.ReactChildren;
}

export function ProjectSlide({ photoURL, children, solo }: ProjectSlideProps) {
  const theme = React.useContext(ThemeContext);
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (isMobile)
    return (
      <Flex direction="column" alignItems="center">
        <chakra.img
          src={photoURL}
          resize="both"
          border={`5px solid ${theme}`}
          w="calc(100%- 40px)"
          m="20px 0"
        />
        <Text textStyle="body" lineHeight="150%">
          {children}
        </Text>
        <Box m="20px 0" w="20px" h="4px" bgColor={theme} />
      </Flex>
    );

  return (
    <Grid templateColumns="60% 40%" alignItems="center">
      <chakra.img
        gridColumn="1/2"
        src={photoURL}
        resize="both"
        border={`5px solid ${theme}`}
        w="calc(100% - 40px)"
        mt="20px"
        mb="20px"
        mr="20px"
        ml={solo ? "0" : "20px"}
      />

      <Box gridColumn="2/3" pr={solo ? "20px" : "0"}>
        <Text textStyle="body" lineHeight="150%">
          {children}
        </Text>
        <Box m="20px 0" w="20px" h="4px" bgColor={theme} />
      </Box>
    </Grid>
  );
}
