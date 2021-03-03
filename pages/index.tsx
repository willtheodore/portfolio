import Head from "next/head";
import { Text, Grid, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid
        direction="column"
        w="100%"
        h="100%"
        ml={{ base: "5vw", md: "0" }}
        templateRows="1fr auto auto 1fr"
      >
        <Heading
          display="inline-block"
          gridRow="2/3"
          fontFamily="protipo"
          fontWeight="bold"
          fontSize={["12vw", "9vw"]}
        >
          Will Theodore
        </Heading>
        <Text display="inline-block" gridRow="3/4" fontSize={["5vw", "3vw"]}>
          CS Student and Freelance Developer
        </Text>
      </Grid>
    </>
  );
}
