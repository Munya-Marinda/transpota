import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Link,
  Circle,
  Image,
  Center,
  Stack,
  HStack,
} from "@chakra-ui/react";
import React from "react";

const ContactModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const refOpenWhatsApp = React.createRef();
  return (
    <HStack justify={{ base: "center", md: "left" }}>
      <Button
        w={"fit-content"}
        size={"lg"}
        variant={"solid"}
        color={"white"}
        bg={"#800000"}
        _hover={{
          background: "green",
          borderWidth: "0px",
          borderColor: "green",
        }}
        _active={{
          background: "green",
        }}
        onClick={onOpen}
      >
        LET'S CHAT
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={refOpenWhatsApp}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Opening
            <Text
              ml={"5px "}
              display={"inline-block"}
              fontWeight={"bold"}
              color={"whatsapp.700"}
            >
              WhatsaApp.
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Text flexDirection={"row"}>
                You are being redirected to
                <Text
                  ml={"5px"}
                  display={"inline-block"}
                  fontWeight={"black"}
                  color={"whatsapp.700"}
                >
                  WhatsaApp.
                </Text>
                <Center ml={"5px"} display={"inline-block"}>
                  <Circle p={1} bg={"whatsapp.700"} w={"20px"} h={"20px"}>
                    <Image src="/assets/svg/whatsapp_nobg.svg" w={"95%"} />
                  </Circle>
                </Center>
              </Text>
              <Text> Make sure you the latest version installed.</Text>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <HStack>
              <Link href={props.whatsappLink} isExternal>
                <Button
                  w={"fit-content"}
                  size={"md"}
                  variant={"solid"}
                  color={"white"}
                  bg={"whatsapp.700"}
                  colorScheme="blue"
                  mr={3}
                  onClick={onClose}
                  ref={refOpenWhatsApp}
                >
                  Open
                </Button>
              </Link>
              <Link href={props.emailLink} isExternal>
                <Button
                  size={"md"}
                  variant="ghost"
                  borderColor={"gray"}
                  borderWidth={"1px"}
                  onClick={onOpen}
                >
                  Email us instead
                </Button>
              </Link>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  );
};

export default ContactModal;
