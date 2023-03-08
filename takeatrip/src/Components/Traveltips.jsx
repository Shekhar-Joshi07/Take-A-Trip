import React from "react";
import { Heading, Box, Stack, Button, Image } from "@chakra-ui/react";

const Traveltips = () => {
  return (
    <>
    
        <Heading as="h3" mt="3rem" mb="3" ml={{base:"40px",md:"60px",lg:"70px"}} size={{base:"md",md:"lg",lg:"lg"}}>
          Traveling tips
        </Heading>


      <Stack
        color="white"
        spacing="25px"
        display="flex"
        direction={{base:"column",md:"row",lg:"row"}}
        justifyContent="center"
        alignItems="center"
        paddingLeft={{base:"0px",md:"65px",lg:"76px"}}
        paddingRight={{base:"0px",md:"65px",lg:"76px"}}
        mt={2}
      >
        <Box
          background="linear-gradient(to right, rgba(3, 3, 3, 0.475), rgba(49, 49, 49, 0.482), rgba(0, 0, 0, 0.475)),url(https://forever.travel-assets.com/flex/flexmanager/images/2021/11/18/ORB_Blog_NationalParks_imgB_1199x399_20211117.jpg) center/cover no-repeat"
        
          w={{base:"80%",md:"80%",lg:"50%"}}
          h="250px"
          paddingTop="5rem"
          pl={4}
          m="auto"
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
          background="linear-gradient(to right, rgba(3, 3, 3, 0.475), rgba(49, 49, 49, 0.482), rgba(0, 0, 0, 0.475)),url(https://forever.travel-assets.com/flex/flexmanager/images/2021/11/18/ORB_Blog_RoadTrips_imgB_1199x399_20211117.jpg) center/cover no-repeat"
        
          w={{base:"80%",md:"80%",lg:"50%"}}
          h="250px"
          paddingTop="5rem"
          pl={4}
        >
          <Heading textShadow="1px 1px #000" lineHeight={{base:2,md:1,lg:2}} as="h4" size="lg">
            The perfect road trip
          </Heading>
          <p style={{ color: "white", fontWeight: "bold" }}>
            Find an adventure for every season.
          </p>
          <br />
          <Button color="black" bg="white" variant="solid">
            Learn more
          </Button>
        </Box>
      </Stack>

      <Box
        margin="auto"
        height=""
        marginTop="4rem"
        width="90%"
        display={{base:"none",md:"none",lg:"flex"}}
        justifyContent="center"
        alignItems="center"
      >
        <Image src="https://tpc.googlesyndication.com/simgad/10056509806482740393?"></Image>
      </Box>
    </>
  );
};

export default Traveltips;
