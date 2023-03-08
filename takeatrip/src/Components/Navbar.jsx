import React from "react";
import {
  Box,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
  Container,
  HStack,Text
   

} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaHotel,FaCar,FaStickyNote} from "react-icons/fa";
import { SlPlane } from "react-icons/sl";
import { MdLuggage,MdDirectionsBoatFilled,MdAccountCircle } from "react-icons/md"

import{BsFillHandbagFill} from "react-icons/bs"
import {BiSearchAlt2} from "react-icons/bi"
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <header>

      {/* desktop view */}
      <Box
        bg="#00253C"
        display="flex"
        justifyContent="space-between"
        alignItem="centre"
        width='100%'
        position="relative"
        height={{base:"80px",lg:"78px"}}
    
       >
        <Box display="flex"
         
          justifyContent="space-evenly" 
          alignItems='center'
          width={{base:"250px",md:"300px",lg:"350px"}}
          
           ml={{base:2,md:8,lg:9}}
           mt={1}
           mb={1}>
            
        <Link to="/"><Image mr={{base:"30px",md:"0px",lg:"0px"}}  w={{base:"140px",lg:"125px"}} src="./takeatrip.png" /></Link>  
          <Menu > 
            <MenuButton display={{base:"none",md:"block",lg:"block"}}    fontSize="14px"  as={Button} rightIcon={<ChevronDownIcon />}
            color="white" _hover={{ color: 'teal.300' }} variant="none" >
              More Actions
            </MenuButton>
            <MenuList opacity="1">
              <MenuItem _hover={{ color: 'teal.400' }}>
                <HStack spacing={3}><FaHotel/><Text>Stay</Text></HStack>
             
              </MenuItem>
              <MenuItem  _hover={{ color: 'teal.400' }}><HStack spacing={3} ><SlPlane/><Text>Flights</Text></HStack></MenuItem>
              <MenuItem _hover={{ color: 'teal.400' }}> <HStack spacing={3}><MdLuggage/><Text> Packages</Text></HStack></MenuItem>
              <MenuItem _hover={{ color: 'teal.400' }}> <HStack spacing={3}><FaCar/> <Text>Cars</Text></HStack></MenuItem>
              <MenuItem _hover={{ color: 'teal.400' }}> <HStack spacing={3}><MdDirectionsBoatFilled/> <Text>Cruises</Text></HStack></MenuItem>
              <MenuItem _hover={{ color: 'teal.400' }}> <HStack spacing={3}><FaStickyNote/> <Text>Things to do</Text></HStack></MenuItem>
              <MenuItem _hover={{ color: 'teal.400' }}>  <HStack spacing={3}><Text></Text>Deals</HStack></MenuItem>
              <MenuItem _hover={{ color: 'teal.400' }}>  <HStack spacing={3}><Text></Text>Groups & meetings</HStack></MenuItem>
              <MenuItem _hover={{ color: 'teal.400' }}>  <HStack spacing={3}><Text></Text>Travel Blog</HStack></MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box 
        
        display='flex'
        width={{base:"210px", md:"430px", lg:"530px"}} 
        pr={{base:"0px",md:"10px",lg:"0px"}}
        pl={{base:"10px",md:"0px",lg:"0px"}}
        gap='7px'
        alignItems="center"
        color="white"
         justifyContent={{base:"space-evenly",md:"center",lg:"center"}}
        
        

        >
          <Button  display={{base:"none",md:"block",lg:"block"}}  fontSize="14px" cursor='pointer' variant="none"  _hover={{ color: 'teal.300' }}>Español</Button>
          <Button display={{base:"none",md:"block",lg:"block"}}  fontSize="14px" variant="none"  _hover={{ color: 'teal.300' }}>List your property {BsFillHandbagFill}</Button>
          <Button display={{base:"none",md:"block",lg:"block"}}  fontSize="14px" variant="none"  _hover={{ color: 'teal.300' }}>Support</Button>
          <Button display={{base:"none",md:"block",lg:"block"}}  fontSize="14px" variant="none"  _hover={{ color: 'teal.300' }}>Trips</Button>
          <Button display={{base:"none",md:"block",lg:"block"}}  fontSize="14px" variant="none"  _hover={{ color: 'teal.300' }} onClick={onOpen} > Sign in </Button>
          {/* mobile navs */}
          <Button   variant={"unstyled"} display={{base:"block",md:"none",lg:"none"}}   ></Button>
           
          <Menu > 
            <MenuButton display={{base:"block",md:"none",lg:"none"}}     fontSize="14px"  as={Button} variant="none" >
             <BiSearchAlt2 size={"22px"} />
            </MenuButton>
            <MenuList color="black" opacity="1">
              <MenuItem  _hover={{ color: 'teal.400' }}>
                <HStack spacing={3}><FaHotel/><Text>Stay</Text></HStack>
             
              </MenuItem>
              <MenuItem  _hover={{ color: 'teal.400' }}><HStack spacing={3} ><SlPlane/><Text>Flights</Text></HStack></MenuItem>
              <MenuItem _hover={{ color: 'teal.400' }}> <HStack spacing={3}><MdLuggage/><Text> Packages</Text></HStack></MenuItem>
              <MenuItem _hover={{ color: 'teal.400' }}> <HStack spacing={3}><FaCar/> <Text>Cars</Text></HStack></MenuItem>
              <MenuItem _hover={{ color: 'teal.400' }}> <HStack spacing={3}><MdDirectionsBoatFilled/> <Text>Cruises</Text></HStack></MenuItem>
              <MenuItem _hover={{ color: 'teal.400' }}> <HStack spacing={3}><FaStickyNote/> <Text>Things to do</Text></HStack></MenuItem>
              <MenuItem _hover={{ color: 'teal.400' }}>  <HStack spacing={3}><Text></Text>Deals</HStack></MenuItem>
              <MenuItem _hover={{ color: 'teal.400' }}>  <HStack spacing={3}><Text></Text>Groups & meetings</HStack></MenuItem>
              <MenuItem _hover={{ color: 'teal.400' }}>  <HStack spacing={3}><Text></Text>Travel Blog</HStack></MenuItem>
            </MenuList>
          </Menu>






          <Button variant={"unstyled"} display={{base:"block",md:"none",lg:"none"}}  onClick={onOpen} > <BsFillHandbagFill size={"22px"}/> </Button>
          <Button variant={"unstyled"} display={{base:"block",md:"none",lg:"none"}}   onClick={onOpen} > <MdAccountCircle size={"22px"}/> </Button>
          <Modal isOpen={isOpen} onClose={onClose} size={{base:"sm",md:"md",lg:"lg"}}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Container fontSize='22px'  fontWeight={{base:"semibold",md:"bold",lg:"bold"}}> Members can access discounts, points and special features </Container>
            
            </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Button  size="md"
              height="38px"
              width={{base:"335px",md:"400px",lg:"460px"}}
              margin="auto"
              bg="#c83259"
              color="white"
              variant="none"
              _hover={{ backgroundColor: "blue.400" }} >Sign in</Button> 
            
              <Heading mt={4} marginLeft="30%" cursor="pointer" color="teal.500" as="h5" size="sm"  _hover={{ color: 'teal.500' }}> create a free account</Heading>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
        </Modal>
        </Box>
      </Box>


      {/* mobile view */}


      
    </header>
  );
};

export default Navbar;
