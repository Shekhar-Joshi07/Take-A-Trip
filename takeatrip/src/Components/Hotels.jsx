import React, { useEffect, useState } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import axios from "axios";
import { Box, Grid, Image, Text, Tag, TagLabel } from "@chakra-ui/react";
const Hotels = () => {
  const location = useLocation();

  const res = location.state.searchdata;

  return (
    // <div>
    //   <h1>Search Results</h1>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Name</th>
    //         <th>State</th>
    //         <th>Country</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {res.map((result) => (
    //         <tr key={result.id}>
    //           <td>{result.title}</td>
    //           <td>{result.state}</td>
    //           <td>{result.country}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <>
      <Box w="90%" mt="2" h="max-content" px="20px">
        <Text as={"i"} fontSize="md">
          Results are based on your search🔍...
        </Text>
      </Box>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap="6"
        py="30px"
        w={{ base: "85%", md: "85%", lg: "80%" }}
        m="auto"
        h="max-content"
      >
        {res.map((el, id) => {
          return (
            <Link to={`/singleHotel/${el.id}`}>
              <Box
                key={id}
                rounded="3xl"
                bgColor="white"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="start"
                boxShadow="2xl"
                p={{ base: "20px", md: "30px", lg: "40px" }}
                textAlign="start"
                transition="all .5s ease-in-out"
               _hover={{ transform: "scale(1.1)" }}
              >
                <Text fontSize="xs" color="gray">
                  Ref ID:#{el.id}{" "}
                </Text>
                <Image border="5px solid white" src={el.images_medium[0]} />
                <Text
                  fontWeight="semibold"
                  fontSize={{ base: "xs", md: "lg", lg: "lg" }}
                  color="gray.700"
                  mr={2}
                >
                  {el.title}
                </Text>
                <Text display="flex" gap="8px" fontSize="lg">
                  ₹{(el.max_price_in_usd * 83).toFixed(2)}{" "}
                  <Text m="auto" fontSize="xs" color="gray">
                    per night
                  </Text>
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg", lg: "lg" }}
                  color={{ base: "red", md: "blue", lg: "green" }}
                >
                  {el.city?.charAt(0).toUpperCase() + el.city?.slice(1)}
                </Text>
                <Text as="i" fontSize="sm" color="gray.600">
                  {el.state},{" "}
                  {el.country?.charAt(0).toUpperCase() + el.country?.slice(1)}
                </Text>{" "}
                <br />
                <Tag
                  size={{ base: "sm", md: "md", lg: "md" }}
                  colorScheme={"green"}
                  variant="solid"
                >
                  <TagLabel>{el.prop_tags}</TagLabel>
                </Tag>
              </Box>
            </Link>
          );
        })}
      </Grid>
    </>
  );
};

export default Hotels;
