import React from "react";
import {
  Box,
  Heading,
  ListItem,
  UnorderedList,
  Input,
  HStack,
  Select,
  Button,
} from "@chakra-ui/react";
const Bottom = () => {
  return (
    <>
      <Box
        boxShadow="base"
        rounded="md"
        bg="white"
        height="350px"
        margin="auto"
        marginTop="5rem"
        width="90%"
        display="flex"
        gap="25px"
        pr={10}
      >
        <Box
          width="32%"
          background="url(https://a.travel-assets.com/mad-service/footer/marquee/ORB_App_Footer_v1.jpg) center/cover no-repeat"
        ></Box>
        <Box width="48%" pt={5}>
          <Heading Heading as="h4" size="lg">
            Rewards are waiting for you in the Orbitz app{" "}
          </Heading>
          <br />
          <UnorderedList>
            <ListItem color="gray">
              Earn 4% back when you book your hotel in app, vs. 3% on site
            </ListItem>
            <ListItem color="gray">
              Get flight status and gate number notifications
            </ListItem>
            <ListItem color="gray">
              Have questions about your stay? Message your hotel right in the
              app
            </ListItem>
          </UnorderedList>
  
          <Heading lineHeight={2} as="h4" size="md">
            Text yourself a download link
          </Heading>
          <p style={{ color: "gray", marginBottom: "5px" }}>Country code</p>
          <HStack spacing="20px">
            <Select color="gray" width="32%" placeholder="Choose code">
              <option value="+54,Argentina">Argentina +54</option>
              <option value="+61,Australia">Australia +61</option>
              <option value="+43,Austria">Austria +43</option>
              <option value="+32,Belgium">Belgium +32</option>
              <option value="+55,Brazil">Brazil +55</option>
              <option value="+1,Canada">Canada +1</option>
              <option value="+45,Denmark">Denmark +45</option>
              <option value="+358,Finland">Finland +358</option>
              <option value="+33,France">France +33</option>
              <option value="+49,Germany">Germany +49</option>
              <option value="+852,HongKong">Hong Kong SAR +852</option>
              <option value="+91,India">India +91</option>
              <option value="+353,Ireland">Ireland +353</option>
              <option value="+39,Italy">Italy +39</option>
              <option value="+81,Japan">Japan +81</option>
              <option value="+52,Mexico">Mexico +52</option>
              <option value="+31,Netherlands">Netherlands +31</option>
              <option value="+64,New_Zealand">New Zealand +64</option>
              <option value="+47,Norway">Norway +47</option>
              <option value="+63,Philippines">Philippines +63</option>
              <option value="+65,Singapore">Singapore +65</option>
              <option value="+82,South_Korea">South Korea +82</option>
              <option value="+34,Spain">Spain +34</option>
              <option value="+46,Sweden">Sweden +46</option>
              <option value="+41,Switzerland">Switzerland +41</option>
              <option value="+886,Taiwan">Taiwan +886</option>
              <option value="+66,Thailand">Thailand +66</option>
              <option value="+44,United_Kingdom">United Kingdom +44</option>
              <option value="+1,USA">USA +1</option>
            </Select>
            <Input
              htmlSize={13}
              width="auto"
              placeholder="Phone number"
              size="md"
            />

            <Button
              bg="#c83259"
              color="white"
              variant="solid"
              _hover={{ backgroundColor: "green.400" }}
            >
              Get the app
            </Button>
            <Heading as="h6" size="sm">
             
              Scan the QR code
            </Heading>
          </HStack>
          <p style={{fontSize:"13px",color:"gray", marginTop:"10px" }}>By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</p>
        </Box>

        <Box
          marginTop="2rem"
          height="200px"
          width="18%"
          p={5}
          background="url(https://a.travel-assets.com/mad-service/qr-code/portfolio_app_landing/qr_app_landing_footer_orbitz.png) center/cover no-repeat"
        ></Box>
      </Box>
    </>
  );
};

export default Bottom;
