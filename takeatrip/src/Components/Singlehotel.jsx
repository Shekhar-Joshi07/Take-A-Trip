import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Image,
  Stack,
  HStack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";
const Singlehotel = () => {
  const { hotelId } = useParams();
  const [hotel, setHotel] = useState(null);
  useEffect(() => {
    fetch(`https://long-plum-mite-cape.cyclic.app/results/${hotelId}`)
      .then((response) => response.json())
      .then((data) => {
        setHotel(data);
        console.log("data", data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <Box
      m="auto"
      mt="5rem"
      w="90%"
      h="max-content"
     
      display="flex"
      gap="30px"
    >
      <Stack w="50%">
        <Image
          width={{ base: "100%", lg: "558px" }}
          h="300"
          src={hotel?.images_large[0]}
        />
        <Image width={"35%"} h="100" src={hotel?.images_large[2]} />
        <Image width={"35%"} h="100" src={hotel?.images_large[3]} />
      </Stack>
      <Stack  w="40%">
        <Heading as={"h3"} fontSize="4xl">
          {hotel?.title}
        </Heading>
        <Heading
          color="green.800"
          as={"code"}
          fontWeight="normal"
          fontSize="4xl"
        >
          ₹{(hotel?.max_price_in_usd * 83).toFixed(2)} 💸
        </Heading>
        <HStack px="2">
          <IoLocationSharp color="darkred" />
          <Text color="gray.600" fontSize={"xl"}>
            {hotel?.city}, {hotel?.state}, {hotel?.country}
          </Text>
        </HStack>
        <Text fontWeight="bold" color="blue.800" fontSize={"2xl"}>
          {" "}
          Total Rooms: {hotel?.number_of_rooms}{" "}
        </Text>
        <Text fontWeight="bold" color="red.800" fontSize={"2xl"}>
          Total Bathrooms: {hotel?.number_of_bathrooms}
        </Text>
        <Button
          w="43%"
          colorScheme="blue"
          size="md"
          fontWeight="bold"
          _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
          _active={{ transform: "scale(0.95)" }}
          _focus={{ outline: "none" }}
        >
          BOOK NOW
        </Button>
        <br />
        <Text color={"gray.600"}>
          Nestled in the south of Goa is a home away from home. Keeping in mind
          that one would come to Goa to get close to nature and close to the
          beach. We have to offer a holiday apartment with one bedroom, living
          area, dining, kitchen and a small balcony just overlooking the pool.
          The apartment is in a secured gated complex just across the road from
          the sands of Benaulim Beach. Literally, a hop, skip and a jump from
          the main gate. Benaulim Beach is one of the most beautiful beaches in
          Goa besides the Sun, Sand, and Surf the location of the holiday
          apartment provides scenic views of sand dunes, fields and ponds with
          aqua as well as botanical life in it.
        </Text>
      </Stack>
    </Box>
  );
};

export default Singlehotel;
