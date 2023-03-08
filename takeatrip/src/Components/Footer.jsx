import React from 'react'
import {
  Heading,
    Image,
    Link,
    Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
   
  } from "@chakra-ui/react";

  
  
const Footer = () => {
 
  return (
    <>
   <Box
      bg={useColorModeValue('gray.50')}
      color={useColorModeValue('#0c8090')}>
      <Container as={Stack} maxW={'7xl'} py={10}>
        <SimpleGrid
        pt="2rem"

          
          templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 2fr' }}
          spacing={"60px"}>
       
            <Box >
              <Image src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg" />
            </Box>
        
          <Stack  lineHeight={7} fontSize={"sm"} align={'flex-start'} mr="auto">
            <Heading  color="black" fontSize={"sm"} fontWeight="bold" >Company</Heading>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Jobs</Link>
            <Link href={'#'}>List your Property</Link>
            <Link href={'#'}>Partnerships</Link>
            <Link href={'#'}>Newsroom</Link>
            <Link href={'#'}>Investor Relations</Link>
            <Link href={'#'}>Advertising</Link>
            <Link href={'#'}>Site Map</Link>
            <Link href={'#'}>Orbitz Rewards</Link>
          </Stack>
          <Stack   w="220px"  lineHeight={7} fontSize={"sm"} align={'flex-start'}>
            <Heading color="black" fontSize={"sm"} fontWeight="bold" >Explore</Heading>
            <Link href={'#'}>Hotels in United States</Link>
            <Link href={'#'}>Vacation Rentals in United States</Link>
            <Link href={'#'}>Car Rentals in United States</Link>
            <Link href={'#'}>Domestic Flights</Link>
            <Link href={'#'}>Vacation Packages in United States</Link>
            <Link href={'#'}>Orbitz Reviews</Link>
            <Link href={'#'}>Orbitz Coupons</Link>
            <Link href={'#'}>LGBTQ Travel</Link>
            <Link href={'#'}>Unique Accommodations</Link>
            <Link href={'#'}>Travel Blog</Link>
          </Stack>
          <Stack lineHeight={7} fontSize={"sm"} align={'flex-start'}>
            <Heading color="black" fontSize={"sm"} fontWeight="bold" >Policies</Heading>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Use</Link>
            <Link href={'#'}>Vrbo terms and conditions</Link>
            <Link href={'#'}>Orbitz Rewards Terms</Link>
            <Link href={'#'}>Your Privacy Choices</Link>
          </Stack>
          <Stack lineHeight={7} fontSize={"sm"} align={'flex-start'}>
            <Heading color="black" fontSize={"sm"} fontWeight="bold" >Help</Heading>
            <Link href={'#'}>Support</Link>
            <Link href={'#'}>Cancel your hotel or vacation rental booking</Link>
            <Link href={'#'}>Cancel your flight</Link>
            <Link href={'#'}>Refund timelines, policies & processes</Link>
            <Link href={'#'}>Use an Orbitz Coupon</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
    <hr />
    <Text color="gray.500" w={{base:"90%",md:"60%",lg:"60%"}} ml={{base:"20px",md:"60px",lg:"60px"}} mt="1rem" mb="1rem" fontSize={'sm'}>
            © 2023 Orbitz, LLC, an Expedia Group Company. All rights reserved. <br/>
              Orbitz, Orbitz.com, and the Orbitz logo are trademarks or registered trademarks of Orbitz, LLC. CST# 2083930-50.
            </Text>

    </>
    
  )
}

export default Footer