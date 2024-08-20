import { Box, Flex, Text } from "@chakra-ui/react";
import spark1 from "@/assets/landing-page/spark1.png";
import spark2 from "@/assets/landing-page/spark2.png";
import a1 from "@/assets/landing-page/a1.png";
import a2 from "@/assets/landing-page/a2.png";
import a3 from "@/assets/landing-page/a3.png";
import a4 from "@/assets/landing-page/a4.png";
import { MotionBox, MotionImage } from "../motion-elements";
import Image from "next/image";

function SectionA() {
  return (
    <MotionBox
      id="home"
      w="100vw"
      h="100vh"
      pos="relative"
      overflow="hidden"
      initial={{ opacity: 0, y: 200 }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.5, ease: "easeOut" },
      }}
    >
      <Flex
        justify="space-between"
        align="center"
        pos="absolute"
        w="100%"
        top="15%"
      >
        <Image src={spark1} alt="" style={{ width: "calc(50% - 200px)" }} />
        <Text w="450px" textAlign="center" fontSize="45px" fontWeight="bold">
          Your gateway to a{" "}
          <Text as="span" color="success">
            decentralized
          </Text>{" "}
          world
        </Text>
        <Image
          src={spark2}
          alt=""
          style={{ right: 0, width: "calc(50% - 200px)" }}
        />
      </Flex>

      <MotionBox
        pos="absolute"
        bottom={0}
        left={0}
        w="20%"
        initial={{ bottom: -30 }}
        animate={{ bottom: 0, transition: { duration: 0.5, delay: 0.5 } }}
      >
        <Image src={a1} alt="" style={{ width: "100%" }} />
      </MotionBox>
      <Image
        src={a2}
        alt=""
        style={{ position: "absolute", bottom: 0, left: "19%", width: "48%" }}
      />

      <MotionBox
        pos="absolute"
        bottom={0}
        left="45%"
        zIndex={5}
        w="43%"
        initial={{ bottom: -30 }}
        animate={{ bottom: 0, transition: { duration: 0.5, delay: 0.5 } }}
      >
        <Image src={a3} alt="" style={{ width: "100%" }} />
      </MotionBox>

      <Image
        src={a4}
        alt=""
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: 4,
          width: "27%",
        }}
      />
    </MotionBox>
  );
}

export default SectionA;
