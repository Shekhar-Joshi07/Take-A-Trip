import React,{useState} from "react";
import { useNavigate} from "react-router-dom";
import axios from 'axios'
import {
  Heading,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
  Input,
  Checkbox,
  Stack,
  Button,
  Menu,
  MenuItem,
  Image,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import "../Components/banner.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
const Banner = () => {
  const [q, setQ] = useState(" ")
  const [searchdata,setSearchdata ] = useState(null)
  const [loading,setLoading] = useState(false)
   const navigate = useNavigate()
  const  handleInputChange = (e)=>{
    setQ(e.target.value)
  };
  const handleSearch = async(e)=>{
      setLoading(true)
    try {
      const res = await axios.get(`https://long-plum-mite-cape.cyclic.app/results?q=${q}`)
      const searchdata = res.data;
      console.log("search",searchdata)
      setSearchdata(searchdata)
      navigate('/hotels', { state: { searchdata } });
    } catch (error) {
      console.log("error",error);
      
    }
     
     
  };
 

   
   
  return (
    <>
      <Box 
      display="flex"
       justifyContent="center"
        alignItems="center"
       maxW="100%"
       height={{base:"300px",md:"480px",lg:"500px"}}
       pt={{base:"0px",md:"30px",lg:"0px"}}
       pb="80px"
       backgroundImage={`url("https://forever.travel-assets.com/flex/flexmanager/images/2021/08/19/ORB_LMLaborDay_imgB_1920x1440_20210813.jpg")`}
       backgroundSize="cover"
       backgroundPosition="bottom"
       >
        <Box
          boxShadow="xl"
          width={{base:"100%",md:"85%",lg:"80%"}}
          height={{base:"420px",md:"425px",lg:"320px"}}
        
          bg="white"
          margin="auto"
         
          paddingLeft={{sm:"45px",md:"20px",lg:"20px"}}
          paddingRight={{sm:"45px",md:"20px",lg:"20px"}}
        >
          <Tabs size={{base:"sm",md:"md",lg:"lg"}}   align="center">
            <TabList overflowX={{base:"auto",md:"unset",lg:"unset"}}>
              <HStack spacing="24px">
                <Tab>Stays</Tab>
                <Tab>Flights</Tab>
                <Tab>Cars</Tab>
                <Tab>Packages</Tab>
                <Tab>Things to do </Tab>
                <Tab> Cruises</Tab>
              </HStack>
            </TabList>

            <Box
              display={{base:"none",md:"none",lg:"flex"}}
              width="280px"
              justifyContent="space-between"
              alignItem="center"
              fontSize="16px"
              marginRight="-30px"
              paddingLeft="14px"
              marginTop="20px"
              marginBottom="-10px"
            >
            <Text as={"code"} >Check-in</Text> 
            <Text  as={"code"}>Check-out</Text>
            </Box>

            <TabPanels>
              
              <TabPanel>
                <Stack direction={{base:"column",md:"column",lg:"row"}}  spacing="12px">
                  <Input
                    onChange={handleInputChange}
                    htmlSize={40}
                    width="auto"
                    placeholder="Going to"
                    size="lg"
                  />

                  <Input
                    onChange={handleInputChange}
                    placeholder="Select Date and Time"
                    htmlSize={40}
                    width="auto"
                    size="lg"
                    type="date"
                  />
                  <Input
                   onChange={handleInputChange}
                    placeholder="Select Date and Time"
                    htmlSize={40}
                    width="auto"
                    size="lg"
                    type="date"
                  />
                  <Input
                   onChange={handleInputChange}
                    placeholder="Travelers"
                    htmlSize={20}
                    width="auto"
                    size="lg"
                  />
                </Stack>
              </TabPanel>
              <TabPanel>
              <Stack direction={{base:"column",md:"column",lg:"row"}}  spacing="12px">
                  <Input
                    htmlSize={40}
                    width="auto"
                    placeholder="Going to"
                    size="lg"
                  />

                  <Input
                  
                    placeholder="Select Date and Time"
                    htmlSize={40}
                    width="auto"
                    size="lg"
                    type="date"
                  />
                  <Input
                    placeholder="Select Date and Time"
                    htmlSize={40}
                    width="auto"
                    size="lg"
                    type="date"
                  />
                  <Input
                    placeholder="Travelers"
                    htmlSize={20}
                    width="auto"
                    size="lg"
                  />
                </Stack>
              </TabPanel>
              <TabPanel>
               <Stack direction={{base:"column",md:"column",lg:"row"}}  spacing="12px">
                  <Input
                    htmlSize={40}
                    width="auto"
                    placeholder="Going to"
                    size="lg"
                  />

                  <Input
                    placeholder="Select Date and Time"
                    htmlSize={40}
                    width="auto"
                    size="lg"
                    type="date"
                  />
                  <Input
                    placeholder="Select Date and Time"
                    htmlSize={40}
                    width="auto"
                    size="lg"
                    type="date"
                  />
                  <Input
                    placeholder="Travelers"
                    htmlSize={20}
                    width="auto"
                    size="lg"
                  />
                </Stack>
              </TabPanel>
              <TabPanel>
               <Stack direction={{base:"column",md:"column",lg:"row"}}  spacing="12px">
                  <Input
                    htmlSize={40}
                    width="auto"
                    placeholder="Going to"
                    size="lg"
                  />

                  <Input
                    placeholder="Select Date and Time"
                    htmlSize={40}
                    width="auto"
                    size="lg"
                    type="date"
                  />
                  <Input
                    placeholder="Select Date and Time"
                    htmlSize={40}
                    width="auto"
                    size="lg"
                    type="date"
                  />
                  <Input
                    placeholder="Travelers"
                    htmlSize={20}
                    width="auto"
                    size="lg"
                  />
                </Stack>
              </TabPanel>
              <TabPanel>
               <Stack direction={{base:"column",md:"column",lg:"row"}}  spacing="12px">
                  <Input
                    htmlSize={40}
                    width="auto"
                    placeholder="Going to"
                    size="lg"
                  />

                  <Input
                    placeholder="Select Date and Time"
                    htmlSize={40}
                    width="auto"
                    size="lg"
                    type="date"
                  />
                  <Input
                    placeholder="Select Date and Time"
                    htmlSize={40}
                    width="auto"
                    size="lg"
                    type="date"
                  />
                  <Input
                    placeholder="Travelers"
                    htmlSize={20}
                    width="auto"
                    size="lg"
                  />
                </Stack>
              </TabPanel>
              <TabPanel>
               <Stack direction={{base:"column",md:"column",lg:"row"}}  spacing="12px">
                  <Input
                    htmlSize={40}
                    width="auto"
                    placeholder="Going to"
                    size="lg"
                  />

                  <Input
                    placeholder="Select Date and Time"
                    htmlSize={40}
                    width="auto"
                    size="lg"
                    type="date"
                  />
                  <Input
                    placeholder="Select Date and Time"
                    htmlSize={40}
                    width="auto"
                    size="lg"
                    type="date"
                  />
                  <Input
                    placeholder="Travelers"
                    htmlSize={20}
                    width="auto"
                    size="lg"
                  />
                </Stack>
              </TabPanel>
            </TabPanels>
            
          </Tabs>
       

          <Stack ml={4} spacing={5} direction="row">
            <Checkbox colorScheme="blue">Add a flight</Checkbox>
            <Checkbox colorScheme="blue">Add a car</Checkbox>
          </Stack>

          <Box
            display="flex"
            mt={5}
            justifyContent="center"
            alignItems="centre"
          >
            <Button
              isLoading ={loading}
              onClick={handleSearch}
              size="md"
              height="48px"
              width="200px"
              margin="auto"
              bg="#c83259"
              color="white"
              variant="none"
              _hover={{ backgroundColor: "green.400" }}
            >
              Search
            </Button>
          </Box>
          
        </Box>
        
      </Box>
    </>
  );
};

export default Banner;
