import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import {
  Box,
  Image,
  Stack,
  HStack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { IoLocationSharp } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";
import { useToast } from '@chakra-ui/react'

const Singlehotel = () => {
  const {isAuthenticated} = useAuth0();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { hotelId } = useParams();
  const [hotel, setHotel] = useState(null);
  const toast = useToast()
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

  const loginAleart= ()=>{
    toast({
      title: 'Please Login First!',
      status: 'error',
      duration: 4000,
      isClosable: true,
    })
  }
  return (
    <Box
      m="auto"
      mt="5rem"
      w="90%"
      h="max-content"
      mb="5rem"
      display={{ base:"block", md:"flex",lg:"flex"}}
      gap="30px"
    >
      <Stack w={{base:"100%",md:"60%",lg:"50%"}}>
        <Image
          width={{ base: "100%", lg: "558px" }}
          h="300"
          src={hotel?.images_large[0]}
        />
        <HStack >
        <Image width={{base:"50%",md:"52%",lg:"44%"}} h="120" src={hotel?.images_large[2]} />
        <Image width={{base:"47%",md:"50%",lg:"43%"}} h="120" src={hotel?.images_large[3]} />
        </HStack>
       
      </Stack>
      <Stack  w={{base:"100%",md:"45%",lg:"40%"}}>
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
       {isAuthenticated ? <Button
          w="43%"
          colorScheme="blue"
          size="md"
          fontWeight="bold"
          _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
          _active={{ transform: "scale(0.95)" }}
          _focus={{ outline: "none" }}
          onClick={onOpen}
        >
          BOOK NOW
        </Button>:<Button
          w="43%"
          colorScheme="blue"
          size="md"
          fontWeight="bold"
          _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
          _active={{ transform: "scale(0.95)" }}
          _focus={{ outline: "none" }}
          onClick={loginAleart}
        >
          BOOK NOW
        </Button> }
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
      <Modal isOpen={isOpen} onClose={onClose} size={{base:"sm",md:"md",lg:"lg"}}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader m="auto">Congratulations🥳</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign={"center"}>
           <Text fontWeight="medium" fontSize={"lg"}> Your booking has confirmed !</Text>
          </ModalBody>

          <ModalFooter>
           <Link to="/"><Button colorScheme='blue' mr={3} >
              Explore more !
            </Button></Link> 
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Singlehotel;
