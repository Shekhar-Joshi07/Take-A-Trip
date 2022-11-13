import React from 'react'
import {
    Box,
    Heading,
    Image,
    Grid,
    VStack,
    Link,
   
  } from "@chakra-ui/react";
const Footer = () => {
  return (
    <>
    <Box  bg="gray.100" marginTop="5rem" pr={5} pl={5}  width="100%" height="500px">
        <Grid fontWeight="normal" templateColumns='repeat(5, 1fr)' gap={6}>

            <Box paddingBottom="300px" width="100%" height="400px"  >
                <Image marginLeft="25px" boxSize="70%" src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg"></Image>
                 </Box>
            <Box width="100%" height="400px" >
               <Heading marginLeft="85px" mb={3} mt={5} as="h5" size="sm">Company</Heading>
               <VStack  spacing="18px">
                <Link color="teal.400">About</Link>
                <Link color="teal.400">Jobs</Link>
                <Link color="teal.400">List your property</Link>
                <Link color="teal.400">Partnership</Link>
                <Link color="teal.400">Newsroom</Link>
                <Link color="teal.400">Investor Relations</Link>
                <Link color="teal.400">Site Map</Link>
                <Link color="teal.400">Orbitz</Link>
                <Link color="teal.400"> Advertising</Link>
               </VStack>
            </Box>
            <Box width="100%" height="400px" >
            <Heading  marginLeft="88px" mb={3} mt={5} as="h5" size="sm">Explore</Heading>
           
               <VStack  spacing="18px">
                <Link color="teal.400">Hotels in US</Link>
                <Link color="teal.400">Vacation Rentals in US</Link>
                <Link color="teal.400">Car Rentals in US</Link>
                <Link color="teal.400">Domestic Flights</Link>
                <Link color="teal.400">Vacation Package in US</Link>
                <Link color="teal.400">Orbitz Reviews</Link>
                <Link color="teal.400">Orbitz Coupons</Link>
                <Link color="teal.400">LGBTQ Travel</Link>
                <Link color="teal.400"> Travel Blog</Link>
               </VStack>
            </Box>
            <Box width="100%" height="400px" >
            <Heading  marginLeft="95px" mb={3} mt={5} as="h5" size="sm">Policies</Heading>
          
               <VStack  spacing="18px">
                <Link color="teal.400">Privacy Policy</Link>
                <Link color="teal.400">Term of Use</Link>
                <Link color="teal.400">Vibro terms and conditions</Link>
                <Link color="teal.400">Orbitz Rewards Term</Link>
                <Link color="teal.400">Don't sell my personal info.</Link>

               </VStack>
            </Box>
            <Box width="100%" height="400px" >
            <Heading  marginLeft="100px" mb={3} mt={5} as="h5" size="sm">Help</Heading>
            
               <VStack  spacing="18px">
                <Link color="teal.400">Support</Link>
                <Link color="teal.400">Use an Orbitz coupon</Link>
                <Link color="teal.400">Cancel your hotel</Link>
                <Link color="teal.400">Cancel your flight</Link>
                <Link color="teal.400">Refund timelines</Link>
               
               </VStack>
            </Box>


        </Grid>

    </Box>

    <Box  border="1px solid gray">

    </Box>
    <Box display="flex" flexDirection="column" height="100px" width="90%" justifyContent="center"
    alignItems="center" >
        
        <p style={{fontSize:"15px", color:"gray",lineHeight:"28px"}} >© 2022 Orbitz, LLC, an Expedia Group Company. All rights reserved. </p>
        <p style={{fontSize:"15px", color:"gray"}} > Orbitz, Orbitz.com, and the Orbitz logo are trademarks or registered trademarks of Orbitz, LLC. CST# 2083930-50.</p>
    </Box>

    </>
    
  )
}

export default Footer