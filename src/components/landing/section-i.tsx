import { MotionBox, MotionButton, MotionText } from "@/components/motion-elements";
import landingBlurb from "@/assets/landing-blurb.svg";
import { Box } from "@chakra-ui/react";
import ROUTES from "@/routes";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { novaBlackFont } from "@/app/fonts";

function SectionI() {
  const router = useRouter();

  return (
    <MotionBox
      id="about"
      w="100vw"
      h="100vh"
      pos="relative"
      overflow="hidden"
      // initial={{ opacity: 0, y: 200 }}
      // viewport={{ once: true }}
      // whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5, ease: "easeOut" } }}
    >
      <Box pos="absolute" top="22%" left="50%" w="70%" transform="translate(-50%)" zIndex={1}>
        <MotionText
          className={novaBlackFont.className}
          fontSize="40px"
          textAlign="center"
          mb="40px"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
        >
          Join Myrkle today
        </MotionText>

        <MotionText
          textAlign="center"
          w="60%"
          mx="auto"
          fontWeight="bold"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
        >
          Myrkle is a revolutionary Web3 super app that simplifies managing your digital assets. It
          seamlessly integrates with Web3, providing essential functions that empower you to
          navigate the decentralized world with ease. Create and manage fungible and non-fungible
          tokens, swap assets, and manage your wallets – all within the Myrkle platform. This
          translates to complete control over your digital assets, with the added benefit of
          transparent and secure management. Myrkle is the ultimate solution for anyone seeking to
          unlock the power of Web3 and explore the vast opportunities it holds for their digital
          assets.
        </MotionText>
      </Box>

      <Box h="50%" pos="absolute" bottom={0} left={0} w="100%">
        <Image src={landingBlurb} alt="" style={{ width: "100%" }} />
      </Box>

      <MotionButton
        bg="#fff"
        pos="absolute"
        bottom="80px"
        transform="translateX(-50%)"
        fontWeight="bold"
        p="10px"
        h="45px"
        borderRadius="30px"
        overflow="hidden"
        zIndex={3}
        onClick={() => router.push(ROUTES.SELECT_MYRKLE_APP)}
        initial={{ width: 45, right: 0, color: "#fff" }}
        animate={{
          width: [45, 45, 45, 45, 180],
          color: ["#fff", "#fff", "#fff", "#fff", "#000"],
          left: "50%",
          transition: { duration: 0.8 },
        }}
      >
        Get Started
      </MotionButton>

      <MotionBox
        bg="#fff"
        pos="absolute"
        bottom="80px"
        left="42%"
        h="44px"
        w="45px"
        borderRadius="50%"
        initial={{ left: 0 }}
        animate={{ left: "50%", transition: { duration: 0.8 } }}
      />
    </MotionBox>
  );
}

export default SectionI;
