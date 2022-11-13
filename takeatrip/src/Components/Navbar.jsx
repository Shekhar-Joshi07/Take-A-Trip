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
   

} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaHotel,FaCar,FaStickyNote} from "react-icons/fa";
import { SlPlane } from "react-icons/sl";
import { MdLuggage,MdDirectionsBoatFilled } from "react-icons/md"
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <header>
      <Box
        bg="#00253C"
        display="flex"
        justifyContent="space-between"
        alignItem="centre"
        width='100%'
        position="relative"
        height="78px"
       >
        <Box display="flex"
        
          justifyContent="space-evenly" 
          alignItems='center'
          width="350px"
           ml={3}
           mr={3}
           mt={1}
           mb={1}>
            
          <Image boxSize="70px" src="./Logo.png" />
          <Menu>
            <MenuButton fontSize="14px"  as={Button} rightIcon={<ChevronDownIcon />}
    color="white" _hover={{ color: 'teal.300' }} variant="none" >
              More Actions
            </MenuButton>
            <MenuList opacity="1">
              <MenuItem _hover={{ color: 'teal.400' }}>
              <FaHotel/>-Stay
              </MenuItem>
              <MenuItem  _hover={{ color: 'teal.400' }}><SlPlane/>-Flights</MenuItem>
              <MenuItem _hover={{ color: 'teal.400' }}><MdLuggage/>-Packages</MenuItem>
              <MenuItem _hover={{ color: 'teal.400' }}><FaCar/>-Cars</MenuItem>
              <MenuItem _hover={{ color: 'teal.400' }}><MdDirectionsBoatFilled/>-Cruises</MenuItem>
              <MenuItem _hover={{ color: 'teal.400' }}><FaStickyNote/>-Things to do</MenuItem>
              <MenuItem _hover={{ color: 'teal.400' }}>Deals</MenuItem>
              <MenuItem _hover={{ color: 'teal.400' }}>Groups & meetings</MenuItem>
              <MenuItem _hover={{ color: 'teal.400' }}>Travel Blog</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box 
        display='flex'
        width="600px" 
        gap='7px'
        alignItems="center"
        color="white"
        paddingLeft="50"
        paddingRight="0"
        

        >
          <Button fontSize="14px" cursor='pointer' variant="none"  _hover={{ color: 'teal.300' }}>Español</Button>
          <Button fontSize="14px" variant="none"  _hover={{ color: 'teal.300' }}>List your property</Button>
          <Button fontSize="14px" variant="none"  _hover={{ color: 'teal.300' }}>Support</Button>
          <Button fontSize="14px" variant="none"  _hover={{ color: 'teal.300' }}>Trips</Button>
          <Button fontSize="14px" variant="none"  _hover={{ color: 'teal.300' }} onClick={onOpen} > Sign in </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Container fontSize='22px'  fontWeight="bold"> Members can access discounts, points and special features </Container>
            
            </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Button  size="md"
              height="38px"
              width="400px"
              margin="auto"
              bg="#c83259"
              color="white"
              variant="none"
              _hover={{ backgroundColor: "blue.400" }} >Sign in</Button> 
            
              <Heading mt={4} marginLeft="30%" cursor="pointer" color="teal.500" as="h5" size="sm"  _hover={{ color: 'teal.300' }}> create a free account</Heading>
            
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
      
    </header>
  );
};

export default Navbar;
