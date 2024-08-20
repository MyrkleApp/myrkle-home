import { Box, Circle, HStack, Image, Text } from "@chakra-ui/react";
import HomeLayout from "./home-layout";

function SelectApp() {
  return (
    <>
      <HomeLayout>
        <Box pos="absolute" top="50%" transform="translateY(-50%)">
          <a href="https://xrpl.myrkle.app" target="_blank">
            <HStack
              bg="secondary"
              w="400px"
              p={7}
              borderRadius="20px"
              border="1px solid transparent"
              cursor="pointer"
              _hover={{ border: "1px solid #ffffff" }}
            >
              <Image src="https://cryptologos.cc/logos/xrp-xrp-logo.png" alt="" h="40px" mr={7} />
              <Text>XRPL</Text>
            </HStack>
          </a>

          <Box mt="30px">
            <a href="https://algorand.myrkle.app" target="_blank">
              <HStack
                bg="secondary"
                w="400px"
                p={7}
                borderRadius="20px"
                border="1px solid transparent"
                cursor="pointer"
                _hover={{ border: "1px solid #ffffff" }}
              >
                <Circle bg="white" mr={7} size="40px">
                  <Image src="https://cdn-icons-png.flaticon.com/512/7504/7504930.png" alt="" />
                </Circle>
                <Text>Algorand</Text>
              </HStack>
            </a>
          </Box>
        </Box>
      </HomeLayout>
    </>
  );
}

export default SelectApp;
