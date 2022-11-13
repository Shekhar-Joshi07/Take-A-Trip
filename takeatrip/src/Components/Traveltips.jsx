import React from "react";
import { Heading, Box, HStack, Button, Image } from "@chakra-ui/react";

const Traveltips = () => {
  return (
    <>
      <Box margin="auto" width="90%" pl={0} mt={12}>
        <Heading as="h4" size="lg">
          Traveling tips
        </Heading>
      </Box>

      <HStack
        color="white"
        spacing="25px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingLeft="60px"
        paddingRight="60px"
        mt={2}
      >
        <Box
          background="url(https://forever.travel-assets.com/flex/flexmanager/images/2021/11/18/ORB_Blog_NationalParks_imgB_1199x399_20211117.jpg) center/cover no-repeat"
          filter="grayscale(50%)"
          w="50%"
          h="250px"
          paddingTop="5rem"
          pl={4}
        >
          <Heading textShadow="1px 1px #000" lineHeight={2} as="h4" size="lg">
            National Parks
          </Heading>
          <p style={{ color: "white", fontWeight: "bold" }}>
            There's plenty to keep you busy.
          </p>
          <br />
          <Button color="black" bg="white" variant="solid">
            Learn more
          </Button>
        </Box>

        <Box
          background="url(https://forever.travel-assets.com/flex/flexmanager/images/2021/11/18/ORB_Blog_RoadTrips_imgB_1199x399_20211117.jpg) center/cover no-repeat"
          filter="grayscale(50%)"
          w="50%"
          h="250px"
          paddingTop="5rem"
          pl={4}
        >
          <Heading textShadow="1px 1px #000" lineHeight={2} as="h4" size="lg">
            The perfect road trip
          </Heading>
          <p style={{ color: "black", fontWeight: "bold" }}>
            Find an adventure for every season.
          </p>
          <br />
          <Button color="black" bg="white" variant="solid">
            Learn more
          </Button>
        </Box>
      </HStack>

      <Box
        margin="auto"
        height=""
        marginTop="4rem"
        width="90%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image src="https://tpc.googlesyndication.com/simgad/10056509806482740393?"></Image>
      </Box>
    </>
  );
};

export default Traveltips;
