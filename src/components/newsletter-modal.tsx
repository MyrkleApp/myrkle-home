import { MotionBox } from "@/components/motion-elements";
import { Box, CloseButton, Flex, Text, useOutsideClick, useToast } from "@chakra-ui/react";
import { useRef } from "react";

export interface NewsletterModalProps {
  handleClose: () => void;
}

function NewsletterModal({ handleClose }: NewsletterModalProps) {
  const ref = useRef(null);

  useOutsideClick({
    ref,
    handler: handleClose,
  });

  return (
    <MotionBox
      ref={ref}
      pos="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      h="500px"
      w="600px"
      borderRadius="10px"
      bg="darkest"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <CloseButton bg="darker" pos="absolute" right="20px" top="20px" />
      <Box mt="70px" >
        <iframe src="https://cdn.forms-content-1.sg-form.com/459cd58d-dc60-11ee-b6ec-c2c625332cf6" width={600} height={500} />
      </Box>
    </MotionBox>
  );
}

export default NewsletterModal;
