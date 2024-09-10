"use client";

import { MotionBox } from "@/components/motion-elements";
import { Button, Flex, HStack, Input, Text, useDisclosure } from "@chakra-ui/react";
import ArrowRight3Icon from "@/icons/arrow-right-3";
import spark1 from "@/assets/landing-page/spark1.png";
import spark2 from "@/assets/landing-page/spark2.png";
import Footer from "../footer";
import Image from "next/image";
import Backdrop from "../backdrop";
import NewsletterModal from "../newsletter-modal";

function SectionJ() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = () => {
    onOpen()
  }

  return (
    <>
    <MotionBox
      h="400px"
      pos="relative"
      overflow="hidden"
      initial={{ opacity: 0, y: 200 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5, ease: "easeOut" } }}
    >
      <Flex justify="space-between" align="center" pos="absolute" w="100%" top="25%" pb="1000px">
        <Image src={spark1} alt="" style={{ width: "calc(50% - 200px)" }} />       
        <MotionBox
          w="330px"
          zIndex={1}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
        >
          <Text fontWeight="bold" fontSize="lg" textAlign="center" mb={10}>
            Subscribe to our newsletter
          </Text>

          <HStack>
            {/* <Input w="calc(100% - 70px)" bg="#fff" borderRadius="0" color="#000" />
            <Button w="70px" borderRadius="0 7px 7px 0" bg="secondary" _hover={{ bg: "primary" }} onClick={handleSubmit}>
              <ArrowRight3Icon fontSize="xl" />
            </Button> */}

            <Button w="100%" borderRadius="7px" bg="secondary" color="#ffffff" _hover={{ bg: "primary" }} onClick={handleSubmit}>
              Subscribe
            </Button>
          </HStack>
        </MotionBox> 


        <Image src={spark2} alt="" style={{ right: 0, width: "calc(50% - 200px)" }} />
      </Flex>

      <Footer />
    </MotionBox>

    <Backdrop isOpen={isOpen} isFullscreen>
      <NewsletterModal handleClose={onClose} />
    </Backdrop>
    </>
  );
}

export default SectionJ;
