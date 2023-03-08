import React from "react";
import { Heading, Box, Grid, Image,} from "@chakra-ui/react";
const Midsection = () => {
  return (
    <>
      <Box
        boxShadow="base"
        rounded="md"
        bg="white"
        width="89%"
        height="auto"
        margin="auto"
        pb="20px"
        marginBottom="30px"
      >
        <Grid marginTop={{base:"9rem",md:"2rem",lg:"2rem"}} templateColumns={{base:"repeat(1, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(3, 1fr)"}} gap={10}>
          <Box
            w={"100%"}
            h={{base:"190px",md:"170px",lg:"200px"}}
            bgGradient="linear(to-b, #ffff, #8080)"
            boxShadow="xl"
            p="6"
            rounded="md"
            bg="white"
           
          >
            <Image  w={{base:"350px",md:"490px",lg:"550px"}} m="auto" src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_TravelAsYouAre_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"></Image>
          </Box>
          <Box
            w="100%"
            h={{base:"190px",md:"170px",lg:"200px"}}
            bgGradient="linear(to-b, #ffff, #8080)"
            boxShadow="xl"
            p="6"
            rounded="md"
            bg="white"
          >
            <Image w={{base:"350px",md:"450px",lg:"550px"}} m="auto"  src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_Rewards_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"></Image>
          </Box>
          <Box
            w="100%"
            h={{base:"190px",md:"170px",lg:"200px"}}
            bgGradient="linear(to-b, #ffff, #8080)"
            boxShadow="xl"
            p="6"
            rounded="md"
            bg="white"
          >
            <Image   w={{base:"350px",md:"450px",lg:"550px"}} m="auto" src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_InsiderPrices_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"></Image>
          </Box>
        </Grid>
      </Box>

      <Box  margin="auto" width="90%" pl={3}>
        <Heading as="h4" size="lg" mb="3">
          Featured offers
        </Heading>
      </Box>

      <Box color="white" width="90%" margin="auto" pr={3} pl={3}>
        <Grid marginBottom="5rem" templateColumns={{base:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(4, 1fr)"}} gap={8}>
          <Box
            background="linear-gradient(to right, rgba(3, 3, 3, 0.475), rgba(49, 49, 49, 0.482), rgba(0, 0, 0, 0.475)),url(https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_LastMinute_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh) center/cover no-repeat"
            w="100%"
            h="200px"
            paddingTop="8rem"
            pl={2}
            filter="brightness(1)"
          >

            <Heading opacity={1} textShadow="1px 1px #000" as="h4" size="lg" >
           
              Last-minute deals
            </Heading>
            <p textShadow="1px 1px #000">Getaway today</p>
          </Box>
          <Box
            background="linear-gradient(to right, rgba(3, 3, 3, 0.475), rgba(49, 49, 49, 0.482), rgba(0, 0, 0, 0.475)),url(https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_AllInclusive_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh) center/cover no-repeat"
            w="100%"
            h="200px"
            paddingTop="6rem"
            pl={2}
          >
            <Heading mt={8} textShadow="1px 1px #000" as="h4" size="lg">
              All-inclusive resorts
            </Heading>
            <p textShadow="1px 1px #000">Enjoy sun and fun</p>
          </Box>
          <Box
            background="linear-gradient(to right, rgba(3, 3, 3, 0.475), rgba(49, 49, 49, 0.482), rgba(0, 0, 0, 0.475)),url(https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_MOD_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh) center/cover no-repeat"
            w="100%"
            h="200px"
            paddingTop="8rem"
            pl={2}
          >
            <Heading textShadow="1px 1px #000" as="h4" size="lg">
              Insider prices
            </Heading>
            <p textShadow="1px 1px #000">Members get rewarded</p>
          </Box>
          <Box
            background="linear-gradient(to right, rgba(3, 3, 3, 0.475), rgba(49, 49, 49, 0.482), rgba(0, 0, 0, 0.475)),url(https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_JetAndReset_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh) center/cover no-repeat"
            w="100%"
            h="200px"
            paddingTop="8rem"
            pl={2}
          >
            <Heading textShadow="1px 1px #000" as="h4" size="lg">
              Jet and reset
            </Heading>
            <p textShadow="1px 1px #000">Fly somewhere beachy and warm</p>
          </Box>
        </Grid>
      </Box>



      <Box   color="white" display={{base:"none",md:"none",lg:"flex"}}  paddingLeft="80px" gap="17px"  width={{base:"90%",md:"89%",lg:"100%"}} m={{base:"auto",md:"unset",lg:"unset"}} height="250px" margin="auto" >
       
        <Box  
        
            w="80%"
            h="100%"
            paddingTop="12rem"
            pl={4}
            
            background="
            linear-gradient(to right, rgba(3, 3, 3, 0.475), rgba(49, 49, 49, 0.482), rgba(0, 0, 0, 0.475)), url(https://forever.travel-assets.com/flex/flexmanager/images/2020/12/03/ORB_Storefront_Deals_2740x1484-V1.jpg) center/cover no-repeat"
            >
               <Heading as="h4" size="sm"> Today's top deals</Heading>
               <p>Vacations are even more rewarding with our offers</p>
            </Box>
        <Box  w="25%"
            h="100%"
            background="url(https://tpc.googlesyndication.com/simgad/6378264940813121541?) center/cover no-repeat"
            >
               
            </Box>
            
      </Box>

      <Box marginTop="3rem" width={{base:"91%",md:"90%",lg:"90%"}} paddingLeft={{base:"43px",md:"52px",lg:"76px"}}>
        <Heading as="h3" size={{base:"md",md:"lg",lg:"lg"}}>
        Here to help keep you on the move
        </Heading>
      </Box>

      <Box cursor="pointer" 
      pt={5} margin="auto" width="89%">
         <Grid templateColumns={{base:"'repeat(1, 1fr)'",md:"repeat(1, 1fr)",lg:"repeat(3, 1fr)"}} gap={{base:"35px",md:"45px",lg:"30px"}}>
            <Box _hover={{ backgroundColor: 'blue.500', color:"white" }} width={{base:"90%",md:"96%",lg:"100%"}} h={{base:"100px",md:"100px",lg:"100px"}} m={{base:"auto",md:"auto",lg:"auto"}} pl={2} pb={2}  pr={1} border="1px solid black">
               <Heading lineHeight={2}  as="h4" size="md" > Change or cancle a trip</Heading>
               <p >Make updates to your itinerary or cancle a booking</p>

            </Box>
            <Box _hover={{ backgroundColor: 'blue.500', color:"white" }} width={{base:"90%",md:"96%",lg:"100%"}} h={{base:"100px",md:"100px",lg:"100px"}} m={{base:"auto",md:"auto",lg:"auto"}} pl={2} pb={2}  pr={1}  border="1px solid black">
            <Heading lineHeight={2} as="h4" size="md"> Use a credit or coupon </Heading>
               <p>Apply a coupon code or credit to a new trip</p>
            </Box>
            <Box _hover={{ backgroundColor: 'blue.500', color:"white" }} width={{base:"90%",md:"96%",lg:"100%"}} h={{base:"100px",md:"100px",lg:"100px"}} m={{base:"auto",md:"auto",lg:"auto"}} pl={2} pb={2}  pr={1}  border="1px solid black">
            <Heading lineHeight={2} as="h4" size="md"> Track your refund </Heading>
               <p> Check the status of a refund currently in progress</p>
            </Box>

         </Grid>
      </Box>

    </>
  );
};

export default Midsection;
