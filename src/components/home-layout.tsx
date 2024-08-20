import { Box, Flex } from "@chakra-ui/react";
import home1 from "@/assets/home-1.png";
import HomeNavbar from "./navbar";
import Image from "next/image";

export interface HomeLayoutProps {
  children: React.ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <Flex h="100vh" w="100vw" bg="darker">
      <Box w="50%" h="100%">
        <Image src={home1} alt="" style={{ width: "90%", height: "100%", objectFit: "cover" }} />
      </Box>
      <Box w="50%" h="100%" pos="relative">
        {children}
      </Box>

      <HomeNavbar />
    </Flex>
  );
}

export default HomeLayout;
