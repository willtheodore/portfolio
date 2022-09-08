import {
    Flex,
    Grid,
    Text,
    Link,
    chakra,
    useBreakpointValue,
    Button,
    Box,
} from "@chakra-ui/react";
import * as React from "react";
import ThemeContext, { mapToLight } from "../contexts/ThemeContext";

interface ProjectGridProps {
    children: React.ReactNodeArray;
    numProjects: number;
}

// USAGE: Children should be "Project Cells"
export default function ProjectGrid({
    numProjects,
    children,
}: ProjectGridProps) {
    const theme = React.useContext(ThemeContext);
    const isMobile = useBreakpointValue({ base: true, md: false });

    const projects = [];
    for (let i = 0; i < numProjects; i++) {
        projects.push(children[i]);
    }

    return (
        <>
            {isMobile && <Box h="30px" />}
            <Flex
                width="calc(100% - 30px)"
                direction="column"
                mx="15px"
                mb="20px"
                borderBottom={`10px solid ${theme}`}>
                {projects}
            </Flex>
        </>
    );
}

interface ProjectCellProps {
    imagePath: string;
    projectTitle: string;
    projectSlug: string;
    projectURL: string;
    githubURL: string | null;
}

// USAGE: should contain
export function ProjectCell({
    imagePath,
    projectTitle,
    projectSlug,
    githubURL,
}: ProjectCellProps) {
    const theme = React.useContext(ThemeContext);
    const isMobile = useBreakpointValue({ base: true, md: false });

    if (isMobile)
        return (
            <>
                <Grid
                    width="100%"
                    height="400px"
                    border={`8px solid ${theme}`}
                    borderBottom="none"
                    templateRows="repeat(5, 1fr)"
                    templateColumns="repeat(7, 1fr)"
                    alignItems="end"
                    overflow="hidden">
                    <chakra.img
                        src={imagePath}
                        objectFit="cover"
                        resize="both"
                        width="100%"
                        height="100%"
                        gridColumn="1/8"
                        gridRow="1/6"
                        sx={{ filter: "blur(5px)" }}
                    />

                    <chakra.div
                        gridColumn="1/8"
                        gridRow="1/6"
                        w="100%"
                        h="100%"
                        bgColor={theme}
                        opacity="0.4"
                    />

                    <Text
                        px="10px"
                        gridColumn="1/8"
                        gridRow="3/4"
                        textStyle="projectHeaderMobile"
                        zIndex="100"
                        color="gray.50">
                        {projectTitle}
                    </Text>

                    <Flex
                        gridRow="4/5"
                        gridColumn="1/5"
                        h="100%"
                        w="100%"
                        px="10px"
                        direction="column">
                        <Button
                            w="100%"
                            alignSelf="center"
                            bgColor="gray.600"
                            border="3px solid"
                            borderColor="gray.50"
                            color="gray.50"
                            my="2"
                            _hover={{
                                bgColor: "gray.700",
                            }}>
                            <Link
                                href={`/projects/${projectSlug}`}
                                _hover={{ textDecoration: "none" }}>
                                Details
                            </Link>
                        </Button>

                        {githubURL && (
                            <Button
                                w="100%"
                                alignSelf="center"
                                bgColor={theme}
                                border="3px solid"
                                color="gray.200"
                                _hover={{
                                    bgColor: mapToLight(theme),
                                }}>
                                <chakra.a target="_blank" href={`${githubURL}`}>
                                    View Code
                                </chakra.a>
                            </Button>
                        )}
                    </Flex>
                </Grid>
            </>
        );

    return (
        <>
            <Grid
                width="100%"
                height="500px"
                border={`10px solid ${theme}`}
                borderBottom="none"
                templateRows="1fr 1fr 1fr"
                templateColumns="repeat(5, 1fr)"
                alignItems="end"
                overflow="hidden">
                <chakra.img
                    src={imagePath}
                    objectFit="cover"
                    resize="both"
                    width="100%"
                    height="100%"
                    gridColumn="1/6"
                    gridRow="1/4"
                    sx={{ filter: "blur(5px)" }}
                />

                <chakra.div
                    gridColumn="1/6"
                    gridRow="1/4"
                    w="100%"
                    h="100%"
                    bgColor={theme}
                    opacity="0.4"
                />

                <Text
                    gridColumn="2/6"
                    gridRow="2/3"
                    textStyle="projectHeader"
                    zIndex="100"
                    color="gray.50">
                    {projectTitle}
                </Text>

                <Button
                    gridColumn="2/3"
                    gridRow="3/4"
                    w="80%"
                    alignSelf="start"
                    bgColor="gray.600"
                    border="3px solid"
                    borderColor="gray.50"
                    color="gray.50"
                    _hover={{
                        bgColor: "gray.700",
                    }}>
                    <Link
                        href={`/projects/${projectSlug}`}
                        _hover={{ textDecoration: "none" }}>
                        Details
                    </Link>
                </Button>

                {githubURL && (
                    <Button
                        gridColumn="3/4"
                        gridRow="3/4"
                        w="85%"
                        alignSelf="start"
                        bgColor={theme}
                        border="3px solid"
                        color="gray.200"
                        _hover={{
                            bgColor: mapToLight(theme),
                        }}>
                        <chakra.a target="_blank" href={`${githubURL}`}>
                            View Code
                        </chakra.a>
                    </Button>
                )}
            </Grid>
        </>
    );
}
