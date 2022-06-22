import React, { useEffect } from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from "react-router-dom";

const Homepage = () => {

  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push('/chats');
  }, [history])
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"teal.500"}
        w="100%"
        m="69px 0 15px 0"
        borderRadius="full"
      >
        <Text textAlign="center" fontSize="xl" color={'white'}>
          Sayin
        </Text>
      </Box>
      <Box bg="gray.100" w="100%" p={4} borderRadius="3xl">
        <Tabs variant="unstyled">
          <TabList mb="1.5">
            <Tab
              borderRadius="xl" w='50%'
              _selected={{ color: "white", bg: "teal.500" }}
            >
              Login
            </Tab>
            <Tab
              borderRadius="xl" w="50%"
              _selected={{ color: "white", bg: "teal.500" }}
            >
              Signup
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup/>   
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
