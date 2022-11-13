import React from "react";

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
} from "@chakra-ui/react";
import "../Components/banner.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
const Banner = () => {
  return (
    <>
      <div className="poster">
        <Box
          boxShadow="xl"
          width="80%"
          height="320px"
          bg="white"
          margin="auto"
          paddingLeft="20px"
          paddingRight="20px"
        >
          <Tabs align="center">
            <TabList>
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
              display="flex"
              width="280px"
              justifyContent="space-between"
              alignItem="center"
              fontSize="16px"
              marginRight="-30px"
              paddingLeft="14px"
              marginTop="20px"
              marginBottom="-10px"
            >
              <p>Check-in</p>
              <p>Check-out</p>
            </Box>

            <TabPanels>
              <TabPanel>
                <HStack spacing="12px">
                  <Menu>
                    <MenuButton
                      textAlign="start"
                      fontWeight="normal"
                      variant="outline"
                      size="lg"
                      width="394px"
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                    >
                      Going to
                    </MenuButton>
                    <MenuList>
                      <Heading p={3} textAlign="start" as="h5" size="sm">
                        Popular destinations
                      </Heading>
                      <MenuItem minH="48px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://img.icons8.com/bubbles/2x/000000/mumbai.png"
                          alt="Fluffybuns the destroyer"
                          mr="12px"
                        />
                        <span>Mumbai</span>
                      </MenuItem>
                      <MenuItem minH="40px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1c504038542117.5765973d2c44e.jpg"
                          alt="Simon the pensive"
                          mr="12px"
                        />
                        <span>Bangalore</span>
                      </MenuItem>
                      <MenuItem minH="40px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://img.icons8.com/bubbles/2x/000000/new-delhi.png"
                          alt="Simon the pensive"
                          mr="12px"
                        />
                        <span>New Delhi</span>
                      </MenuItem>
                      <MenuItem minH="40px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://e7.pngegg.com/pngimages/356/864/png-clipart-hyderabadi-hut-tata-capital-personal-loan-finance-citibank-hyderabad-miscellaneous-building-thumbnail.png"
                          alt="Simon the pensive"
                          mr="12px"
                        />
                        <span>Hydrabad</span>
                      </MenuItem>
                      <MenuItem minH="40px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://img.freepik.com/free-photo/mesmerizing-scenery-green-mountains-with-cloudy-sky-surface_181624-27189.jpg?w=740&t=st=1668267197~exp=1668267797~hmac=21c4962dfc9253f400ded7f8b2e72cd22be830ffa1bdce4fe4cd676df69da5f1"
                          alt="Simon the pensive"
                          mr="12px"
                        />
                        <span>Dehradun</span>
                      </MenuItem>
                    </MenuList>
                  </Menu>

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
                </HStack>
              </TabPanel>

              <TabPanel>
                <HStack spacing="12px">
                 <Menu>
                    <MenuButton
                      textAlign="start"
                      fontWeight="normal"
                      variant="outline"
                      size="lg"
                      width="394px"
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                    >
                      Going to
                    </MenuButton>
                    <MenuList>
                      <Heading p={3} textAlign="start" as="h5" size="sm">
                        Popular destinations
                      </Heading>
                      <MenuItem minH="48px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://img.icons8.com/bubbles/2x/000000/mumbai.png"
                          alt="Fluffybuns the destroyer"
                          mr="12px"
                        />
                        <span>Mumbai</span>
                      </MenuItem>
                      <MenuItem minH="40px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1c504038542117.5765973d2c44e.jpg"
                          alt="Simon the pensive"
                          mr="12px"
                        />
                        <span>Bangalore</span>
                      </MenuItem>
                      <MenuItem minH="40px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://img.icons8.com/bubbles/2x/000000/new-delhi.png"
                          alt="Simon the pensive"
                          mr="12px"
                        />
                        <span>New Delhi</span>
                      </MenuItem>
                      <MenuItem minH="40px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://e7.pngegg.com/pngimages/356/864/png-clipart-hyderabadi-hut-tata-capital-personal-loan-finance-citibank-hyderabad-miscellaneous-building-thumbnail.png"
                          alt="Simon the pensive"
                          mr="12px"
                        />
                        <span>Hydrabad</span>
                      </MenuItem>
                      <MenuItem minH="40px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://img.freepik.com/free-photo/mesmerizing-scenery-green-mountains-with-cloudy-sky-surface_181624-27189.jpg?w=740&t=st=1668267197~exp=1668267797~hmac=21c4962dfc9253f400ded7f8b2e72cd22be830ffa1bdce4fe4cd676df69da5f1"
                          alt="Simon the pensive"
                          mr="12px"
                        />
                        <span>Dehradun</span>
                      </MenuItem>
                    </MenuList>
                  </Menu>

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
                </HStack>
              </TabPanel>

              <TabPanel>
                <HStack spacing="12px">
                <Menu>
                    <MenuButton
                      textAlign="start"
                      fontWeight="normal"
                      variant="outline"
                      size="lg"
                      width="394px"
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                    >
                      Going to
                    </MenuButton>
                    <MenuList>
                      <Heading p={3} textAlign="start" as="h5" size="sm">
                        Popular destinations
                      </Heading>
                      <MenuItem minH="48px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://img.icons8.com/bubbles/2x/000000/mumbai.png"
                          alt="Fluffybuns the destroyer"
                          mr="12px"
                        />
                        <span>Mumbai</span>
                      </MenuItem>
                      <MenuItem minH="40px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1c504038542117.5765973d2c44e.jpg"
                          alt="Simon the pensive"
                          mr="12px"
                        />
                        <span>Bangalore</span>
                      </MenuItem>
                      <MenuItem minH="40px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://img.icons8.com/bubbles/2x/000000/new-delhi.png"
                          alt="Simon the pensive"
                          mr="12px"
                        />
                        <span>New Delhi</span>
                      </MenuItem>
                      <MenuItem minH="40px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://e7.pngegg.com/pngimages/356/864/png-clipart-hyderabadi-hut-tata-capital-personal-loan-finance-citibank-hyderabad-miscellaneous-building-thumbnail.png"
                          alt="Simon the pensive"
                          mr="12px"
                        />
                        <span>Hydrabad</span>
                      </MenuItem>
                      <MenuItem minH="40px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://img.freepik.com/free-photo/mesmerizing-scenery-green-mountains-with-cloudy-sky-surface_181624-27189.jpg?w=740&t=st=1668267197~exp=1668267797~hmac=21c4962dfc9253f400ded7f8b2e72cd22be830ffa1bdce4fe4cd676df69da5f1"
                          alt="Simon the pensive"
                          mr="12px"
                        />
                        <span>Dehradun</span>
                      </MenuItem>
                    </MenuList>
                  </Menu>

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
                </HStack>
              </TabPanel>
              <TabPanel>
                <HStack spacing="12px">
                <Menu>
                    <MenuButton
                      textAlign="start"
                      fontWeight="normal"
                      variant="outline"
                      size="lg"
                      width="394px"
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                    >
                      Going to
                    </MenuButton>
                    <MenuList>
                      <Heading p={3} textAlign="start" as="h5" size="sm">
                        Popular destinations
                      </Heading>
                      <MenuItem minH="48px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://img.icons8.com/bubbles/2x/000000/mumbai.png"
                          alt="Fluffybuns the destroyer"
                          mr="12px"
                        />
                        <span>Mumbai</span>
                      </MenuItem>
                      <MenuItem minH="40px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1c504038542117.5765973d2c44e.jpg"
                          alt="Simon the pensive"
                          mr="12px"
                        />
                        <span>Bangalore</span>
                      </MenuItem>
                      <MenuItem minH="40px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://img.icons8.com/bubbles/2x/000000/new-delhi.png"
                          alt="Simon the pensive"
                          mr="12px"
                        />
                        <span>New Delhi</span>
                      </MenuItem>
                      <MenuItem minH="40px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://e7.pngegg.com/pngimages/356/864/png-clipart-hyderabadi-hut-tata-capital-personal-loan-finance-citibank-hyderabad-miscellaneous-building-thumbnail.png"
                          alt="Simon the pensive"
                          mr="12px"
                        />
                        <span>Hydrabad</span>
                      </MenuItem>
                      <MenuItem minH="40px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://img.freepik.com/free-photo/mesmerizing-scenery-green-mountains-with-cloudy-sky-surface_181624-27189.jpg?w=740&t=st=1668267197~exp=1668267797~hmac=21c4962dfc9253f400ded7f8b2e72cd22be830ffa1bdce4fe4cd676df69da5f1"
                          alt="Simon the pensive"
                          mr="12px"
                        />
                        <span>Dehradun</span>
                      </MenuItem>
                    </MenuList>
                  </Menu>

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
                </HStack>
              </TabPanel>
              <TabPanel>
                <HStack spacing="12px">
                <Menu>
                    <MenuButton
                      textAlign="start"
                      fontWeight="normal"
                      variant="outline"
                      size="lg"
                      width="394px"
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                    >
                      Going to
                    </MenuButton>
                    <MenuList>
                      <Heading p={3} textAlign="start" as="h5" size="sm">
                        Popular destinations
                      </Heading>
                      <MenuItem minH="48px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://img.icons8.com/bubbles/2x/000000/mumbai.png"
                          alt="Fluffybuns the destroyer"
                          mr="12px"
                        />
                        <span>Mumbai</span>
                      </MenuItem>
                      <MenuItem minH="40px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1c504038542117.5765973d2c44e.jpg"
                          alt="Simon the pensive"
                          mr="12px"
                        />
                        <span>Bangalore</span>
                      </MenuItem>
                      <MenuItem minH="40px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://img.icons8.com/bubbles/2x/000000/new-delhi.png"
                          alt="Simon the pensive"
                          mr="12px"
                        />
                        <span>New Delhi</span>
                      </MenuItem>
                      <MenuItem minH="40px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://e7.pngegg.com/pngimages/356/864/png-clipart-hyderabadi-hut-tata-capital-personal-loan-finance-citibank-hyderabad-miscellaneous-building-thumbnail.png"
                          alt="Simon the pensive"
                          mr="12px"
                        />
                        <span>Hydrabad</span>
                      </MenuItem>
                      <MenuItem minH="40px">
                        <Image
                          boxSize="2rem"
                          borderRadius="full"
                          src="https://img.freepik.com/free-photo/mesmerizing-scenery-green-mountains-with-cloudy-sky-surface_181624-27189.jpg?w=740&t=st=1668267197~exp=1668267797~hmac=21c4962dfc9253f400ded7f8b2e72cd22be830ffa1bdce4fe4cd676df69da5f1"
                          alt="Simon the pensive"
                          mr="12px"
                        />
                        <span>Dehradun</span>
                      </MenuItem>
                    </MenuList>
                  </Menu>

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
                </HStack>
              </TabPanel>
              <TabPanel>
                <HStack spacing="12px">
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
                </HStack>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Stack ml={4} spacing={5} direction="row">
            <Checkbox colorScheme="blue">
              Add a flight
            </Checkbox>
            <Checkbox colorScheme="blue">
              Add a car
            </Checkbox>
          </Stack>

          <Box
            display="flex"
            mt={5}
            justifyContent="center"
            alignItems="centre"
          >
            <Button
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
      </div>
    </>
  );
};

export default Banner;
